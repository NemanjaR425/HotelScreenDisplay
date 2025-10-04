import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, DollarSign } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";
import gradientBackground from "@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg";

interface TourPageProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

interface Tour {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export default function ToursPage({ currentLanguage, onLanguageChange }: TourPageProps) {
  const t = getTranslation(currentLanguage);

  const tours: Tour[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: t[`tour${i + 1}Name` as keyof typeof t] as string,
    description: t[`tour${i + 1}Description` as keyof typeof t] as string,
    duration: t[`tour${i + 1}Duration` as keyof typeof t] as string,
    price: t[`tour${i + 1}Price` as keyof typeof t] as string,
    image: "" // Placeholder for now
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6" 
      data-testid="tours-page"
      style={{ 
        backgroundImage: `url(${gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="icon" data-testid="button-back-home">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.excursions}
            </h1>
          </div>
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>

        {/* Tours Grid */}
        <div className="flex-1 overflow-y-auto pb-6">
          <div className="grid grid-cols-6 gap-4 auto-rows-fr">
            {tours.map((tour) => (
              <Card
                key={tour.id}
                className="overflow-visible hover-elevate active-elevate-2 cursor-pointer bg-white/95 backdrop-blur-sm flex flex-col"
                data-testid={`tour-card-${tour.id}`}
              >
                <CardContent className="text-center space-y-3 p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-full aspect-square bg-muted rounded-md mb-2 flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground">#{tour.id}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{tour.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{tour.description}</p>
                  <div className="space-y-1 text-xs text-muted-foreground w-full">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <DollarSign className="w-3 h-3" />
                      <span>{tour.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
