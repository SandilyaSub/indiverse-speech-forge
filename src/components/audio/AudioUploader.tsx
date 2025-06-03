
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, FileAudio } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AudioUploaderProps {
  onFileSelected: (file: File) => void;
}

const AudioUploader = ({ onFileSelected }: AudioUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      if (file.type.startsWith('audio/')) {
        setSelectedFile(file);
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please select an audio file (MP3, WAV, etc.)"
        });
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileSelected(selectedFile);
    } else {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select an audio file first"
      });
    }
  };

  return (
    <div className="flex flex-col items-start w-full">
      <h3 className="flex items-center gap-2 font-medium mb-3 text-md-on-surface">
        <FileAudio size={20} className="text-md-primary" /> Upload Audio File
      </h3>
      <p className="text-sm text-md-on-surface-variant mb-4">
        Upload an MP3, WAV, or other audio file for processing
      </p>
      
      <div className="w-full space-y-4">
        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden" 
          accept="audio/*"
          onChange={handleFileChange}
        />
        
        <Button 
          variant="outline" 
          onClick={handleButtonClick}
          className="flex gap-2 mb-3 w-full border-md-outline text-md-on-surface hover:bg-md-surface-variant"
        >
          <Upload size={16} /> Choose Audio File
        </Button>
        
        <div className="text-sm mb-4 p-3 bg-md-surface-variant rounded-md min-h-[40px] flex items-center">
          {selectedFile ? (
            <span className="text-md-on-surface">{selectedFile.name}</span>
          ) : (
            <span className="text-md-on-surface-variant">No file selected</span>
          )}
        </div>
        
        <Button 
          onClick={handleUpload}
          disabled={!selectedFile}
          className="bg-md-primary hover:bg-md-primary/90 text-md-on-primary w-full disabled:bg-md-surface-variant disabled:text-md-on-surface-variant"
        >
          Process Audio File
        </Button>
      </div>
    </div>
  );
};

export default AudioUploader;
