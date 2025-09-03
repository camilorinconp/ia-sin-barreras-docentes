import { pipeline, env } from '@huggingface/transformers';

// --- OPTIMIZACIÓN CLAVE ---
// Activar la caché para no descargar el modelo en cada visita.
env.useBrowserCache = true;
env.allowLocalModels = false; // Por seguridad y consistencia, seguir descargando de la fuente oficial.

const MAX_IMAGE_DIMENSION = 1024;

// Función adaptada para OffscreenCanvas (no hay DOM en el worker)
function resizeImageIfNeeded(canvas: OffscreenCanvas, ctx: OffscreenCanvasRenderingContext2D, image: ImageBitmap) {
  let width = image.width;
  let height = image.height;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }
  }
  
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  return true;
}


async function removeBackground(imageUrl: string): Promise<Blob> {
    // Cargar la imagen como un ImageBitmap, que es compatible con workers
    const imageResponse = await fetch(imageUrl);
    const imageBlob = await imageResponse.blob();
    const imageBitmap = await createImageBitmap(imageBlob);

    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512');

    const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get OffscreenCanvas context');

    resizeImageIfNeeded(canvas, ctx, imageBitmap);
    
    const imageDataForPipeline = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const result = await segmenter(imageDataForPipeline);

    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }

    const outputCanvas = new OffscreenCanvas(canvas.width, canvas.height);
    const outputCtx = outputCanvas.getContext('2d');
    if (!outputCtx) throw new Error('Could not get output canvas context');

    outputCtx.drawImage(canvas, 0, 0);
    
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;

    for (let i = 0; i < result[0].mask.data.length; i++) {
      const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
      data[i * 4 + 3] = alpha;
    }

    outputCtx.putImageData(outputImageData, 0, 0);

    return await outputCanvas.convertToBlob({ type: 'image/png' });
}

// El worker escucha mensajes desde la aplicación principal
self.onmessage = async (event: MessageEvent<{ imageUrl: string }>) => {
  try {
    self.postMessage({ status: 'processing' });
    const blob = await removeBackground(event.data.imageUrl);
    self.postMessage({ status: 'complete', blob });
  } catch (error) {
    self.postMessage({ status: 'error', error: (error as Error).message });
  }
};
