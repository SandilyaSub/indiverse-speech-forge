
import React from 'react';
import { cn } from '@/lib/utils';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

const ContentCard = ({ children, className }: ContentCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md p-6 mb-6", className)}>
      {children}
    </div>
  );
};

export default ContentCard;
