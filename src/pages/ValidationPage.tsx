
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import Header from '@/components/layout/Header';
import StepHeading from '@/components/layout/StepHeading';
import ContentCard from '@/components/layout/ContentCard';
import StepNavigation from '@/components/navigation/StepNavigation';
import ProgressBar from '@/components/navigation/ProgressBar';
import Footer from '@/components/layout/Footer';
import AudioPlayer from '@/components/audio/AudioPlayer';
import SimilarityScore from '@/components/validation/SimilarityScore';
import MetricBar from '@/components/validation/MetricBar';
import { Separator } from '@/components/ui/separator';

const ValidationPage = () => {
  const navigate = useNavigate();

  const originalAudioUrl = 'https://audio-samples.github.io/samples/mp3/blizzard_unconditional/sample-1.mp3';
  const translatedAudioUrl = 'https://audio-samples.github.io/samples/mp3/blizzard_unconditional/sample-2.mp3';
  
  const steps = ['Input', 'Transcription', 'Translation', 'Synthesis', 'Validation'];

  return (
    <PageContainer>
      <Header />
      
      <ProgressBar steps={steps} currentStep={4} />
      
      <StepHeading stepNumber={5} title="Validation" />
      
      <ContentCard>
        <div className="flex flex-col items-center mb-8">
          <SimilarityScore score={100} size="lg" />
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              This score represents the semantic similarity between the input and output content.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium mb-4">Original Audio</h3>
            <AudioPlayer audioUrl={originalAudioUrl} />
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Translated Audio</h3>
            <AudioPlayer audioUrl={translatedAudioUrl} />
          </div>
        </div>
      </ContentCard>
      
      <ContentCard>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center mb-2">100/100</h2>
          <p className="text-center text-gray-500 mb-6">Composite Score</p>
          
          <MetricBar 
            label="Semantic Similarity" 
            value={100} 
            weight={0.4}
            color="bg-indic-green" 
          />
          
          <MetricBar 
            label="Transcription Accuracy" 
            value={100} 
            weight={0.2}
            color="bg-indic-blue" 
          />
          
          <MetricBar 
            label="Diarization Accuracy" 
            value={100} 
            weight={0.2}
            color="bg-indic-orange" 
          />
          
          <MetricBar 
            label="Translation Accuracy" 
            value={100} 
            weight={0.2}
            color="bg-indic-red" 
          />
        </div>
        
        <Separator className="my-6" />
        
        <div>
          <h3 className="font-medium mb-4">Metric Definitions:</h3>
          
          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-semibold">Semantic Similarity:</span> Cosine similarity between TF-IDF vectors of the original and output transcript.
              <br />
              <span className="text-xs text-gray-500">Formula: similarity = cos(V<sub>org</sub>, V<sub>out</sub>) range [0,1].</span>
            </li>
            
            <li>
              <span className="font-semibold">Transcription Accuracy:</span> 1 minus Word Error Rate (WER) between reference and ASR output.
              <br />
              <span className="text-xs text-gray-500">Formula: WER = (S + D + I) / N, where S=substitutions, D=deletions, I=insertions, N=number of words in reference.</span>
            </li>
            
            <li>
              <span className="font-semibold">Diarization Accuracy:</span> Ratio of correctly predicted speaker change points to total reference change points.
              <br />
              <span className="text-xs text-gray-500">Formula: accuracy = (# correct changes) / (# reference changes).</span>
            </li>
            
            <li>
              <span className="font-semibold">Translation Accuracy:</span> 1 minus WER between reference translation and system output. Formula as above.
            </li>
          </ul>
          
          <p className="text-sm mt-4">
            <span className="font-semibold">Composite Score:</span> Weighted sum of all metrics.
          </p>
        </div>
      </ContentCard>
      
      <StepNavigation
        onBack={() => navigate('/synthesis')}
        onStartOver={() => navigate('/')}
        showStartOver={true}
      />
      
      <Footer />
    </PageContainer>
  );
};

export default ValidationPage;
