
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
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TranslationPair from '@/components/translation/TranslationPair';
import { useToast } from '@/hooks/use-toast';
import { Keyboard } from 'lucide-react';

const MOCK_TRANSLATIONS = [
  {
    id: '1',
    speaker: 'SPEAKER_00',
    original: 'हेलो मुझे बताओ कि आप कहां जा रहे हैं। क्या देखा कि अपने फोन पहन नहीं लोहा।',
    translation: 'नमस्ते, मुझे बताइए, आपने यह कब कहा था कि आपका फोन पहना नहीं था।',
  },
  {
    id: '2',
    speaker: 'SPEAKER_00',
    original: 'क्या आपने कुछ बता सकते हैं क्या हुआ?',
    translation: 'क्या आपने मुझे बता सकते हैं?',
  }
];

const TranslationPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('editor');
  const [fullTranslation, setFullTranslation] = useState('');
  const [translations, setTranslations] = useState(MOCK_TRANSLATIONS);
  const [sourceLanguage, setSourceLanguage] = useState('HI-IN');
  const [targetLanguage, setTargetLanguage] = useState('Hindi');
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslationChange = (id: string, text: string) => {
    setTranslations(prev => 
      prev.map(t => t.id === id ? { ...t, translation: text } : t)
    );
  };

  const handleTransliterate = () => {
    toast({
      title: "Transliteration",
      description: "Transliteration feature activated. Type in Roman script to see text in Hindi script.",
    });
  };

  const handleSaveEdits = () => {
    toast({
      title: "Changes Saved",
      description: "Your translation edits have been saved successfully.",
    });
  };

  const handleContinue = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/synthesis');
    }, 1500);
  };

  const steps = ['Input', 'Transcription', 'Translation', 'Synthesis', 'Validation'];

  return (
    <PageContainer>
      <Header />
      
      <ProgressBar steps={steps} currentStep={2} />
      
      <StepHeading stepNumber={3} title="Translation" />
      
      <ContentCard>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="font-medium mr-2">Translating from {sourceLanguage} to {targetLanguage}</span>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="translation">Translation</TabsTrigger>
              <TabsTrigger value="editor">Translation Editor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="translation">
              <div className="mb-4">
                <Textarea 
                  value={fullTranslation}
                  onChange={(e) => setFullTranslation(e.target.value)}
                  className="min-h-40"
                  placeholder="Complete translation will appear here"
                />
              </div>
              
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="flex gap-1"
                  onClick={handleTransliterate}
                >
                  <Keyboard size={16} /> Transliterate
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="editor">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-4">Edit individual translation segments below</p>
                
                {translations.map(item => (
                  <TranslationPair
                    key={item.id}
                    id={item.id}
                    speaker={item.speaker}
                    originalText={item.original}
                    translatedText={item.translation}
                    onTranslationChange={handleTranslationChange}
                    onTransliterate={handleTransliterate}
                  />
                ))}
              </div>
              
              <div>
                <Button 
                  variant="outline" 
                  onClick={handleSaveEdits}
                  className="text-sm"
                >
                  Save Edits
                </Button>
                <p className="text-xs text-gray-500 mt-1">Changes will also be saved when you click "Save & Continue"</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ContentCard>
      
      <StepNavigation
        onBack={() => navigate('/transcription')}
        onNext={handleContinue}
        nextLabel="Save & Continue"
        loading={isLoading}
      />
      
      <Footer />
    </PageContainer>
  );
};

export default TranslationPage;
