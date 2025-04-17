
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface StepNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  onValidate?: () => void;
  onStartOver?: () => void;
  nextLabel?: string;
  showValidate?: boolean;
  showStartOver?: boolean;
  loading?: boolean;
}

const StepNavigation = ({ 
  onBack, 
  onNext, 
  onValidate, 
  onStartOver,
  nextLabel = "Continue", 
  showValidate = false,
  showStartOver = false,
  loading = false 
}: StepNavigationProps) => {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {onBack && (
        <Button 
          variant="outline" 
          onClick={onBack}
          disabled={loading}
        >
          Back
        </Button>
      )}
      
      <div className="flex-grow"></div>
      
      {showStartOver && onStartOver && (
        <Button 
          variant="secondary" 
          onClick={onStartOver}
          disabled={loading}
        >
          Start Over
        </Button>
      )}
      
      {showValidate && onValidate && (
        <Button 
          variant="default"
          className="bg-indic-blue hover:bg-indic-blue/90"
          onClick={onValidate}
          disabled={loading}
        >
          Validate
        </Button>
      )}
      
      {onNext && (
        <Button 
          onClick={() => {
            if (onNext) {
              onNext();
            } else {
              toast({
                title: "Processing...",
                description: "This feature is still being implemented.",
              });
            }
          }}
          className="bg-indic-purple hover:bg-indic-purple-dark"
          disabled={loading}
        >
          {loading ? "Processing..." : nextLabel}
        </Button>
      )}
    </div>
  );
};

export default StepNavigation;
