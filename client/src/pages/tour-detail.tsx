import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";

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
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 w-full h-full flex flex-col p-6">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/tours">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="rounded-full w-14 h-14 bg-white text-black hover:bg-white ml-[24px] mr-[24px] pl-[22px] pr-[22px] mt-[22px] mb-[22px]" 
                  data-testid="button-back-tours"
                >
                  <ArrowLeft className="w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 z-50">
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
                  <DollarSign className="w-6 h-6" />
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
