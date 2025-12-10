import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";
import gradientBackground from "@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg";

import tour1Image from "@assets/fortress-walls-of-the-ancient-town-of-kotor-on-the-2023-11-27-05-28-50-utc_1759609904304.jpg";
import tour2Image from "@assets/the-picturesque-town-of-perast-in-the-bay-of-kotor-2023-11-27-04-48-55-utc_1759609904304.jpg";
import tour3Image from "@assets/river-rijeka-crnojevica-in-montenegro-2024-10-18-07-50-59-utc_1759609904305.jpg";
import tour4Image from "@assets/mausoleum-of-petar-petrovic-njegos-2023-11-27-05-02-52-utc_1759609904304.jpg";
import tour5Image from "@assets/city-perast-montenegro-2023-11-27-05-09-23-utc_1759609904305.jpg";
import tour6Image from "@assets/discover-the-enchanting-island-of-sveti-stefan-in-2024-09-30-13-00-59-utc_1759609904303.jpg";
import tour7Image from "@assets/DJI_0148_1762174357607.jpg";
import tour8Image from "@assets/close-up-of-a-cable-car-cabin-against-the-sky-2023-11-27-05-20-12-utc_1759609904303.jpg";
import tour9Image from "@assets/beautiful-mediterranean-landscape-2023-11-27-05-36-32-utc_1759609904305.jpg";
import tour10Image from "@assets/budva-town-in-summer-2023-11-27-05-33-48-utc_1759609904305.jpg";
import tour11Image from "@assets/horsewoman-on-the-beach-2023-11-27-04-56-21-utc_1759609904305.jpg";
import tour12Image from "@assets/happy-couple-on-red-four-wheeler-atv-in-mountains-2023-11-27-04-53-37-utc_1759609904303.jpg";

interface Tour {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export default function ToursPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const tourImages = [
    tour1Image, tour2Image, tour3Image, tour4Image,
    tour5Image, tour6Image, tour7Image, tour8Image,
    tour9Image, tour10Image, tour11Image, tour12Image
  ];

  const tours: Tour[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: t[`tour${i + 1}Name` as keyof typeof t] as string,
    description: t[`tour${i + 1}Description` as keyof typeof t] as string,
    duration: t[`tour${i + 1}Duration` as keyof typeof t] as string,
    price: t[`tour${i + 1}Price` as keyof typeof t] as string,
    image: tourImages[i]
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6"
      style={{ backgroundColor: '#162739' }} 
      data-testid="tours-page"
    >
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="lg" className="rounded-full w-14 h-14 bg-white text-black hover:bg-white" data-testid="button-back-home">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.excursions}
            </h1>
          </div>
        </div>

        {/* Language Selector - Bottom Left */}
        <div className="absolute bottom-4 left-0 z-50">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setLanguage}
          />
        </div>

        {/* Tours Grid - 5 columns x 2 rows to fit 10 cards */}
        <div className="flex-1 flex items-start justify-center overflow-hidden pb-16">
          <div className="grid grid-cols-5 grid-rows-2 gap-3 w-full h-full">
            {tours.slice(0, 10).map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg overflow-hidden hover-elevate active-elevate-2 cursor-pointer flex flex-col"
                data-testid={`tour-card-${tour.id}`}
              >
                {/* Image Section - 55% of height */}
                <div 
                  className="w-full"
                  style={{
                    height: '55%',
                    backgroundImage: `url(${tour.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                {/* Content Section - 45% of height */}
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{tour.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">{tour.description}</p>
                  <div className="mt-auto space-y-0.5">
                    <p className="text-xs text-gray-700">{tour.duration}</p>
                    <p className="text-sm font-semibold text-primary">{tour.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
