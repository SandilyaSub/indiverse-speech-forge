
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import StepHeading from '@/components/layout/StepHeading';
import ContentCard from '@/components/layout/ContentCard';
import StepNavigation from '@/components/navigation/StepNavigation';
import ProgressBar from '@/components/navigation/ProgressBar';
import Footer from '@/components/layout/Footer';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DiarizationVisualizer from '@/components/transcription/DiarizationVisualizer';
import TranscriptionEditor from '@/components/transcription/TranscriptionEditor';

const MOCK_SEGMENTS = [
  { 
    id: '1', 
    startTime: 0, 
    endTime: 4, 
    content: 'So tell me, Ro, has anyone referred to you as Sharma ji ka beta?',
    speaker: 'SPEAKER_00',
    timeCode: '0:00-0:04'
  },
  { 
    id: '2', 
    startTime: 4, 
    endTime: 7, 
    content: 'Yes, a lot of people, my friends, my teammates.',
    speaker: 'SPEAKER_01',
    timeCode: '0:04-0:07'
  },
  { 
    id: '3', 
    startTime: 7, 
    endTime: 8, 
    content: 'many a time',
    speaker: 'SPEAKER_01',
    timeCode: '0:07-0:08'
  },
  { 
    id: '4', 
    startTime: 8, 
    endTime: 11, 
    content: 'Am I a better wife or a better manager?',
    speaker: 'SPEAKER_00',
    timeCode: '0:08-0:11'
  },
  { 
    id: '5', 
    startTime: 11, 
    endTime: 17, 
    content: 'You are really good at both. But I think you are a great mother. songs that have been on loop in your head.',
    speaker: 'SPEAKER_01',
    timeCode: '0:11-0:17'
  },
  { 
    id: '6', 
    startTime: 17, 
    endTime: 21, 
    content: 'At the moment it\'s all uh Sami\'s song from Lion King, two wheels on the bus.',
    speaker: 'SPEAKER_01',
    timeCode: '0:17-0:21'
  },
  { 
    id: '7', 
    startTime: 21, 
    endTime: 24, 
    content: 'So I have to have that song on my phone.',
    speaker: 'SPEAKER_01',
    timeCode: '0:21-0:24'
  },
];

const TranscriptionPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('original');
  const [activeSegment, setActiveSegment] = useState<string | undefined>(undefined);
  const [detectedLanguage, setDetectedLanguage] = useState('english');
  const [fullTranscription, setFullTranscription] = useState(
    MOCK_SEGMENTS.map(seg => seg.content).join(' ')
  );
  const [segments, setSegments] = useState(MOCK_SEGMENTS);
  const [isLoading, setIsLoading] = useState(false);

  const handleSegmentContentChange = (id: string, content: string) => {
    setSegments(prev => 
      prev.map(seg => seg.id === id ? { ...seg, content } : seg)
    );
    
    // Also update full transcription
    const updatedSegments = segments.map(seg => 
      seg.id === id ? { ...seg, content } : seg
    );
    setFullTranscription(updatedSegments.map(seg => seg.content).join(' '));
  };

  const handleSegmentSpeakerChange = (id: string, speaker: string) => {
    setSegments(prev => 
      prev.map(seg => seg.id === id ? { ...seg, speaker } : seg)
    );
  };

  const handleFullTranscriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFullTranscription(e.target.value);
  };

  const handleContinue = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/translation');
    }, 1500);
  };

  const steps = ['Input', 'Transcription', 'Translation', 'Synthesis', 'Validation'];

  return (
    <PageContainer>
      <Header />
      
      <ProgressBar steps={steps} currentStep={1} />
      
      <StepHeading stepNumber={2} title="Transcription" />
      
      <ContentCard>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="font-medium mr-2">Detected Language:</span>
            <span className="text-indic-purple">{detectedLanguage}</span>
          </div>
          
          <h3 className="text-lg font-medium mb-3">Transcription</h3>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="original">Original Transcription</TabsTrigger>
              <TabsTrigger value="diarization">Diarization Editor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="original">
              <Textarea 
                value={fullTranscription}
                onChange={handleFullTranscriptionChange}
                className="min-h-32"
              />
            </TabsContent>
            
            <TabsContent value="diarization">
              <DiarizationVisualizer 
                segments={segments}
                duration={24}
                activeSegment={activeSegment}
                onSegmentClick={id => setActiveSegment(id)}
              />
              
              {segments.map(segment => (
                <TranscriptionEditor
                  key={segment.id}
                  id={segment.id}
                  timeCode={segment.timeCode}
                  speaker={segment.speaker}
                  content={segment.content}
                  onContentChange={handleSegmentContentChange}
                  onSpeakerChange={handleSegmentSpeakerChange}
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </ContentCard>
      
      <StepNavigation
        onBack={() => navigate('/')}
        onNext={handleContinue}
        loading={isLoading}
      />
      
      <Footer />
    </PageContainer>
  );
};

export default TranscriptionPage;
