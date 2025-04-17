
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, FileText, Layers, Globe, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Speech Translation for Indian Languages
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Translate, transcribe, and synthesize speech across multiple Indic languages with powerful AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate('/login')} className="text-base px-6 py-3 h-auto">
                  Sign In
                </Button>
                <Button 
                  onClick={() => navigate('/register')}
                  variant="outline" 
                  className="text-base px-6 py-3 h-auto bg-white"
                >
                  Create Account
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Indic Translator" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Translation Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-8 w-8 text-indic-purple" />,
                title: "Audio Input",
                description: "Upload audio files or record directly via microphone"
              },
              {
                icon: <FileText className="h-8 w-8 text-indic-purple" />,
                title: "Accurate Transcription",
                description: "Speech-to-text with speaker diarization and segmentation"
              },
              {
                icon: <Layers className="h-8 w-8 text-indic-purple" />,
                title: "Transliteration",
                description: "Convert Roman script input to native Indic scripts"
              },
              {
                icon: <Globe className="h-8 w-8 text-indic-purple" />,
                title: "Translation",
                description: "Translate between Indian languages using advanced AI"
              },
              {
                icon: <Mic className="h-8 w-8 text-indic-purple" />,
                title: "Speech Synthesis",
                description: "Generate natural-sounding speech in target languages"
              },
              {
                icon: <BarChart className="h-8 w-8 text-indic-purple" />,
                title: "Quality Validation",
                description: "Verify translation quality with built-in metrics"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Supported Languages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform supports a wide range of Indian languages, enabling comprehensive translation services
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
            {[
              "Hindi", "Telugu", "Tamil", "Kannada", "Gujarati",
              "Marathi", "Bengali", "Punjabi", "Malayalam", "Odia",
              "Assamese", "Nepali", "Sanskrit", "Sinhalese", "Urdu"
            ].map((language) => (
              <div key={language} className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-medium">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indic-purple text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Translating?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already using our platform for their translation needs.
          </p>
          <Button 
            onClick={() => navigate('/register')} 
            className="bg-white text-indic-purple hover:bg-gray-100 text-base px-8 py-3 h-auto"
          >
            Get Started for Free
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Indic-Translator</h3>
              <p className="text-gray-300 max-w-sm">
                Speech-to-Speech Translation for Indian Languages
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">Tutorials</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center md:text-left text-gray-300">
            <p>© 2025 Indic-Translator | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
