
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";
import InputPage from "./pages/InputPage";
import TranscriptionPage from "./pages/TranscriptionPage";
import TranslationPage from "./pages/TranslationPage";
import SynthesisPage from "./pages/SynthesisPage";
import ValidationPage from "./pages/ValidationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/transcription" element={<TranscriptionPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/synthesis" element={<SynthesisPage />} />
          <Route path="/validation" element={<ValidationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
