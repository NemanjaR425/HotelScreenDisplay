import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import DigitalSignage from "@/components/DigitalSignage";
import DiningPage from "@/pages/dining";
import ToursPage from "@/pages/tours";
import SpaPage from "@/pages/spa";
import EntertainmentPage from "@/pages/entertainment";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={DigitalSignage} />
      <Route path="/dining" component={DiningPage} />
      <Route path="/tours" component={ToursPage} />
      <Route path="/spa" component={SpaPage} />
      <Route path="/entertainment" component={EntertainmentPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
