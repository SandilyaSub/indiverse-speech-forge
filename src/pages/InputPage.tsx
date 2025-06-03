import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import StepHeading from '@/components/layout/StepHeading';
import ContentCard from '@/components/layout/ContentCard';
import UrlInput from '@/components/media/UrlInput';
import AudioUploader from '@/components/audio/AudioUploader';
import LanguageSelector from '@/components/forms/LanguageSelector';
import NumberSelector from '@/components/forms/NumberSelector';
import GenderSelector from '@/components/forms/GenderSelector';
import StepNavigation from '@/components/navigation/StepNavigation';
import ProcessingAnimation from '@/components/animations/ProcessingAnimation';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import ProgressBar from '@/components/navigation/ProgressBar';
import Footer from '@/components/layout/Footer';

const InputPage = () => {
  const navigate = useNavigate();
  const [targetLanguage, setTargetLanguage] = useState('hi');
  const [speakerCount, setSpeakerCount] = useState('1');
  const [gender, setGender] = useState('male');
  const [speakerName, setSpeakerName] = useState('');
  const [voiceSelection, setVoiceSelection] = useState('voice1');
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [mediaPlatform, setMediaPlatform] = useState<'youtube' | 'instagram' | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [processingStage, setProcessingStage] = useState<'download' | 'transcription' | null>(null);

  const handleUrlSubmitted = (url: string, platform: 'youtube' | 'instagram') => {
    setMediaUrl(url);
    setMediaPlatform(platform);
    setAudioFile(null);
  };

  const handleFileSelected = (file: File) => {
    setAudioFile(file);
    setMediaUrl(null);
    setMediaPlatform(null);
  };

  const handleContinue = () => {
    setIsLoading(true);
    setProcessingStage('download');
    
    // Simulate processing stages
    setTimeout(() => {
      setProcessingStage('transcription');
      setTimeout(() => {
        setIsLoading(false);
        setProcessingStage(null);
        navigate('/transcription');
      }, 2000);
    }, 3000);
  };

  const steps = ['Input', 'Transcription', 'Translation', 'Synthesis', 'Validation'];

  const voiceOptions = [
    { code: 'voice1', name: 'Voice 1 - Male' },
    { code: 'voice2', name: 'Voice 2 - Female' },
    { code: 'voice3', name: 'Voice 3 - Neutral' },
  ];

  if (isLoading) {
    return (
      <PageContainer>
        <Header />
        <ProgressBar steps={steps} currentStep={0} />
        <StepHeading stepNumber={1} title="Processing Input" />
        
        <ContentCard className="min-h-[400px] flex items-center justify-center">
          <ProcessingAnimation type={processingStage || 'download'} />
        </ContentCard>
        
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      
      <ProgressBar steps={steps} currentStep={0} />
      
      <StepHeading stepNumber={1} title="Input" />
      
      <ContentCard className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-md-surface border border-md-outline-variant">
        <UrlInput onUrlSubmitted={handleUrlSubmitted} />
        
        <div className="flex items-center justify-center md:justify-start">
          <div className="text-md-on-surface-variant font-medium">OR</div>
        </div>
        
        <AudioUploader onFileSelected={handleFileSelected} />
      </ContentCard>
      
      <ContentCard className="bg-md-surface border border-md-outline-variant">
        <div className="mb-6">
          <h3 className="font-medium mb-4 text-md-on-surface">Target Language</h3>
          <LanguageSelector 
            label="Translate to:"
            value={targetLanguage}
            onChange={setTargetLanguage}
          />
        </div>
        
        <Separator className="my-6 bg-md-outline-variant" />
        
        <div>
          <h3 className="font-medium mb-4 text-md-on-surface">Character Information</h3>
          
          <div className="space-y-4">
            <NumberSelector
              label="Number of Speakers:"
              value={speakerCount}
              onChange={setSpeakerCount}
              max={5}
            />
            
            <div className="pt-2">
              <h4 className="text-sm font-medium mb-4 text-md-on-surface">Speaker 1</h4>
              
              <div className="space-y-4">
                <GenderSelector value={gender} onChange={setGender} />
                
                <div>
                  <label className="block text-sm font-medium text-md-on-surface mb-1">Name (Optional):</label>
                  <Input 
                    value={speakerName}
                    onChange={(e) => setSpeakerName(e.target.value)}
                    placeholder="Enter name"
                    className="border-md-outline focus:border-md-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-md-on-surface mb-1">Voice (Optional):</label>
                  <LanguageSelector
                    value={voiceSelection}
                    onChange={setVoiceSelection}
                    label=""
                    languages={voiceOptions}
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
