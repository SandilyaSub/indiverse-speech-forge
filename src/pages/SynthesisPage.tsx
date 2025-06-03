
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import StepHeading from '@/components/layout/StepHeading';
import ContentCard from '@/components/layout/ContentCard';
import StepNavigation from '@/components/navigation/StepNavigation';
import ProgressBar from '@/components/navigation/ProgressBar';
import Footer from '@/components/layout/Footer';
import AudioPlayer from '@/components/audio/AudioPlayer';
import ProcessingAnimation from '@/components/animations/ProcessingAnimation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Download, RefreshCw } from 'lucide-react';

const SynthesisPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioGenerated, setAudioGenerated] = useState(true);

  // Mock audio URL - in a real app this would be generated dynamically
  const audioUrl = 'https://audio-samples.github.io/samples/mp3/blizzard_unconditional/sample-2.mp3';

  const handleGenerateSpeech = () => {
    setIsGenerating(true);
    toast({
      title: "Generating Speech",
      description: "Creating synthesized speech in Hindi. This may take a moment..."
    });
    
    setTimeout(() => {
      setIsGenerating(false);
      setAudioGenerated(true);
      toast({
        title: "Speech Generated",
        description: "Successfully created synthesized audio in Hindi"
      });
    }, 2000);
  };
  
  const handleDownload = () => {
    toast({
      title: "Downloading",
      description: "Saving synthesized speech to your device"
    });
  };

  const handleValidate = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/validation');
    }, 1500);
  };

  const steps = ['Input', 'Transcription', 'Translation', 'Synthesis', 'Validation'];

  if (isGenerating) {
    return (
      <PageContainer>
        <Header />
        <ProgressBar steps={steps} currentStep={3} />
        <StepHeading stepNumber={4} title="Speech Synthesis" />
        
        <ContentCard className="min-h-[400px] flex items-center justify-center bg-md-surface border border-md-outline-variant">
          <ProcessingAnimation type="synthesis" />
        </ContentCard>
        
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      
      <ProgressBar steps={steps} currentStep={3} />
      
      <StepHeading stepNumber={4} title="Speech Synthesis" />
      
      <ContentCard className="bg-md-surface border border-md-outline-variant">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-6 text-md-on-surface">Generating Speech in Hindi</h3>
          
          {audioGenerated ? (
            <div className="space-y-6">
              <div>
                <h4 className="text-md font-medium mb-4 text-md-on-surface">Translated Audio</h4>
                <AudioPlayer 
                  audioUrl={audioUrl} 
                  allowDownload={false}
                />
              </div>
              
              <div className="flex">
                <Button
                  onClick={handleDownload}
                  className="bg-md-secondary hover:bg-md-secondary/90 text-md-on-secondary flex gap-1"
                >
                  <Download size={16} /> Download
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-md-on-surface-variant mb-4">No audio has been generated yet. Click the button below to create synthesized speech.</p>
            </div>
          )}
        </div>
      </ContentCard>
      
      <StepNavigation
        onBack={() => navigate('/translation')}
        onNext={handleGenerateSpeech}
        nextLabel="Generate Speech"
        showValidate={audioGenerated}
        onValidate={handleValidate}
        loading={isLoading}
      />
      
      <Footer />
    </PageContainer>
  );
};

export default SynthesisPage;
