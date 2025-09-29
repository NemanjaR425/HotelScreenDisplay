import { MapPin, Clock, Star, Camera } from 'lucide-react';

interface Attraction {
  name: string;
  description: string;
  distance: string;
  rating: number;
  category: string;
  icon: React.ReactNode;
}

interface LocalAttractionsProps {
  attractions?: Attraction[];
}

export default function LocalAttractions({ attractions }: LocalAttractionsProps) {
  const defaultAttractions: Attraction[] = [
    {
      name: "Central Art Museum",
      description: "World-class contemporary art collections and exhibitions",
      distance: "0.3 miles",
      rating: 4.8,
      category: "Culture",
      icon: <Camera className="w-6 h-6" />
    },
    {
      name: "Riverside Park",
      description: "Beautiful waterfront park perfect for morning walks",
      distance: "0.5 miles", 
      rating: 4.6,
      category: "Recreation",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      name: "Historic Theater District",
      description: "Premier entertainment venue with Broadway-style shows",
      distance: "0.7 miles",
      rating: 4.9,
      category: "Entertainment",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Grand Shopping Plaza",
      description: "Upscale shopping with designer boutiques and cafes",
      distance: "0.2 miles",
      rating: 4.5,
      category: "Shopping",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      name: "Waterfront Promenade",
      description: "Scenic walking path with harbor views and restaurants",
      distance: "0.8 miles",
      rating: 4.7,
      category: "Dining",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      name: "Business District",
      description: "Financial center with modern architecture and services",
      distance: "1.2 miles",
      rating: 4.4,
      category: "Business",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const displayAttractions = attractions || defaultAttractions;

  return (
    <div className="space-y-8" data-testid="local-attractions">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-foreground mb-2" data-testid="text-attractions-title">
          Local Attractions
        </h2>
        <p className="text-lg text-muted-foreground">
          Discover the best our city has to offer
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayAttractions.map((attraction, index) => (
          <div 
            key={index}
            className="bg-card rounded-xl p-6 border border-card-border hover-elevate"
            data-testid={`attraction-card-${index}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-primary mt-1">
                {attraction.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-card-foreground" data-testid={`text-attraction-name-${index}`}>
                    {attraction.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span data-testid={`text-attraction-rating-${index}`}>{attraction.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3" data-testid={`text-attraction-desc-${index}`}>
                  {attraction.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span data-testid={`text-attraction-distance-${index}`}>{attraction.distance}</span>
                  </div>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs" data-testid={`text-attraction-category-${index}`}>
                    {attraction.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}