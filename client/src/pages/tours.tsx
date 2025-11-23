import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mountain, Car } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";
import perastBackground from "@assets/the-picturesque-town-of-perast-in-the-bay-of-kotor-2023-11-27-04-48-55-utc (Large)_1763904402954.jpg";

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

export default function ToursPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const tours = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: t[`tour${i + 1}Name` as keyof typeof t] as string,
    image: [
      tour1Image, tour2Image, tour3Image, tour4Image,
      tour5Image, tour6Image, tour7Image, tour8Image,
      tour9Image, tour10Image, tour11Image, tour12Image
    ][i]
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden relative" 
      data-testid="tours-page"
      style={{ 
        backgroundImage: `url(${perastBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Language Selector - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector 
          currentLanguage={currentLanguage}
          onLanguageChange={setLanguage}
        />
      </div>

      {/* Main Content - Split Layout */}
      <div className="h-full flex">
        {/* Left Side - Adventure Tours Section */}
        <div className="w-1/3 h-full bg-black/70 backdrop-blur-sm flex flex-col justify-between p-12">
          {/* Logo and Title */}
          <div className="space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <Mountain className="w-20 h-20 text-white" strokeWidth={1.5} />
              <h1 
                className="text-4xl font-bold text-white text-center tracking-wider whitespace-pre-line"
                data-testid="text-adventure-title"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                {t.adventureToursTitle}
              </h1>
            </div>

            {/* Description */}
            <p 
              className="text-white/90 text-sm leading-relaxed"
              data-testid="text-adventure-description"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {t.adventureToursDescription}
            </p>
          </div>

          {/* Back Button */}
          <Link href="/">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full bg-white/10 hover:bg-white/20 border-white/50 text-white font-bold text-lg backdrop-blur-sm"
              data-testid="button-back-home"
            >
              {t.back}
            </Button>
          </Link>
        </div>

        {/* Right Side - Rent a Car & Destination Grid */}
        <div className="w-2/3 h-full flex flex-col">
          {/* Rent a Car Section */}
          <div className="h-1/4 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8">
            <h2 
              className="text-6xl font-black mb-4"
              data-testid="text-rentacar-title"
              style={{ 
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: '0.05em'
              }}
            >
              {t.rentACarTitle}
            </h2>
            <div className="w-48 h-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-xl flex items-center justify-center">
              <Car className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Destination Photo Grid */}
          <div className="flex-1 bg-white/90 backdrop-blur-sm p-4">
            <div className="grid grid-cols-2 gap-3 h-full">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="relative rounded-md overflow-hidden shadow-lg hover-elevate active-elevate-2 cursor-pointer"
                  data-testid={`tour-card-${tour.id}`}
                  style={{
                    backgroundImage: `url(${tour.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 
                      className="text-white font-semibold text-sm drop-shadow-lg"
                      data-testid={`tour-name-${tour.id}`}
                    >
                      {tour.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
