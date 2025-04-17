
import React from 'react';
import { cn } from '@/lib/utils';

interface SimilarityScoreProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const SimilarityScore = ({
  score,
  maxScore = 100,
  size = 'md',
  showText = true,
  className
}: SimilarityScoreProps) => {
  const percentage = (score / maxScore) * 100;
  
  const getSizeClass = () => {
    switch (size) {
      case 'sm': return 'w-16 h-16 text-xl';
      case 'lg': return 'w-36 h-36 text-5xl';
      default: return 'w-24 h-24 text-3xl';
    }
  };
  
  const getColor = () => {
    if (percentage >= 90) return 'text-indic-green border-indic-green';
    if (percentage >= 70) return 'text-indic-blue border-indic-blue';
    if (percentage >= 50) return 'text-indic-orange border-indic-orange';
    return 'text-indic-red border-indic-red';
  };
  
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div 
        className={cn(
          "rounded-full border-4 flex items-center justify-center font-bold",
          getSizeClass(),
          getColor()
        )}
      >
        {score}
      </div>
      {showText && (
        <div className="text-sm text-gray-500 mt-2">out of {maxScore}</div>
      )}
    </div>
  );
};

export default SimilarityScore;
