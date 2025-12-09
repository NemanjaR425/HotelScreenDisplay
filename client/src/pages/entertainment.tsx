import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";
import gradientBackground from "@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg";

import ent1Image from "@assets/stock_images/professional_dj_perf_06ad4589.jpg";
import ent2Image from "@assets/stock_images/traditional_folklore_3b184084.jpg";
import ent3Image from "@assets/stock_images/people_dancing_at_pa_4a5acae1.jpg";
import ent4Image from "@assets/stock_images/live_band_musicians__2e75c6eb.jpg";
import ent5Image from "@assets/stock_images/professional_singer__ef17a4e5.jpg";
import ent6Image from "@assets/stock_images/magician_performing__301ad7e0.jpg";
import ent7Image from "@assets/stock_images/jazz_band_musicians__420a6631.jpg";
import ent8Image from "@assets/stock_images/people_singing_karao_fc4b47bf.jpg";

interface Entertainment {
  id: number;
  name: string;
  description: string;
  time: string;
  price: string;
  image: string;
}

export default function EntertainmentPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const entImages = [
    ent2Image, ent3Image, ent4Image,
    ent5Image, ent6Image, ent7Image, ent8Image
  ];

  const entertainments: Entertainment[] = Array.from({ length: 7 }, (_, i) => ({
    id: i + 2,
    name: t[`ent${i + 2}Name` as keyof typeof t] as string,
    description: t[`ent${i + 2}Description` as keyof typeof t] as string,
    time: t[`ent${i + 2}Time` as keyof typeof t] as string,
    price: t[`ent${i + 2}Price` as keyof typeof t] as string,
    image: entImages[i]
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6" 
      data-testid="entertainment-page"
      style={{ 
        backgroundImage: `url(${gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="lg" className="rounded-full w-14 h-14" data-testid="button-back-home">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.entertainment}
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

        {/* Entertainment Grid - 4x2 */}
        <div className="flex-1 flex items-start justify-center overflow-hidden pb-20">
          <div className="grid grid-cols-4 gap-3 w-full p-4" style={{ gridTemplateRows: 'repeat(2, minmax(0, 400px))' }}>
            {entertainments.map((ent) => (
              <div
                key={ent.id}
                className="relative rounded-md hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`entertainment-card-${ent.id}`}
                style={{
                  backgroundImage: `url(${ent.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/50 rounded-md"></div>
                <div className="relative z-10 text-center space-y-2 p-4 flex flex-col items-center justify-center h-full text-white">
                  <h3 className="text-lg font-bold leading-tight">{ent.name}</h3>
                  <p className="text-xs line-clamp-2 opacity-90">{ent.description}</p>
                  <div className="space-y-1 text-xs w-full mt-auto">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>{ent.time}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <DollarSign className="w-3 h-3" />
                      <span>{ent.price}</span>
                    </div>
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
