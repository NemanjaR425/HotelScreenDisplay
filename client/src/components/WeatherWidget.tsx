import { useState } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Moon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WeatherWidgetProps {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
  location: string;
  currentWeatherText: string;
  conditionText: string;
  forecast?: ForecastDay[];
  forecastTitle?: string;
  dayNames?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
}

export default function WeatherWidget({ 
  temperature, 
  condition, 
  location, 
  currentWeatherText, 
  conditionText,
  forecast,
  forecastTitle = "7-Day Forecast",
  dayNames
}: WeatherWidgetProps) {
  const [showForecast, setShowForecast] = useState(false);

  const getWeatherIcon = (cond: 'sunny' | 'cloudy' | 'rainy' | 'clear-night', size: string = "w-8 h-8") => {
    switch (cond) {
      case 'sunny':
        return <Sun className={`${size} text-yellow-500`} />;
      case 'clear-night':
        return <Moon className={`${size} text-blue-200`} />;
      case 'cloudy':
        return <Cloud className={`${size} text-gray-400`} />;
      case 'rainy':
        return <CloudRain className={`${size} text-blue-500`} />;
      default:
        return <Sun className={`${size} text-yellow-500`} />;
    }
  };

  // All 7 days in order starting from Sunday (index 0) to match JS getDay()
  const allDays = [
    { key: 'sunday',    name: dayNames?.sunday    || 'Sunday',    high: 26, low: 19, condition: 'cloudy'  as const },
    { key: 'monday',    name: dayNames?.monday    || 'Monday',    high: 24, low: 18, condition: 'sunny'   as const },
    { key: 'tuesday',   name: dayNames?.tuesday   || 'Tuesday',   high: 26, low: 19, condition: 'sunny'   as const },
    { key: 'wednesday', name: dayNames?.wednesday || 'Wednesday', high: 23, low: 17, condition: 'cloudy'  as const },
    { key: 'thursday',  name: dayNames?.thursday  || 'Thursday',  high: 22, low: 16, condition: 'rainy'   as const },
    { key: 'friday',    name: dayNames?.friday    || 'Friday',    high: 25, low: 18, condition: 'sunny'   as const },
    { key: 'saturday',  name: dayNames?.saturday  || 'Saturday',  high: 27, low: 20, condition: 'sunny'   as const },
  ];

  // Start from tomorrow and take the next 7 days
  const todayIndex = new Date().getDay(); // 0=Sun, 1=Mon, ...
  const defaultForecast: ForecastDay[] = Array.from({ length: 7 }, (_, i) => {
    const dayIndex = (todayIndex + 1 + i) % 7;
    const d = allDays[dayIndex];
    return { day: d.name, high: d.high, low: d.low, condition: d.condition };
  });

  const forecastData = forecast || defaultForecast;

  return (
    <>
      <div 
        className="flex items-center space-x-4 bg-card rounded-xl p-6 border border-card-border cursor-pointer hover-elevate active-elevate-2"
        onClick={() => setShowForecast(true)}
        data-testid="weather-widget"
      >
        <div className="flex items-center space-x-3">
          {getWeatherIcon(condition)}
          <div>
            <div className="flex items-center space-x-2">
              <Thermometer className="w-5 h-5 text-muted-foreground" />
              <span className="text-2xl font-medium" data-testid="text-temperature">
                {temperature}°C
              </span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-condition">
              {conditionText}
            </p>
          </div>
        </div>
        <div className="border-l border-border pl-4">
          <p className="text-sm text-muted-foreground">{currentWeatherText}</p>
          <p className="font-medium" data-testid="text-location">{location}</p>
        </div>
      </div>

      {showForecast && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setShowForecast(false)}
          data-testid="forecast-overlay"
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-testid="forecast-modal"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900" data-testid="text-forecast-title">
                  {forecastTitle}
                </h2>
                <p className="text-gray-600">{location}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowForecast(false)}
                className="rounded-full"
                data-testid="button-close-forecast"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  {getWeatherIcon(condition, "w-16 h-16")}
                  <div>
                    <p className="text-5xl font-bold">{temperature}°C</p>
                    <p className="text-xl opacity-90">{conditionText}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg opacity-80">{currentWeatherText}</p>
                  <p className="text-2xl font-semibold">{location}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-3">
              {forecastData.map((day, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                  data-testid={`forecast-day-${index}`}
                >
                  <p className="font-semibold text-gray-900 text-sm mb-2">{day.day}</p>
                  <div className="flex justify-center mb-2">
                    {getWeatherIcon(day.condition, "w-10 h-10")}
                  </div>
                  <p className="text-lg font-bold text-gray-900">{day.high}°</p>
                  <p className="text-sm text-gray-500">{day.low}°</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
