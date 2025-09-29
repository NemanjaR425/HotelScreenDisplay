import { useState } from 'react';
import { ArrowLeft, Clock, MapPin, Utensils } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import gradientBackground from '@assets/gradient-colored-background-2025-01-07-23-09-49-utc_1759147416039.jpg';
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
  currentLanguage?: string;
}

export default function DiningPage({ currentLanguage = 'en' }: DiningPageProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const t = getTranslation(currentLanguage);

  const selectedRestaurantData = selectedRestaurant 
    ? restaurants.find(r => r.id === selectedRestaurant)
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
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" size="icon" data-testid="button-back-home">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-white" data-testid="text-page-title">
                {t.dining}
              </h1>
              <p className="text-white/80 text-lg">Choose from our four exceptional restaurants</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {!selectedRestaurant ? (
            /* Restaurant Grid */
            <div className="grid grid-cols-2 gap-6 h-full">
              {restaurants.map((restaurant) => (
                <Card 
                  key={restaurant.id}
                  className="hover-elevate active-elevate-2 cursor-pointer bg-white/95 backdrop-blur-sm border-white/20"
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                  data-testid={`restaurant-card-${restaurant.id}`}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Utensils className="w-6 h-6 text-primary" />
                      <Badge variant="secondary">{restaurant.cuisine}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{restaurant.name}</CardTitle>
                    <CardDescription className="text-lg">
                      {restaurant.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{restaurant.location}</span>
                      </div>
                      <Button 
                        className="w-full mt-4" 
                        data-testid={`button-view-menu-${restaurant.id}`}
                      >
                        View Menu
                      </Button>
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
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-white/20">
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
                              className="flex justify-between items-start border-b border-border/20 pb-4 last:border-b-0 last:pb-0"
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
      </div>
    </div>
  );
}