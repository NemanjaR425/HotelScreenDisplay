import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface WelcomeHeaderProps {
  hotelName: string;
  tagline?: string;
}

export default function WelcomeHeader({ hotelName, tagline }: WelcomeHeaderProps) {
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
      year: 'numeric',
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
    <div className="flex flex-col items-center justify-center text-center space-y-4" data-testid="welcome-header">
      <div className="space-y-2">
        <h1 className="text-6xl font-semibold text-foreground" data-testid="text-hotel-name">
          {hotelName}
        </h1>
        {tagline && (
          <p className="text-xl text-muted-foreground" data-testid="text-tagline">
            {tagline}
          </p>
        )}
      </div>
      
      <div className="flex items-center space-x-6 text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span className="text-lg" data-testid="text-current-time">
            {formatTime(currentTime)}
          </span>
        </div>
        <div className="text-lg" data-testid="text-current-date">
          {formatDate(currentTime)}
        </div>
      </div>
    </div>
  );
}