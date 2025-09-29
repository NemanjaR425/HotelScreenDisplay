import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import ServiceCategory from './ServiceCategory';

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
    <div className="w-full h-screen bg-background overflow-hidden p-6" data-testid="digital-signage" style={{ aspectRatio: '16/9' }}>
      <div className="h-full flex gap-6">
        {/* Left Panel - Welcome Section */}
        <div className="flex-1 bg-card border border-card-border rounded-lg p-8 flex flex-col">
          {/* Top row with clock/date and weather */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-left">
              <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                <Clock className="w-6 h-6" />
                <span className="text-2xl font-medium" data-testid="text-current-time">
                  {formatTime(currentTime)}
                </span>
              </div>
              <div className="text-lg text-muted-foreground" data-testid="text-current-date">
                {formatDate(currentTime)}
              </div>
            </div>
            
            <WeatherWidget temperature={72} condition="sunny" location="Downtown" />
          </div>

          {/* Spacer to push welcome message to bottom */}
          <div className="flex-1"></div>

          {/* Bottom welcome message */}
          <div className="mb-8">
            <p className="text-2xl text-muted-foreground mb-4">Welcome to</p>
            <h1 className="text-6xl font-bold text-foreground leading-tight" data-testid="text-hotel-name">
              {hotelName}
            </h1>
          </div>
        </div>

        {/* Right Panel - Service Categories Grid */}
        <div className="w-[48rem] grid grid-cols-2 gap-4" style={{ gridTemplateRows: '1fr 1fr 1fr' }}>
          <ServiceCategory category="dining" />
          <ServiceCategory category="shopping" />
          <ServiceCategory category="excursions" />
          <ServiceCategory category="entertainment" />
          <ServiceCategory category="spa" className="col-span-2" />
        </div>
      </div>
    </div>
  );
}