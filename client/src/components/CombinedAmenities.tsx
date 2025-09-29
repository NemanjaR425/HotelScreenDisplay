import { Utensils, Waves, Dumbbell, Car, Wifi, Coffee, Users, Briefcase, MapPin, Star, Camera, Clock } from 'lucide-react';

interface AmenityItem {
  icon: React.ReactNode;
  name: string;
  description: string;
  type: 'hotel' | 'local';
}

interface CombinedAmenitiesProps {
  amenities?: AmenityItem[];
}

export default function CombinedAmenities({ amenities }: CombinedAmenitiesProps) {
  const defaultAmenities: AmenityItem[] = [
    // Hotel Amenities
    {
      icon: <Utensils className="w-6 h-6" />,
      name: "Fine Dining",
      description: "Award-winning restaurant",
      type: 'hotel'
    },
    {
      icon: <Waves className="w-6 h-6" />,
      name: "Luxury Spa",
      description: "Full-service spa treatments",
      type: 'hotel'
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      name: "Fitness Center",
      description: "24/7 state-of-the-art gym",
      type: 'hotel'
    },
    {
      icon: <Car className="w-6 h-6" />,
      name: "Valet Parking",
      description: "Complimentary valet service",
      type: 'hotel'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      name: "Free WiFi",
      description: "High-speed internet",
      type: 'hotel'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      name: "Coffee Bar",
      description: "Premium coffee & refreshments",
      type: 'hotel'
    },
    // Local Attractions
    {
      icon: <Camera className="w-6 h-6" />,
      name: "Art Museum",
      description: "0.3 mi • Contemporary art",
      type: 'local'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      name: "Riverside Park",
      description: "0.5 mi • Waterfront walks",
      type: 'local'
    },
    {
      icon: <Star className="w-6 h-6" />,
      name: "Theater District",
      description: "0.7 mi • Broadway shows",
      type: 'local'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      name: "Shopping Plaza",
      description: "0.2 mi • Designer boutiques",
      type: 'local'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      name: "Waterfront Dining",
      description: "0.8 mi • Harbor restaurants",
      type: 'local'
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "Business District",
      description: "1.2 mi • Financial center",
      type: 'local'
    }
  ];

  const displayAmenities = amenities || defaultAmenities;
  const hotelAmenities = displayAmenities.filter(item => item.type === 'hotel');
  const localAttractions = displayAmenities.filter(item => item.type === 'local');

  return (
    <div className="space-y-8" data-testid="combined-amenities">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-foreground mb-2" data-testid="text-amenities-title">
          Hotel Amenities & Local Attractions
        </h2>
        <p className="text-lg text-muted-foreground">
          Everything you need for the perfect stay
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Hotel Amenities */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground text-center" data-testid="text-hotel-section">
            Hotel Services
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {hotelAmenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 border border-card-border text-center hover-elevate"
                data-testid={`hotel-amenity-card-${index}`}
              >
                <div className="flex justify-center mb-2 text-primary">
                  {amenity.icon}
                </div>
                <h4 className="text-sm font-medium mb-1 text-card-foreground" data-testid={`text-hotel-amenity-name-${index}`}>
                  {amenity.name}
                </h4>
                <p className="text-xs text-muted-foreground" data-testid={`text-hotel-amenity-desc-${index}`}>
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Attractions */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-foreground text-center" data-testid="text-local-section">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {localAttractions.map((attraction, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-4 border border-card-border text-center hover-elevate"
                data-testid={`local-attraction-card-${index}`}
              >
                <div className="flex justify-center mb-2 text-primary">
                  {attraction.icon}
                </div>
                <h4 className="text-sm font-medium mb-1 text-card-foreground" data-testid={`text-local-attraction-name-${index}`}>
                  {attraction.name}
                </h4>
                <p className="text-xs text-muted-foreground" data-testid={`text-local-attraction-desc-${index}`}>
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}