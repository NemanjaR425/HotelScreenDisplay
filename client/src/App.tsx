import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DigitalSignage from "@/components/DigitalSignage";
import DiningPage from "@/pages/dining";
import NotFound from "@/pages/not-found";

function Home({ currentLanguage, onLanguageChange }: { currentLanguage: string; onLanguageChange: (language: string) => void }) {
  return <DigitalSignage currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />;
}

function Dining({ currentLanguage, onLanguageChange }: { currentLanguage: string; onLanguageChange: (language: string) => void }) {
  return <DiningPage currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />;
}

function Router({ currentLanguage, onLanguageChange }: { currentLanguage: string; onLanguageChange: (language: string) => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <Home currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />} />
      <Route path="/dining" component={() => <Dining currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
