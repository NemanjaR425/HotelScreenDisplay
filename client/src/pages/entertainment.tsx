import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, DollarSign, Calendar } from "lucide-react";
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

interface EntertainmentPageProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

interface DaySchedule {
  dayKey: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  entertainmentIds: number[];
}

export default function EntertainmentPage({ currentLanguage, onLanguageChange }: EntertainmentPageProps) {
  const t = getTranslation(currentLanguage);

  const entImages = [
    ent1Image, ent2Image, ent3Image, ent4Image,
    ent5Image, ent6Image, ent7Image, ent8Image
  ];

  const weekSchedule: DaySchedule[] = [
    { dayKey: 'monday', entertainmentIds: [7] },
    { dayKey: 'tuesday', entertainmentIds: [5] },
    { dayKey: 'wednesday', entertainmentIds: [2] },
    { dayKey: 'thursday', entertainmentIds: [6] },
    { dayKey: 'friday', entertainmentIds: [4] },
    { dayKey: 'saturday', entertainmentIds: [1, 3] },
    { dayKey: 'sunday', entertainmentIds: [8] }
  ];

  return (
    <div 
      className="w-full min-h-screen overflow-y-auto p-6" 
      data-testid="entertainment-page"
      style={{ 
        backgroundImage: `url(${gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sticky top-0 z-50 bg-black/20 backdrop-blur-sm p-4 rounded-lg">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="icon" data-testid="button-back-home">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.entertainment}
            </h1>
          </div>
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>

        {/* Weekly Schedule - 7 Day Sections */}
        <div className="space-y-6">
          {weekSchedule.map((day) => {
            const dayName = t[`${day.dayKey}Name` as keyof typeof t] as string;
            const dayDescription = t[`${day.dayKey}Description` as keyof typeof t] as string;

            return (
              <div
                key={day.dayKey}
                className="flex gap-6"
                data-testid={`day-section-${day.dayKey}`}
              >
                {/* Left Panel - Day Description */}
                <div className="w-1/3 flex-shrink-0">
                  <div 
                    className="relative rounded-lg p-8 h-full flex flex-col overflow-hidden"
                    style={{
                      backgroundImage: `url(${entImages[day.entertainmentIds[0] - 1]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      minHeight: '300px'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
                    
                    <div className="relative z-10 flex flex-col h-full justify-between text-white">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <Calendar className="w-8 h-8" />
                          <h2 className="text-4xl font-bold" data-testid={`text-day-name-${day.dayKey}`}>
                            {dayName}
                          </h2>
                        </div>
                        <p className="text-lg leading-relaxed opacity-90" data-testid={`text-day-description-${day.dayKey}`}>
                          {dayDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Entertainment Activities */}
                <div className="flex-1">
                  <div className={`grid gap-4 ${day.entertainmentIds.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {day.entertainmentIds.map((entId) => {
                      const entName = t[`ent${entId}Name` as keyof typeof t] as string;
                      const entDescription = t[`ent${entId}Description` as keyof typeof t] as string;
                      const entTime = t[`ent${entId}Time` as keyof typeof t] as string;
                      const entPrice = t[`ent${entId}Price` as keyof typeof t] as string;
                      const entImage = entImages[entId - 1];

                      return (
                        <Card
                          key={entId}
                          className="bg-white/95 backdrop-blur-sm flex flex-col h-full"
                          data-testid={`entertainment-card-${day.dayKey}-${entId}`}
                          style={{ minHeight: '300px' }}
                        >
                          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                            <img 
                              src={entImage} 
                              alt={entName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="flex-1 flex flex-col justify-between p-6">
                            <div>
                              <h3 className="text-2xl font-bold mb-3" data-testid={`text-entertainment-name-${entId}`}>
                                {entName}
                              </h3>
                              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                                {entDescription}
                              </p>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="font-medium">{entTime}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <DollarSign className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-lg">{entPrice}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
