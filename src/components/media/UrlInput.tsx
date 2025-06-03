
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, Youtube, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface UrlInputProps {
  onUrlSubmitted: (url: string, platform: 'youtube' | 'instagram') => void;
}

const UrlInput = ({ onUrlSubmitted }: UrlInputProps) => {
  const [url, setUrl] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationStatus, setValidationStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const { toast } = useToast();

  const detectPlatform = (url: string): 'youtube' | 'instagram' | null => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    }
    if (url.includes('instagram.com')) {
      return 'instagram';
    }
    return null;
  };

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return detectPlatform(url) !== null;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    
    if (newUrl.trim()) {
      const isValid = validateUrl(newUrl);
      setValidationStatus(isValid ? 'valid' : 'invalid');
    } else {
      setValidationStatus('idle');
    }
  };

  const handleSubmit = async () => {
    if (!url.trim()) {
      toast({
        variant: "destructive",
        title: "URL Required",
        description: "Please enter a YouTube or Instagram URL"
      });
      return;
    }

    const platform = detectPlatform(url);
    if (!platform) {
      toast({
        variant: "destructive",
        title: "Invalid URL",
        description: "Please enter a valid YouTube or Instagram URL"
      });
      return;
    }

    setIsValidating(true);
    
    // Simulate URL validation
    setTimeout(() => {
      setIsValidating(false);
      onUrlSubmitted(url, platform);
      toast({
        title: "Media URL Submitted",
        description: `Processing ${platform} content...`
      });
    }, 1500);
  };

  const platform = url ? detectPlatform(url) : null;

  return (
    <div className="flex flex-col items-start w-full">
      <h3 className="flex items-center gap-2 font-medium mb-3 text-md-on-surface">
        <Link size={20} className="text-md-primary" /> Media URL Input
      </h3>
      <p className="text-sm text-md-on-surface-variant mb-4">
        Enter a YouTube or Instagram URL to process the audio content
      </p>
      
      <div className="w-full space-y-4">
        <div className="relative">
          <Input 
            value={url}
            onChange={handleUrlChange}
            placeholder="https://youtube.com/watch?v=... or https://instagram.com/..."
            className="w-full pr-10 border-md-outline focus:border-md-primary"
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {validationStatus === 'valid' && (
              <CheckCircle size={16} className="text-green-500" />
            )}
            {validationStatus === 'invalid' && (
              <AlertCircle size={16} className="text-md-error" />
            )}
          </div>
        </div>
        
        {platform && (
          <div className="flex items-center gap-2 text-sm text-md-on-surface-variant">
            {platform === 'youtube' && <Youtube size={16} className="text-red-500" />}
            {platform === 'instagram' && <Instagram size={16} className="text-pink-500" />}
            <span>Detected: {platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
          </div>
        )}
        
        <Button 
          onClick={handleSubmit}
          disabled={!url.trim() || validationStatus === 'invalid' || isValidating}
          className="bg-md-primary hover:bg-md-primary/90 text-md-on-primary w-full"
        >
          {isValidating ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-processing" />
              Validating...
            </div>
          ) : (
            'Process Media'
          )}
        </Button>
      </div>
    </div>
  );
};

export default UrlInput;
