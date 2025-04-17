
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface NumberSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  min?: number;
  max?: number;
}

const NumberSelector = ({ value, onChange, label, min = 1, max = 10 }: NumberSelectorProps) => {
  const options = Array.from({ length: max - min + 1 }, (_, i) => (i + min).toString());

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default NumberSelector;
