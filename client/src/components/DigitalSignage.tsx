import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import CombinedAmenities from './CombinedAmenities';

interface DigitalSignageProps {
  hotelName?: string;
  tagline?: string;
}

export default function DigitalSignage({ 
  hotelName = "Hotel Grand Plaza",
  tagline = "Your Premier Destination for Luxury & Hospitality"
}: DigitalSignageProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="w-full h-screen bg-background overflow-hidden" data-testid="digital-signage" style={{ aspectRatio: '16/9' }}>
      <div className="h-full flex flex-col p-6">
        {/* Header Section - Compact for 16:9 */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <div className="text-left">
              <h1 className="text-4xl font-semibold text-foreground mb-1" data-testid="text-hotel-name">
                {hotelName}
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-tagline">
                {tagline}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Compact Time/Date Display */}
            <div className="text-right space-y-1">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span className="text-2xl font-medium" data-testid="text-current-time">
                  {formatTime(currentTime)}
                </span>
              </div>
              <div className="text-sm text-muted-foreground" data-testid="text-current-date">
                {formatDate(currentTime)}
              </div>
            </div>
            
            <WeatherWidget temperature={72} condition="sunny" location="Downtown" />
          </div>
        </div>

        {/* Combined Amenities Section - Main content area */}
        <div className="flex-1 overflow-hidden">
          <CombinedAmenities />
        </div>
      </div>
    </div>
  );
}