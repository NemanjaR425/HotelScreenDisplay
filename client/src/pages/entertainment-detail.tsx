import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { getTranslation } from "@/utils/translations";

import ent2Image from "@assets/stock_images/traditional_folklore_3b184084.jpg";
import ent3Image from "@assets/stock_images/people_dancing_at_pa_4a5acae1.jpg";
import ent4Image from "@assets/stock_images/live_band_musicians__2e75c6eb.jpg";
import ent5Image from "@assets/stock_images/professional_singer__ef17a4e5.jpg";
import ent6Image from "@assets/stock_images/magician_performing__301ad7e0.jpg";
import ent7Image from "@assets/stock_images/jazz_band_musicians__420a6631.jpg";
import ent8Image from "@assets/stock_images/people_singing_karao_fc4b47bf.jpg";

const entImages: Record<number, string> = {
  2: ent2Image,
  3: ent3Image,
  4: ent4Image,
  5: ent5Image,
  6: ent6Image,
  7: ent7Image,
  8: ent8Image,
};

export default function EntertainmentDetailPage() {
  const params = useParams();
  const entId = parseInt(params.id || "2");
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const entertainment = {
    id: entId,
    name: t[`ent${entId}Name` as keyof typeof t] as string,
    description: t[`ent${entId}Description` as keyof typeof t] as string,
    time: t[`ent${entId}Time` as keyof typeof t] as string,
    price: t[`ent${entId}Price` as keyof typeof t] as string,
    image: entImages[entId] || ent2Image,
  };

  return (
    <div 
      className="w-full h-screen overflow-hidden"
      data-testid="entertainment-detail-page"
    >
      <div className="h-full flex relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${entertainment.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.05) 100%)' }} />
        
        <div className="relative z-20 w-full h-full flex flex-col p-6">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/entertainment">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="rounded-full w-14 h-14 bg-white text-black hover:bg-white ml-[24px] mr-[24px] pl-[22px] pr-[22px] mt-[22px] mb-[22px] border-0 shadow-none" 
                  data-testid="button-back-entertainment"
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
                data-testid="text-entertainment-name"
              >
                {entertainment.name}
              </h1>
              <p 
                className="text-xl text-white/90 mb-6 drop-shadow-md leading-relaxed"
                data-testid="text-entertainment-description"
              >
                {entertainment.description}
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3 text-white">
                  <Clock className="w-6 h-6" />
                  <span className="text-xl font-medium" data-testid="text-entertainment-time">{entertainment.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <DollarSign className="w-6 h-6" />
                  <span className="text-2xl font-bold" data-testid="text-entertainment-price">{entertainment.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
