
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, FileText, Layers, Globe, BarChart, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Hero Section with gradient background */}
      <div className="bg-gradient-hero py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-white">Speech Translation</span> <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indic-yellow to-indic-pink">for Indian Languages</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-xl">
                Translate, transcribe, and synthesize speech across multiple Indic languages with powerful AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  onClick={() => navigate('/login')} 
                  className="text-base px-8 py-6 h-auto rounded-full bg-white text-indic-purple hover:bg-white/90 shadow-button transform transition-all hover:scale-105 font-semibold"
                >
                  Sign In <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => navigate('/register')}
                  variant="outline" 
                  className="text-base px-8 py-6 h-auto rounded-full bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/30 transform transition-all hover:scale-105 font-semibold"
                >
                  Create Account
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-float">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indic-purple to-indic-pink rounded-2xl blur opacity-75 animate-pulse-soft"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Indic Translator"
                  className="w-full h-auto rounded-2xl relative shadow-lg border border-white/20 backdrop-blur-sm" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indic-purple to-indic-blue">
              Powerful Translation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art platform delivers exceptional translation capabilities across all Indian languages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="h-12 w-12 text-white" />,
                title: "Audio Input",
                description: "Upload audio files or record directly via microphone with our intuitive interface",
                color: "from-indic-purple to-indic-blue"
              },
              {
                icon: <FileText className="h-12 w-12 text-white" />,
                title: "Accurate Transcription",
                description: "Advanced speech-to-text with speaker diarization and intelligent segmentation",
                color: "from-indic-blue to-indic-teal"
              },
              {
                icon: <Layers className="h-12 w-12 text-white" />,
                title: "Transliteration",
                description: "Seamlessly convert Roman script input to native Indic scripts with high accuracy",
                color: "from-indic-teal to-indic-green"
              },
              {
                icon: <Globe className="h-12 w-12 text-white" />,
                title: "Translation",
                description: "Neural machine translation between Indian languages using advanced AI models",
                color: "from-indic-green to-indic-yellow"
              },
              {
                icon: <Mic className="h-12 w-12 text-white" />,
                title: "Speech Synthesis",
                description: "Generate natural-sounding speech in target languages with emotion and emphasis",
                color: "from-indic-yellow to-indic-orange"
              },
              {
                icon: <BarChart className="h-12 w-12 text-white" />,
                title: "Quality Validation",
                description: "Comprehensive quality metrics ensure your translations meet the highest standards",
                color: "from-indic-orange to-indic-pink"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-card hover:shadow-lg transition-all p-1 hover:scale-[1.02] duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full bg-white rounded-xl p-8 border border-gray-100">
                  <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indic-purple/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indic-blue to-indic-purple">
              Supported Languages
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Our platform supports a comprehensive range of Indian languages, enabling seamless communication across the subcontinent
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
            {[
              "Hindi", "Telugu", "Tamil", "Kannada", "Gujarati",
              "Marathi", "Bengali", "Punjabi", "Malayalam", "Odia",
              "Assamese", "Nepali", "Sanskrit", "Sinhalese", "Urdu"
            ].map((language, index) => (
              <div 
                key={language} 
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indic-purple/30 transition-all transform hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium text-lg group-hover:text-indic-purple transition-colors">{language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-card text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Translating?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Join thousands of users who are already using our platform for their translation needs.
          </p>
          <Button 
            onClick={() => navigate('/register')} 
            className="bg-white text-indic-purple hover:bg-white/90 text-lg px-10 py-7 h-auto rounded-full shadow-button transform transition-all hover:scale-105 font-semibold"
          >
            Get Started for Free <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-white/70">
            No credit card required
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-10 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indic-purple to-indic-pink">Indic-Translator</h3>
              <p className="text-gray-300 max-w-sm">
                Speech-to-Speech Translation for Indian Languages. Breaking language barriers across the subcontinent.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold mb-4 text-lg text-indic-purple">Product</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-indic-purple transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-indic-purple transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-indic-purple transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg text-indic-blue">Resources</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-indic-blue transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-indic-blue transition-colors">Tutorials</a></li>
                  <li><a href="#" className="hover:text-indic-blue transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg text-indic-teal">Company</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#" className="hover:text-indic-teal transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-indic-teal transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-indic-teal transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left text-gray-400">
            <p>© 2025 Indic-Translator | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
