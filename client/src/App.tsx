import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
/*import { Toaster } from "@/components/ui/toaster";*/
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import DigitalSignage from "@/components/DigitalSignage";
import DiningPage from "@/pages/dining";
import ToursPage from "@/pages/tours";
import TourDetailPage from "@/pages/tour-detail";
import SpaPage from "@/pages/spa";
import BeachPage from "@/pages/beach";
import EntertainmentPage from "@/pages/entertainment";
import EntertainmentDetailPage from "@/pages/entertainment-detail";
import RentACarPage from "@/pages/rentacar";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={DigitalSignage} />
      <Route path="/dining" component={DiningPage} />
      <Route path="/tours" component={ToursPage} />
      <Route path="/tours/:id" component={TourDetailPage} />
      <Route path="/spa" component={SpaPage} />
      <Route path="/beach" component={BeachPage} />
      <Route path="/entertainment" component={EntertainmentPage} />
      <Route path="/entertainment/:id" component={EntertainmentDetailPage} />
      <Route path="/rentacar" component={RentACarPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          {/* <Toaster /> */}  {/* Correct way to comment out JSX tags */}
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
