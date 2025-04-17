
import React from 'react';
import { cn } from '@/lib/utils';

interface Segment {
  id: string;
  startTime: number;
  endTime: number;
  speaker: string;
}

interface DiarizationVisualizerProps {
  segments: Segment[];
  duration: number;
  activeSegment?: string;
  onSegmentClick?: (id: string) => void;
}

const DiarizationVisualizer = ({
  segments,
  duration,
  activeSegment,
  onSegmentClick
}: DiarizationVisualizerProps) => {
  const colors = {
    'SPEAKER_00': 'bg-indic-blue',
    'SPEAKER_01': 'bg-indic-purple',
    'SPEAKER_02': 'bg-indic-green',
    'SPEAKER_03': 'bg-indic-orange',
    'default': 'bg-indic-gray-dark'
  };

  const getSegmentWidth = (start: number, end: number) => {
    return ((end - start) / duration) * 100;
  };

  return (
    <div className="audio-waveform w-full mb-4">
      {segments.map(segment => (
        <div
          key={segment.id}
          className={cn(
            "waveform-segment cursor-pointer hover:opacity-80 transition-opacity",
            colors[segment.speaker as keyof typeof colors] || colors.default,
            activeSegment === segment.id && "ring-2 ring-white"
          )}
          style={{ width: `${getSegmentWidth(segment.startTime, segment.endTime)}%` }}
          onClick={() => onSegmentClick && onSegmentClick(segment.id)}
          title={`${segment.speaker}: ${segment.startTime.toFixed(2)}s - ${segment.endTime.toFixed(2)}s`}
        />
      ))}
    </div>
  );
};

export default DiarizationVisualizer;
