
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessingAnimationProps {
  type?: 'download' | 'transcription' | 'translation' | 'synthesis';
  className?: string;
}

const ProcessingAnimation = ({ type = 'download', className }: ProcessingAnimationProps) => {
  const getAnimationContent = () => {
    switch (type) {
      case 'download':
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-md-outline-variant rounded-full"></div>
              <div className="absolute inset-0 border-4 border-md-primary border-t-transparent rounded-full animate-processing"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-8 bg-md-primary rounded animate-wave" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-8 bg-md-primary rounded animate-wave" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-8 bg-md-primary rounded animate-wave" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-8 bg-md-primary rounded animate-wave" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-8 bg-md-primary rounded animate-wave" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        );
      
      case 'transcription':
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-12 bg-md-surface-variant rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
              <div className="p-2 space-y-1">
                <div className="h-2 bg-md-outline-variant rounded"></div>
                <div className="h-2 bg-md-outline-variant rounded w-4/5"></div>
                <div className="h-2 bg-md-outline-variant rounded w-3/5"></div>
              </div>
            </div>
            <div className="text-sm text-md-on-surface-variant">Converting speech to text...</div>
          </div>
        );
      
      case 'translation':
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-md-secondary-container rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-md-on-secondary-container">EN</span>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-md-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-1 h-1 bg-md-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-md-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <div className="w-8 h-8 bg-md-tertiary-container rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-md-on-tertiary-container">HI</span>
              </div>
            </div>
            <div className="text-sm text-md-on-surface-variant">Translating content...</div>
          </div>
        );
      
      case 'synthesis':
        return (
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-md-primary-container rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-md-primary border-t-transparent rounded-full animate-processing"></div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-md-error rounded-full animate-pulse"></div>
            </div>
            <div className="text-sm text-md-on-surface-variant">Generating speech...</div>
          </div>
        );
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center p-8", className)}>
      {getAnimationContent()}
    </div>
  );
};

export default ProcessingAnimation;
