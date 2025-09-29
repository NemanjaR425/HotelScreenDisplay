import { Utensils, Waves, Dumbbell, Car, Wifi, Coffee, Users, Briefcase } from 'lucide-react';

interface Amenity {
  icon: React.ReactNode;
  name: string;
  description: string;
}

interface HotelAmenitiesProps {
  amenities?: Amenity[];
}

export default function HotelAmenities({ amenities }: HotelAmenitiesProps) {
  const defaultAmenities: Amenity[] = [
    {
      icon: <Utensils className="w-8 h-8" />,
      name: "Fine Dining",
      description: "Award-winning restaurant with international cuisine"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      name: "Luxury Spa",
      description: "Full-service spa with relaxation treatments"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      name: "Fitness Center",
      description: "24/7 state-of-the-art gym facilities"
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: "Valet Parking",
      description: "Complimentary valet service available"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      name: "Free WiFi",
      description: "High-speed internet throughout the hotel"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      name: "Coffee Bar",
      description: "Premium coffee and light refreshments"
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Concierge",
      description: "24-hour concierge service for all your needs"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "Business Center",
      description: "Meeting rooms and business facilities"
    }
  ];

  const displayAmenities = amenities || defaultAmenities;

  return (
    <div className="space-y-8" data-testid="hotel-amenities">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-foreground mb-2" data-testid="text-amenities-title">
          Hotel Amenities
        </h2>
        <p className="text-lg text-muted-foreground">
          Experience luxury and comfort with our premium services
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayAmenities.map((amenity, index) => (
          <div 
            key={index}
            className="bg-card rounded-xl p-6 border border-card-border text-center hover-elevate"
            data-testid={`amenity-card-${index}`}
          >
            <div className="flex justify-center mb-4 text-primary">
              {amenity.icon}
            </div>
            <h3 className="text-lg font-medium mb-2 text-card-foreground" data-testid={`text-amenity-name-${index}`}>
              {amenity.name}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid={`text-amenity-desc-${index}`}>
              {amenity.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}