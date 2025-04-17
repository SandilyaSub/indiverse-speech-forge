
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
                    ? "bg-indic-purple-dark text-white" 
                    : index === currentStep 
                      ? "bg-indic-purple text-white" 
                      : "bg-gray-200 text-gray-600"
                )}
              >
                {index + 1}
              </div>
              <span 
                className={cn(
                  "text-xs text-center",
                  index === currentStep 
                    ? "text-indic-purple font-medium" 
                    : "text-gray-500"
                )}
              >
                {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div 
                className={cn(
                  "flex-grow h-0.5 mx-2",
                  index < currentStep ? "bg-indic-purple" : "bg-gray-200"
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
