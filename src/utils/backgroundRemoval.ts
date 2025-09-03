export const removeBackground = (imageUrl: string): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('../workers/background.worker.ts', import.meta.url), {
      type: 'module'
    });

    worker.onmessage = (event: MessageEvent<{ status: string; blob?: Blob; error?: string }>) => {
      if (event.data.status === 'complete' && event.data.blob) {
        resolve(event.data.blob);
        worker.terminate(); // Clean up the worker
      } else if (event.data.status === 'error') {
        reject(new Error(event.data.error));
        worker.terminate(); // Clean up the worker
      }
    };

    worker.onerror = (error) => {
      reject(error);
      worker.terminate(); // Clean up the worker
    };

    // Send the image URL to the worker to start processing
    worker.postMessage({ imageUrl });
  });
};


// These functions are still useful on the main thread
export const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

export const loadImageFromUrl = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
};