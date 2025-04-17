
import React from 'react';

interface StepHeadingProps {
  stepNumber: number;
  title: string;
}

const StepHeading = ({ stepNumber, title }: StepHeadingProps) => {
  return (
    <h2 className="text-2xl font-semibold text-indic-purple mb-6">
      Step {stepNumber}: {title}
    </h2>
  );
};

export default StepHeading;
