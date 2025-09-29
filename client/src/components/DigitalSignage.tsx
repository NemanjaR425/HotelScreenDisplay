import WelcomeHeader from './WelcomeHeader';
import WeatherWidget from './WeatherWidget';
import HotelAmenities from './HotelAmenities';
import LocalAttractions from './LocalAttractions';

interface DigitalSignageProps {
  hotelName?: string;
  tagline?: string;
}

export default function DigitalSignage({ 
  hotelName = "Hotel Grand Plaza",
  tagline = "Your Premier Destination for Luxury & Hospitality"
}: DigitalSignageProps) {
  return (
    <div className="w-full min-h-screen bg-background" data-testid="digital-signage">
      <div className="max-w-7xl mx-auto p-8 space-y-16">
        {/* Header Section with Welcome and Weather */}
        <div className="text-center space-y-8">
          <WelcomeHeader hotelName={hotelName} tagline={tagline} />
          <div className="flex justify-center">
            <WeatherWidget temperature={72} condition="sunny" location="Downtown" />
          </div>
        </div>

        {/* Amenities Section */}
        <div>
          <HotelAmenities />
        </div>

        {/* Local Attractions Section */}
        <div>
          <LocalAttractions />
        </div>
      </div>
    </div>
  );
}