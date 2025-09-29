import { Cloud, Sun, CloudRain, Thermometer } from 'lucide-react';

interface WeatherWidgetProps {
  temperature: number;
  condition: 'sunny' | 'cloudy' | 'rainy';
  location: string;
}

export default function WeatherWidget({ temperature, condition, location }: WeatherWidgetProps) {
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

  return (
    <div className="flex items-center space-x-4 bg-card rounded-xl p-6 border border-card-border" data-testid="weather-widget">
      <div className="flex items-center space-x-3">
        {getWeatherIcon()}
        <div>
          <div className="flex items-center space-x-2">
            <Thermometer className="w-5 h-5 text-muted-foreground" />
            <span className="text-2xl font-medium" data-testid="text-temperature">
              {temperature}°F
            </span>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="text-condition">
            {getConditionText()}
          </p>
        </div>
      </div>
      <div className="border-l border-border pl-4">
        <p className="text-sm text-muted-foreground">Current weather in</p>
        <p className="font-medium" data-testid="text-location">{location}</p>
      </div>
    </div>
  );
}