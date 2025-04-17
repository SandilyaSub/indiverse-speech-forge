
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
    <div className="flex flex-col items-start">
      <h3 className="flex items-center gap-2 font-medium mb-3">
        <FileAudio size={20} className="text-indic-purple" /> Upload Audio
      </h3>
      <p className="text-sm text-gray-500 mb-4">Upload an MP3 or WAV file</p>
      
      <div className="w-full">
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
          className="flex gap-2 mb-3"
        >
          <Upload size={16} /> Choose File
        </Button>
        
        <div className="text-sm mb-4">
          {selectedFile ? (
            <span>{selectedFile.name}</span>
          ) : (
            <span className="text-gray-500">No file selected</span>
          )}
        </div>
        
        <Button 
          onClick={handleUpload}
          disabled={!selectedFile}
          className="bg-indic-purple hover:bg-indic-purple-dark w-full"
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default AudioUploader;
