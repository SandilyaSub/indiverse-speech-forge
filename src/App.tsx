
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import InputPage from "./pages/InputPage";
import TranscriptionPage from "./pages/TranscriptionPage";
import TranslationPage from "./pages/TranslationPage";
import SynthesisPage from "./pages/SynthesisPage";
import ValidationPage from "./pages/ValidationPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SessionSelector from "./components/session/SessionSelector";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/sessions" element={<SessionSelector />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/transcription" element={<TranscriptionPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/synthesis" element={<SynthesisPage />} />
          <Route path="/validation" element={<ValidationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
