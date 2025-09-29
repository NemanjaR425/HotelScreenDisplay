import { useState, useEffect } from 'react';
import WelcomeHeader from './WelcomeHeader';
import WeatherWidget from './WeatherWidget';
import HotelAmenities from './HotelAmenities';
import LocalAttractions from './LocalAttractions';
import ContentSlide from './ContentSlide';

interface DigitalSignageProps {
  hotelName?: string;
  tagline?: string;
  rotationInterval?: number; // in milliseconds
}

export default function DigitalSignage({ 
  hotelName = "Hotel Grand Plaza",
  tagline = "Your Premier Destination for Luxury & Hospitality",
  rotationInterval = 8000
}: DigitalSignageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Content slides configuration
  const slides = [
    {
      id: 'welcome',
      component: (
        <div className="min-h-screen flex flex-col items-center justify-center p-12 space-y-8">
          <WelcomeHeader hotelName={hotelName} tagline={tagline} />
          <WeatherWidget temperature={72} condition="sunny" location="Downtown" />
        </div>
      )
    },
    {
      id: 'amenities',
      component: (
        <div className="min-h-screen flex items-center justify-center p-12">
          <div className="max-w-6xl w-full">
            <HotelAmenities />
          </div>
        </div>
      )
    },
    {
      id: 'attractions',
      component: (
        <div className="min-h-screen flex items-center justify-center p-12">
          <div className="max-w-6xl w-full">
            <LocalAttractions />
          </div>
        </div>
      )
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, rotationInterval);

    return () => clearInterval(timer);
  }, [rotationInterval, slides.length]);

  // Manual navigation for testing
  const handleSlideClick = (index: number) => {
    console.log(`Switching to slide ${index}`);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden" data-testid="digital-signage">
      {/* Content Slides */}
      <div className="relative w-full min-h-screen">
        {slides.map((slide, index) => (
          <ContentSlide 
            key={slide.id}
            isActive={currentSlide === index}
          >
            {slide.component}
          </ContentSlide>
        ))}
      </div>

      {/* Navigation indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3" data-testid="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover-elevate ${
              currentSlide === index 
                ? 'bg-primary' 
                : 'bg-muted border border-border'
            }`}
            data-testid={`slide-indicator-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Current slide info for debugging */}
      <div className="absolute top-4 right-4 bg-card border border-card-border rounded-md px-3 py-2 text-sm text-muted-foreground" data-testid="slide-debug">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
}