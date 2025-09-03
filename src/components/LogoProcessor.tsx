import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  onProcessed: (processedImageUrl: string) => void;
}

const LogoProcessor = ({ onProcessed }: LogoProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processLogo = async () => {
    try {
      setIsProcessing(true);
      setError(null);
      
      console.log('Loading original logo...');
      const originalImage = await loadImageFromUrl('/lovable-uploads/7714c3b9-e349-4290-abe2-d780d6a516a0.png');
      
      console.log('Removing background...');
      const processedBlob = await removeBackground(originalImage);
      
      console.log('Creating processed URL...');
      const processedUrl = URL.createObjectURL(processedBlob);
      
      onProcessed(processedUrl);
      console.log('Logo processing completed successfully!');
      
    } catch (err) {
      console.error('Error processing logo:', err);
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    processLogo();
  }, []);

  if (error) {
    console.log('Using original logo due to processing error:', error);
    // Fallback to original logo on error
    onProcessed('/lovable-uploads/7714c3b9-e349-4290-abe2-d780d6a516a0.png');
    return null;
  }

  if (isProcessing) {
    return (
      <div className="flex items-center space-x-2 text-muted-foreground">
        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-sm">Procesando logo...</span>
      </div>
    );
  }

  return null;
};

export default LogoProcessor;