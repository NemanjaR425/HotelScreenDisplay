import { Link } from "wouter";
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
      style={{ backgroundColor: '#162739' }} 
      data-testid="entertainment-page"
    >
      <div className="h-full flex flex-col relative">
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="lg" className="rounded-full w-14 h-14 bg-white text-black hover:bg-white pl-[22px] pr-[22px] ml-[20px] mr-[20px] mt-[20px] mb-[20px]" data-testid="button-back-home">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white mt-[20px] mb-[20px]" data-testid="text-page-title">
              {t.entertainment}
            </h1>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 z-50">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setLanguage}
          />
        </div>

        <div className="flex-1 flex items-start justify-center overflow-hidden pb-16">
          <div className="grid grid-cols-4 grid-rows-2 gap-3 w-full h-full ml-[0px] mr-[0px] pl-[20px] pr-[20px] pt-[20px] pb-[20px]">
            {entertainments.slice(0, 8).map((ent) => (
              <Link href={`/entertainment/${ent.id}`} key={ent.id}>
                <div
                  className="bg-white rounded-lg overflow-hidden hover-elevate active-elevate-2 cursor-pointer flex flex-col h-full"
                  data-testid={`entertainment-card-${ent.id}`}
                >
                  <div 
                    className="w-full"
                    style={{
                      height: '65%',
                      backgroundImage: `url(${ent.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="p-2 flex flex-col flex-1 pt-[14px] pb-[14px] ml-[12px] mr-[12px]">
                    <h3 className="font-bold text-gray-900 text-[16px]">{ent.name}</h3>
                    <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">{ent.description}</p>
                    <div className="mt-auto">
                      <p className="text-xs text-gray-700">{ent.time}</p>
                      <p className="text-sm font-semibold text-primary">{ent.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
