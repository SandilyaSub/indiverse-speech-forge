
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Square } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob) => void;
}

const AudioRecorder = ({ onRecordingComplete }: AudioRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        onRecordingComplete(audioBlob);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      
      // Start timer
      setRecordingTime(0);
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        variant: "destructive",
        title: "Microphone Access Error",
        description: "Cannot access your microphone. Please ensure you've granted permission."
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-start">
      <h3 className="flex items-center gap-2 font-medium mb-3">
        <Mic size={20} className="text-indic-purple" /> Record Audio
      </h3>
      <p className="text-sm text-gray-500 mb-4">Record directly from your microphone</p>
      
      <div className="w-full flex flex-col items-center">
        {isRecording && (
          <div className="mb-4 text-center">
            <div className="text-lg font-semibold text-indic-purple">{formatTime(recordingTime)}</div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse-gentle mx-auto mt-2"></div>
          </div>
        )}
        
        {isRecording ? (
          <Button 
            variant="destructive" 
            onClick={stopRecording}
            className="flex gap-2"
          >
            <Square size={16} /> Stop Recording
          </Button>
        ) : (
          <Button 
            onClick={startRecording}
            className="bg-indic-purple hover:bg-indic-purple-dark flex gap-2"
          >
            <Mic size={16} /> Start Recording
          </Button>
        )}
      </div>
    </div>
  );
};

export default AudioRecorder;
