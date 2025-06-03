
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const ProgressBar = ({ steps, currentStep, onStepClick }: ProgressBarProps) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div 
              className={cn(
                "flex flex-col items-center cursor-pointer",
                onStepClick ? "cursor-pointer" : "cursor-default"
              )}
              onClick={() => onStepClick && onStepClick(index)}
            >
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2",
                  index < currentStep 
                    ? "bg-md-primary text-md-on-primary" 
                    : index === currentStep 
                      ? "bg-md-primary text-md-on-primary" 
                      : "bg-md-surface-variant text-md-on-surface-variant"
                )}
              >
                {index + 1}
              </div>
              <span 
                className={cn(
                  "text-xs text-center",
                  index === currentStep 
                    ? "text-md-primary font-medium" 
                    : "text-md-on-surface-variant"
                )}
              >
                {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "flex-grow h-0.5 mx-2",
                  index < currentStep ? "bg-md-primary" : "bg-md-outline-variant"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
