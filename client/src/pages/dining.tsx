import { useState } from 'react';
import { ArrowLeft, Clock, MapPin, Utensils } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LanguageSelector from '@/components/LanguageSelector';
import gradientBackground from '@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg';
import prosciuttoImage from '@assets/italian-parma-prosciutto-crudo-dried-ham-on-a-marb-2023-11-27-05-13-51-utc_1759175873409.jpg';
import sushiImage from '@assets/sushi-set-with-shrimps-and-rice-on-concrete-table-2025-03-24-07-38-39-utc_1759175873409.jpg';
import pizzaImage from '@assets/assorted-meat-pizza-with-jamon-and-olives-2024-09-21-21-23-11-utc_1759175873409.jpg';
import steakImage from '@assets/raw-beef-sirloin-steak-with-rosemary-on-wooden-cut-2025-05-30-14-50-37-utc_1759175873410.jpg';
import { getTranslation } from '../utils/translations';

// Mock restaurant data
const restaurants = [
  {
    id: '1',
    name: 'Azure Mediterranean',
    description: 'Authentic Mediterranean cuisine with fresh seafood and traditional dishes',
    cuisine: 'Mediterranean',
    hours: '12:00 PM - 11:00 PM',
    location: 'Main Floor, Oceanview Terrace',
    image: prosciuttoImage,
    menuItems: [
      { category: 'Appetizers', name: 'Grilled Octopus', description: 'Tender octopus with olive oil and herbs', price: '18.00' },
      { category: 'Appetizers', name: 'Mezze Platter', description: 'Selection of hummus, olives, and cheese', price: '22.00' },
      { category: 'Main Courses', name: 'Seafood Paella', description: 'Traditional Spanish rice with fresh seafood', price: '28.00' },
      { category: 'Main Courses', name: 'Lamb Souvlaki', description: 'Grilled lamb skewers with Greek salad', price: '26.00' },
      { category: 'Desserts', name: 'Baklava', description: 'Honey and pistachio pastry', price: '12.00' },
    ]
  },
  {
    id: '2',
    name: 'Sakura Sushi Bar',
    description: 'Premium Japanese cuisine featuring fresh sushi and traditional dishes',
    cuisine: 'Japanese',
    hours: '6:00 PM - 12:00 AM',
    location: '2nd Floor, Garden View',
    image: sushiImage,
    menuItems: [
      { category: 'Sushi', name: 'Omakase Selection', description: 'Chef\'s choice of 12 pieces premium sushi', price: '85.00' },
      { category: 'Sushi', name: 'Salmon Teriyaki Roll', description: 'Fresh salmon with teriyaki glaze', price: '16.00' },
      { category: 'Hot Dishes', name: 'Miso Black Cod', description: 'Glazed black cod with miso sauce', price: '32.00' },
      { category: 'Hot Dishes', name: 'Wagyu Beef Teppanyaki', description: 'Premium wagyu prepared tableside', price: '48.00' },
      { category: 'Desserts', name: 'Mochi Ice Cream', description: 'Traditional Japanese rice cake dessert', price: '8.00' },
    ]
  },
  {
    id: '3',
    name: 'Bella Vista Italian',
    description: 'Authentic Italian trattoria with handmade pasta and wood-fired pizzas',
    cuisine: 'Italian',
    hours: '11:00 AM - 11:00 PM',
    location: 'Main Floor, Piazza Courtyard',
    image: pizzaImage,
    menuItems: [
      { category: 'Antipasti', name: 'Burrata Caprese', description: 'Creamy burrata with tomatoes and basil', price: '19.00' },
      { category: 'Antipasti', name: 'Prosciutto e Melone', description: 'Parma ham with fresh cantaloupe', price: '21.00' },
      { category: 'Pasta', name: 'Truffle Risotto', description: 'Arborio rice with black truffle', price: '28.00' },
      { category: 'Pizza', name: 'Margherita Napoletana', description: 'San Marzano tomatoes, mozzarella, basil', price: '18.00' },
      { category: 'Desserts', name: 'Tiramisu', description: 'Classic coffee-flavored dessert', price: '10.00' },
    ]
  },
  {
    id: '4',
    name: 'Steakhouse Prime',
    description: 'Premium steakhouse featuring dry-aged beef and fine wines',
    cuisine: 'American Steakhouse',
    hours: '5:00 PM - 11:00 PM',
    location: '3rd Floor, Executive Level',
    image: steakImage,
    menuItems: [
      { category: 'Starters', name: 'Oysters Rockefeller', description: 'Fresh oysters with spinach and herbs', price: '24.00' },
      { category: 'Starters', name: 'Caesar Salad', description: 'Romaine lettuce with parmesan and croutons', price: '16.00' },
      { category: 'Steaks', name: 'Dry-Aged Ribeye', description: '32oz prime ribeye, 28-day aged', price: '65.00' },
      { category: 'Steaks', name: 'Filet Mignon', description: '8oz tenderloin with truffle butter', price: '52.00' },
      { category: 'Desserts', name: 'New York Cheesecake', description: 'Classic cheesecake with berry compote', price: '14.00' },
    ]
  }
];

interface DiningPageProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export default function DiningPage({ currentLanguage, onLanguageChange }: DiningPageProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const t = getTranslation(currentLanguage);

  const translatedRestaurants = restaurants.map(restaurant => ({
    ...restaurant,
    name: t[`restaurant${restaurant.id}Name` as keyof typeof t] as string,
    description: t[`restaurant${restaurant.id}Description` as keyof typeof t] as string,
    cuisine: t[`restaurant${restaurant.id}Cuisine` as keyof typeof t] as string,
    location: t[`restaurant${restaurant.id}Location` as keyof typeof t] as string,
  }));

  const selectedRestaurantData = selectedRestaurant 
    ? translatedRestaurants.find(r => r.id === selectedRestaurant)
    : null;

  const groupedMenuItems = selectedRestaurantData?.menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof selectedRestaurantData.menuItems>) || {};

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6" 
      data-testid="dining-page"
      style={{ 
        backgroundImage: `url(${gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="h-full flex flex-col relative">
        {!selectedRestaurant && (
          /* Header - only show on restaurant selection screen */
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="icon" data-testid="button-back-home">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.dining}
            </h1>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-hidden pb-20">
          {!selectedRestaurant ? (
            /* Restaurant Grid */
            <div className="grid grid-cols-4 gap-4 h-full">
              {translatedRestaurants.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer bg-white/95 backdrop-blur-sm flex flex-col h-full"
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                  data-testid={`restaurant-card-${restaurant.id}`}
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="text-center space-y-4 p-6 flex flex-col items-center justify-center flex-1">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{restaurant.name}</h3>
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        {restaurant.cuisine}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {restaurant.description}
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span>{restaurant.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Menu View */
            <div className="h-full flex flex-col">
              {/* Restaurant Header */}
              <div className="mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedRestaurant(null)}
                  className="mb-4"
                  data-testid="button-back-restaurants"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Restaurants
                </Button>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Utensils className="w-8 h-8 text-primary" />
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {selectedRestaurantData?.cuisine}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-2" data-testid="text-restaurant-name">
                    {selectedRestaurantData?.name}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4">
                    {selectedRestaurantData?.description}
                  </p>
                  <div className="flex items-center space-x-6 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedRestaurantData?.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedRestaurantData?.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Categories */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid gap-6">
                  {Object.entries(groupedMenuItems).map(([category, items]) => (
                    <Card key={category} className="bg-white/95 backdrop-blur-sm border-white/20">
                      <CardHeader>
                        <CardTitle className="text-2xl" data-testid={`menu-category-${category.toLowerCase().replace(' ', '-')}`}>
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {items.map((item, index) => (
                            <div 
                              key={index}
                              className="flex justify-between items-start pb-4"
                              data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                                <p className="text-muted-foreground">{item.description}</p>
                              </div>
                              <div className="ml-4">
                                <span className="text-lg font-bold">${item.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Language Selector - Bottom Left (only on restaurant selection screen) */}
        {!selectedRestaurant && (
          <div className="absolute bottom-0 left-0 mb-6 z-10">
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}