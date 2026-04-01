import { useState } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Moon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { HourlySlot } from '../hooks/use-weather';

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
}

interface HourlyEntry {
  time: string;
  temp: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
}

interface WeatherWidgetProps {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'clear-night';
  location: string;
  currentWeatherText: string;
  conditionText: string;
  forecast?: ForecastDay[];
  hourly?: HourlySlot[];
  forecastTitle?: string;
  hourlyForecast?: string;
  dailyForecast?: string;
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

export default function WeatherWidget({ 
  temperature, 
  condition, 
  location, 
  currentWeatherText, 
  conditionText,
  forecast,
  hourly,
  forecastTitle = "7-Day Forecast",
  hourlyForecast = "Hourly Forecast",
  dailyForecast = "Daily Forecast",
  dayNames
}: WeatherWidgetProps) {
  const [showForecast, setShowForecast] = useState(false);
  const [activeTab, setActiveTab] = useState<'hourly' | 'daily'>('hourly');

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

  // Map English day names to translated names
  const dayNameMap: Record<string, string> = {
    Sunday:    dayNames?.sunday    || 'Sunday',
    Monday:    dayNames?.monday    || 'Monday',
    Tuesday:   dayNames?.tuesday   || 'Tuesday',
    Wednesday: dayNames?.wednesday || 'Wednesday',
    Thursday:  dayNames?.thursday  || 'Thursday',
    Friday:    dayNames?.friday    || 'Friday',
    Saturday:  dayNames?.saturday  || 'Saturday',
  };

  const forecastData: ForecastDay[] = (forecast || []).map(day => ({
    ...day,
    day: dayNameMap[day.day] || day.day,
  }));

  const hourlyData: Array<HourlyEntry & { isPast: boolean }> = hourly ?? [];

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
            {/* Header */}
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

            {/* Current conditions */}
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

            {/* Tab toggle */}
            <div className="flex gap-2 mb-4">
              <Button
                variant={activeTab === 'hourly' ? 'default' : 'outline'}
                onClick={() => setActiveTab('hourly')}
                data-testid="tab-hourly"
              >
                {hourlyForecast}
              </Button>
              <Button
                variant={activeTab === 'daily' ? 'default' : 'outline'}
                onClick={() => setActiveTab('daily')}
                data-testid="tab-daily"
              >
                {dailyForecast}
              </Button>
            </div>

            {/* Hourly view */}
            {activeTab === 'hourly' && (
              <div className="grid grid-cols-8 gap-2" data-testid="hourly-forecast">
                {hourlyData.map((slot, index) => (
                  <div 
                    key={index}
                    className={`rounded-xl p-3 text-center ${slot.isPast ? 'bg-gray-100 opacity-50' : 'bg-gray-50'}`}
                    data-testid={`hourly-slot-${index}`}
                  >
                    <p className="font-semibold text-gray-900 text-xs mb-2">{slot.time}</p>
                    <div className="flex justify-center mb-2">
                      {getWeatherIcon(slot.condition, "w-8 h-8")}
                    </div>
                    <p className="text-base font-bold text-gray-900">{slot.temp}°</p>
                  </div>
                ))}
              </div>
            )}

            {/* Daily view */}
            {activeTab === 'daily' && (
              <div className="grid grid-cols-7 gap-3" data-testid="daily-forecast">
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
            )}
          </div>
        </div>
      )}
    </>
  );
}
