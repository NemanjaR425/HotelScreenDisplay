import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import ServiceCategory from './ServiceCategory';
import LanguageSelector from './LanguageSelector';
import { getTranslation } from '../utils/translations';
import { useWeather } from '../hooks/use-weather';
import { useLanguage } from '@/contexts/LanguageContext';
import gradientBackground from '@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg';

const HOTEL_BG_IMAGE = 'https://i.postimg.cc/FRZBNqCz/oopm-resort-drone-view-3.webp';

export default function DigitalSignage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());
  const { data: weather } = useWeather();
  
  const t = getTranslation(currentLanguage);
  
  const hotelName = "One & Only";
  const tagline = "Your Premier Destination for Luxury & Hospitality";

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

  const getWeatherConditionText = (condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night') => {
    switch (condition) {
      case 'sunny':
        return t.weatherSunny;
      case 'clear-night':
        return t.weatherClearNight;
      case 'cloudy':
        return t.weatherCloudy;
      case 'rainy':
        return t.weatherRainy;
      default:
        return t.weatherSunny;
    }
  };

  return (
    <div 
      className="w-full h-screen overflow-hidden bg-white" 
      data-testid="digital-signage" 
      style={{ 
        aspectRatio: '16/9'
      }}
    >
      <div className="h-full flex gap-4 pr-4">
        {/* Left Panel - Welcome Section - extends to left, top, bottom edges */}
        <div 
          className="flex-1 p-8 flex flex-col relative overflow-hidden"
          style={{
            backgroundImage: `url(${HOTEL_BG_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Content container */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Top row with clock/date and weather */}
            <div className="flex justify-between items-start mb-8">
              <div className="text-left">
                <div className="flex items-center space-x-2 text-white mb-2">
                  <Clock className="w-12 h-12" />
                  <span className="text-5xl font-medium" data-testid="text-current-time">
                    {formatTime(currentTime)}
                  </span>
                </div>
                <div className="text-2xl text-white/80" data-testid="text-current-date">
                  {formatDate(currentTime)}
                </div>
              </div>
              
              <WeatherWidget 
                temperature={weather?.temperature ?? 22} 
                condition={weather?.condition ?? 'sunny'} 
                location="Herceg Novi, Montenegro"
                currentWeatherText={t.currentWeatherIn}
                conditionText={getWeatherConditionText(weather?.condition ?? 'sunny')}
                forecastTitle={t.sevenDayForecast}
                hourlyForecast={t.hourlyForecast}
                dailyForecast={t.dailyForecast}
                dayNames={{
                  monday: t.mondayName,
                  tuesday: t.tuesdayName,
                  wednesday: t.wednesdayName,
                  thursday: t.thursdayName,
                  friday: t.fridayName,
                  saturday: t.saturdayName,
                  sunday: t.sundayName
                }}
              />
            </div>

            {/* Spacer to push welcome message to bottom */}
            <div className="flex-1"></div>

            {/* Bottom welcome message */}
            <div className="mb-8">
              <p className="text-2xl text-white/80 mt-[0px] mb-0 pl-[22px] pr-[22px]">{t.welcomeTo}</p>
              <img
                src="https://i.postimg.cc/prcrNH9n/oo-portonovi-logo.png"
                alt="One & Only"
                className="pl-[20px]"
                style={{ height: '160px', width: 'auto' }}
                data-testid="text-hotel-name"
              />
            </div>
            
            {/* Language Selector - Bottom Left */}
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={setLanguage}
            />
          </div>
        </div>

        {/* Right Panel - Service Categories Grid */}
        <div className="grid grid-cols-2 gap-2 auto-rows-fr pt-[12px] pb-[12px]" style={{ width: 'fit-content' }}>
          <ServiceCategory category="dining" title={t.dining} />
          <ServiceCategory category="rentACar" title={t.rentACar} />
          <ServiceCategory category="excursions" title={t.excursions} />
          <ServiceCategory category="entertainment" title={t.entertainment} />
          <ServiceCategory category="spa" title={t.spa} />
          <ServiceCategory category="beach" title={t.beach} />
        </div>
      </div>
    </div>
  );
}