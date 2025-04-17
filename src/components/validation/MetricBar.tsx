
import React from 'react';
import { cn } from '@/lib/utils';

interface MetricBarProps {
  label: string;
  value: number;
  maxValue?: number;
  weight?: number;
  color?: string;
}

const MetricBar = ({
  label,
  value,
  maxValue = 100,
  weight,
  color = 'bg-indic-green'
}: MetricBarProps) => {
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <div className="flex items-center gap-2">
          {weight !== undefined && (
            <span className="text-gray-500">Weight: {weight}</span>
          )}
          <span className="font-medium">{value}/{maxValue}</span>
        </div>
      </div>
      <div className="h-2.5 rounded-full bg-gray-200 overflow-hidden">
        <div 
          className={cn("h-full rounded-full", color)}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MetricBar;
