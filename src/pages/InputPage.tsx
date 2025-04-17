
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import StepHeading from '@/components/layout/StepHeading';
import ContentCard from '@/components/layout/ContentCard';
import AudioUploader from '@/components/audio/AudioUploader';
import AudioRecorder from '@/components/audio/AudioRecorder';
import LanguageSelector from '@/components/forms/LanguageSelector';
import NumberSelector from '@/components/forms/NumberSelector';
import GenderSelector from '@/components/forms/GenderSelector';
import StepNavigation from '@/components/navigation/StepNavigation';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import ProgressBar from '@/components/navigation/ProgressBar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const InputPage = () => {
  const navigate = useNavigate();
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [speakerCount, setSpeakerCount] = useState('1');
  const [gender, setGender] = useState('male');
  const [speakerName, setSpeakerName] = useState('');
  const [voiceSelection, setVoiceSelection] = useState('voice1');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelected = (file: File) => {
    setAudioFile(file);
    setAudioBlob(null);
  };

  const handleRecordingComplete = (blob: Blob) => {
    setAudioBlob(blob);
    setAudioFile(null);
  };

  const handleContinue = () => {
    // In a real app, you would upload the file and process it
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/transcription');
    }, 1500);
  };

  const steps = ['Input', 'Transcription', 'Translation', 'Synthesis', 'Validation'];

  return (
    <PageContainer>
      <div className="mb-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
          onClick={() => navigate('/sessions')}
        >
          <ArrowLeft size={16} />
          Back to Sessions
        </Button>
      </div>
      
      <Header />
      
      <ProgressBar steps={steps} currentStep={0} />
      
      <StepHeading stepNumber={1} title="Input" />
      
      <ContentCard className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AudioUploader onFileSelected={handleFileSelected} />
        
        <div className="flex items-center justify-center md:justify-start">
          <div className="text-gray-400 font-medium">OR</div>
        </div>
        
        <AudioRecorder onRecordingComplete={handleRecordingComplete} />
      </ContentCard>
      
      <ContentCard>
        <div className="mb-6">
          <h3 className="font-medium mb-4">Target Language</h3>
          <LanguageSelector 
            label="Translate to:"
            value={targetLanguage}
            onChange={setTargetLanguage}
          />
        </div>
        
        <Separator className="my-6" />
        
        <div>
          <h3 className="font-medium mb-4">Character Information</h3>
          
          <div className="space-y-4">
            <NumberSelector
              label="Number of Speakers:"
              value={speakerCount}
              onChange={setSpeakerCount}
              max={5}
            />
            
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-4">Speaker 1</h4>
              
              <div className="space-y-4">
                <GenderSelector value={gender} onChange={setGender} />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name (Optional):</label>
                  <Input 
                    value={speakerName}
                    onChange={(e) => setSpeakerName(e.target.value)}
                    placeholder="Enter name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Voice (Optional):</label>
                  <LanguageSelector
                    value={voiceSelection}
                    onChange={setVoiceSelection}
                    label=""
                    languages={[
                      { code: 'voice1', name: 'Voice 1 - Male' },
                      { code: 'voice2', name: 'Voice 2 - Female' },
                      { code: 'voice3', name: 'Voice 3 - Neutral' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentCard>
      
      <StepNavigation 
        onNext={handleContinue}
        loading={isLoading}
      />
      
      <Footer />
    </PageContainer>
  );
};

export default InputPage;
