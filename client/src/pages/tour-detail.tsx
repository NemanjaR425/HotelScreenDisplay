import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";

import tour1Image from "@assets/fortress-walls-of-the-ancient-town-of-kotor.webp";
import tour2Image from "@assets/perast-detail.webp";
import tour3Image from "@assets/river-rijeka-crnojevica-in-montenegro.webp";
import tour4Image from "@assets/mausoleum-of-petar-petrovic-njegos.webp";
import tour5Image from "@assets/gorgeous-redhead-caucasian-woman-in-beige-dress.webp";
import tour6Image from "@assets/happy-couple-on-red-four-wheeler-atv-in-mountains.webp";
import tour7Image from "@assets/herceg-novi-forte-mare2.webp";
import tour8Image from "@assets/cablecar.webp";
import tour9Image from "@assets/church-of-the-our-lady-on-the-rocks-on-the-island.webp";
import tour10Image from "@assets/old-town-in-budva.webp";

const tourImages: Record<number, string> = {
  1: tour1Image,
  2: tour2Image,
  3: tour3Image,
  4: tour4Image,
  5: tour5Image,
  6: tour6Image,
  7: tour7Image,
  8: tour8Image,
  9: tour9Image,
  10: tour10Image,
};

export default function TourDetailPage() {
  const params = useParams();
  const tourId = parseInt(params.id || "1");
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const tour = {
    id: tourId,
    name: t[`tour${tourId}Name` as keyof typeof t] as string,
    description: t[`tour${tourId}Description` as keyof typeof t] as string,
    duration: t[`tour${tourId}Duration` as keyof typeof t] as string,
    price: t[`tour${tourId}Price` as keyof typeof t] as string,
    image: tourImages[tourId] || tour1Image,
  };

  return (
    <div 
      className="w-full h-screen overflow-hidden"
      data-testid="tour-detail-page"
    >
      <div className="h-full flex relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${tour.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.05) 100%)' }} />
        
        <div className="relative z-20 w-full h-full flex flex-col p-6">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/tours">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="rounded-full w-14 h-14 bg-white text-black hover:bg-white ml-[24px] mr-[24px] pl-[22px] pr-[22px] mt-[22px] mb-[22px] border-0 shadow-none" 
                  data-testid="button-back-tours"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-[36px] z-50">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={setLanguage}
            />
          </div>

          <div className="flex-1 flex items-end justify-start pb-24 pl-8">
            <div className="max-w-2xl">
              <h1 
                className="text-6xl font-bold text-white mb-4 drop-shadow-lg"
                data-testid="text-tour-name"
              >
                {tour.name}
              </h1>
              <p 
                className="text-xl text-white/90 mb-6 drop-shadow-md leading-relaxed"
                data-testid="text-tour-description"
              >
                {tour.description}
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3 text-white">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-medium" data-testid="text-tour-duration">{tour.duration}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <DollarSign className="w-0 h-0" />
                  <span className="text-2xl font-bold" data-testid="text-tour-price">{tour.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
