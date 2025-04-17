
import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl animate-fade-in">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
