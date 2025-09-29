import { Cloud, Sun, CloudRain, Thermometer } from 'lucide-react';

interface WeatherWidgetProps {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  location: string;
  currentWeatherText: string;
}

export default function WeatherWidget({ temperature, condition, location, currentWeatherText }: WeatherWidgetProps) {
  const getWeatherIcon = () => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-400" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getConditionText = () => {
    switch (condition) {
      case 'sunny':
        return 'Sunny';
      case 'cloudy':
        return 'Cloudy';
      case 'rainy':
        return 'Light Rain';
      default:
        return 'Sunny';
    }
  };

  const getWeatherBackground = () => {
    switch (condition) {
      case 'sunny':
        return 'linear-gradient(135deg, #87CEEB 0%, #FFD700 100%)'; // Sky blue to golden
      case 'cloudy':
        return 'linear-gradient(135deg, #B0C4DE 0%, #778899 100%)'; // Light gray to slate gray
      case 'rainy':
        return 'linear-gradient(135deg, #4682B4 0%, #2F4F4F 100%)'; // Steel blue to dark slate gray
      default:
        return 'linear-gradient(135deg, #87CEEB 0%, #FFD700 100%)';
    }
  };

  const getTextColor = () => {
    switch (condition) {
      case 'sunny':
        return 'text-white';
      case 'cloudy':
        return 'text-white';
      case 'rainy':
        return 'text-white';
      default:
        return 'text-white';
    }
  };

  return (
    <div 
      className={`flex items-center space-x-4 rounded-xl p-6 border border-white/20 ${getTextColor()}`}
      style={{ background: getWeatherBackground() }}
      data-testid="weather-widget"
    >
      <div className="flex items-center space-x-3">
        {getWeatherIcon()}
        <div>
          <div className="flex items-center space-x-2">
            <Thermometer className="w-5 h-5 text-white/80" />
            <span className="text-2xl font-medium" data-testid="text-temperature">
              {temperature}°C
            </span>
          </div>
          <p className="text-sm text-white/80" data-testid="text-condition">
            {getConditionText()}
          </p>
        </div>
      </div>
      <div className="border-l border-white/30 pl-4">
        <p className="text-sm text-white/80">{currentWeatherText}</p>
        <p className="font-medium text-white" data-testid="text-location">{location}</p>
      </div>
    </div>
  );
}