import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import ServiceCategory from './ServiceCategory';
import LanguageSelector from './LanguageSelector';
import { getTranslation } from '../utils/translations';
import resortImage from '@assets/oopm-resort-drone-view-3_1759144575928.webp';
import gradientBackground from '@assets/gradient-colored-background-2025-01-07-23-09-49-utc_1759147416039.jpg';

interface DigitalSignageProps {
  hotelName?: string;
  tagline?: string;
}

export default function DigitalSignage({ 
  hotelName = "Hotel Grand Plaza",
  tagline = "Your Premier Destination for Luxury & Hospitality"
}: DigitalSignageProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const t = getTranslation(currentLanguage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Map language codes to locale codes for proper date/time formatting
  const getLocale = (languageCode: string) => {
    const localeMap: Record<string, string> = {
      'me': 'sr-ME', // Montenegrin uses Serbian locale for Montenegro
      'en': 'en-US',
      'ru': 'ru-RU',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'de': 'de-DE'
    };
    return localeMap[languageCode] || 'en-US';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(getLocale(currentLanguage), {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    // Get time parts using English locale to keep AM/PM in English
    const timeString = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    return timeString;
  };

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6" 
      data-testid="digital-signage" 
      style={{ 
        aspectRatio: '16/9',
        backgroundImage: `url(${gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="h-full flex gap-3">
        {/* Left Panel - Welcome Section */}
        <div 
          className="flex-1 border border-card-border rounded-lg p-8 flex flex-col relative overflow-hidden"
          style={{
            backgroundImage: `url(${resortImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
          
          {/* Content container */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top row with clock/date and weather */}
            <div className="flex justify-between items-start mb-8">
              <div className="text-left">
                <div className="flex items-center space-x-2 text-white mb-2">
                  <Clock className="w-8 h-8" />
                  <span className="text-3xl font-medium" data-testid="text-current-time">
                    {formatTime(currentTime)}
                  </span>
                </div>
                <div className="text-lg text-white/80" data-testid="text-current-date">
                  {formatDate(currentTime)}
                </div>
              </div>
              
              <WeatherWidget 
                temperature={22} 
                condition="sunny" 
                location="Herceg Novi, Montenegro"
                currentWeatherText={t.currentWeatherIn}
              />
            </div>

            {/* Spacer to push welcome message to bottom */}
            <div className="flex-1"></div>

            {/* Bottom welcome message */}
            <div className="mb-8">
              <p className="text-2xl text-white/80 mb-1">{t.welcomeTo}</p>
              <h1 className="text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hotel-name">
                {hotelName}
              </h1>
              
              {/* Language Selector */}
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
              />
            </div>
          </div>
        </div>

        {/* Right Panel - Service Categories Grid */}
        <div className="w-[48rem] grid grid-cols-2 gap-4" style={{ gridTemplateRows: '1fr 1fr 1fr' }}>
          <ServiceCategory category="dining" title={t.dining} />
          <ServiceCategory category="shopping" title={t.shopping} />
          <ServiceCategory category="excursions" title={t.excursions} />
          <ServiceCategory category="entertainment" title={t.entertainment} />
          <ServiceCategory category="spa" title={t.spa} className="col-span-2" />
        </div>
      </div>
    </div>
  );
}