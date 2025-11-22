import { useState } from 'react';
import { ArrowLeft, Clock, MapPin, Utensils } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
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
      { category: 'Starters', name: 'Grilled Octopus', description: 'Tender octopus with olive oil and herbs', price: '18' },
      { category: 'Starters', name: 'Mezze Platter', description: 'Selection of hummus, olives, and cheese', price: '22' },
      { category: 'Starters', name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', price: '14' },
      { category: 'Main Courses', name: 'Seafood Paella', description: 'Traditional Spanish rice with fresh seafood', price: '28' },
      { category: 'Main Courses', name: 'Lamb Souvlaki', description: 'Grilled lamb skewers with Greek salad', price: '26' },
      { category: 'Main Courses', name: 'Grilled Sea Bass', description: 'Fresh Mediterranean sea bass with lemon', price: '32' },
      { category: 'Pasta', name: 'Linguine Vongole', description: 'Fresh clams with white wine and garlic', price: '24' },
      { category: 'Pasta', name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with garlic', price: '18' },
      { category: 'Pasta', name: 'Seafood Fettuccine', description: 'Mixed seafood in creamy sauce', price: '26' },
      { category: 'Soups', name: 'Greek Lemon Soup', description: 'Traditional avgolemono with chicken', price: '12' },
      { category: 'Soups', name: 'Minestrone', description: 'Classic Italian vegetable soup', price: '10' },
      { category: 'Salads', name: 'Greek Salad', description: 'Feta cheese, olives, tomatoes, cucumber', price: '16' },
      { category: 'Salads', name: 'Caesar Salad', description: 'Romaine lettuce with parmesan and croutons', price: '14' },
      { category: 'Salads', name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil', price: '18' },
      { category: 'Desserts', name: 'Baklava', description: 'Honey and pistachio pastry', price: '12' },
      { category: 'Desserts', name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: '14' },
      { category: 'Desserts', name: 'Panna Cotta', description: 'Vanilla cream with berry coulis', price: '12' },
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
      { category: 'Starters', name: 'Edamame', description: 'Steamed soybeans with sea salt', price: '8' },
      { category: 'Starters', name: 'Gyoza', description: 'Pan-fried pork dumplings', price: '12' },
      { category: 'Starters', name: 'Tuna Tataki', description: 'Seared tuna with ponzu sauce', price: '18' },
      { category: 'Sushi', name: 'Omakase Selection', description: 'Chef\'s choice of 12 pieces premium sushi', price: '85' },
      { category: 'Sushi', name: 'Salmon Teriyaki Roll', description: 'Fresh salmon with teriyaki glaze', price: '16' },
      { category: 'Sushi', name: 'Dragon Roll', description: 'Eel and avocado with special sauce', price: '18' },
      { category: 'Hot Dishes', name: 'Miso Black Cod', description: 'Glazed black cod with miso sauce', price: '32' },
      { category: 'Hot Dishes', name: 'Wagyu Beef Teppanyaki', description: 'Premium wagyu prepared tableside', price: '48' },
      { category: 'Hot Dishes', name: 'Chicken Teriyaki', description: 'Grilled chicken with teriyaki sauce', price: '22' },
      { category: 'Soups', name: 'Miso Soup', description: 'Traditional soybean paste soup', price: '6' },
      { category: 'Soups', name: 'Ramen', description: 'Rich pork broth with noodles and egg', price: '16' },
      { category: 'Salads', name: 'Seaweed Salad', description: 'Fresh wakame with sesame dressing', price: '10' },
      { category: 'Salads', name: 'Ginger Salad', description: 'Mixed greens with ginger dressing', price: '12' },
      { category: 'Desserts', name: 'Mochi Ice Cream', description: 'Traditional Japanese rice cake dessert', price: '8' },
      { category: 'Desserts', name: 'Green Tea Cheesecake', description: 'Matcha flavored cheesecake', price: '12' },
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
      { category: 'Starters', name: 'Burrata Caprese', description: 'Creamy burrata with tomatoes and basil', price: '19' },
      { category: 'Starters', name: 'Prosciutto e Melone', description: 'Parma ham with fresh cantaloupe', price: '21' },
      { category: 'Starters', name: 'Carpaccio', description: 'Thinly sliced beef with arugula', price: '22' },
      { category: 'Pasta', name: 'Truffle Risotto', description: 'Arborio rice with black truffle', price: '28' },
      { category: 'Pasta', name: 'Carbonara', description: 'Eggs, pecorino, guanciale, black pepper', price: '22' },
      { category: 'Pasta', name: 'Lasagna Bolognese', description: 'Classic meat lasagna with béchamel', price: '24' },
      { category: 'Pizza', name: 'Margherita Napoletana', description: 'San Marzano tomatoes, mozzarella, basil', price: '18' },
      { category: 'Pizza', name: 'Quattro Formaggi', description: 'Four cheese blend with honey', price: '22' },
      { category: 'Pizza', name: 'Prosciutto e Rucola', description: 'Parma ham and arugula', price: '24' },
      { category: 'Soups', name: 'Minestrone', description: 'Traditional Italian vegetable soup', price: '10' },
      { category: 'Soups', name: 'Pasta e Fagioli', description: 'Pasta and bean soup', price: '12' },
      { category: 'Salads', name: 'Insalata Mista', description: 'Mixed greens with balsamic vinaigrette', price: '14' },
      { category: 'Salads', name: 'Panzanella', description: 'Tuscan bread salad with tomatoes', price: '16' },
      { category: 'Desserts', name: 'Tiramisu', description: 'Classic coffee-flavored dessert', price: '10' },
      { category: 'Desserts', name: 'Panna Cotta', description: 'Vanilla cream with berry sauce', price: '12' },
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
      { category: 'Starters', name: 'Oysters Rockefeller', description: 'Fresh oysters with spinach and herbs', price: '24' },
      { category: 'Starters', name: 'Shrimp Cocktail', description: 'Jumbo shrimp with cocktail sauce', price: '22' },
      { category: 'Starters', name: 'Crab Cakes', description: 'Maryland style with remoulade', price: '26' },
      { category: 'Steaks', name: 'Dry-Aged Ribeye', description: '32oz prime ribeye, 28-day aged', price: '65' },
      { category: 'Steaks', name: 'Filet Mignon', description: '8oz tenderloin with truffle butter', price: '52' },
      { category: 'Steaks', name: 'New York Strip', description: '16oz prime strip steak', price: '58' },
      { category: 'Mains', name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter', price: '38' },
      { category: 'Mains', name: 'Lamb Chops', description: 'Herb-crusted rack of lamb', price: '48' },
      { category: 'Mains', name: 'Lobster Tail', description: 'Maine lobster with drawn butter', price: '56' },
      { category: 'Soups', name: 'French Onion Soup', description: 'Classic with gruyere cheese', price: '14' },
      { category: 'Soups', name: 'Lobster Bisque', description: 'Creamy lobster soup', price: '18' },
      { category: 'Salads', name: 'Caesar Salad', description: 'Romaine lettuce with parmesan and croutons', price: '16' },
      { category: 'Salads', name: 'Wedge Salad', description: 'Iceberg with bacon and blue cheese', price: '18' },
      { category: 'Desserts', name: 'New York Cheesecake', description: 'Classic cheesecake with berry compote', price: '14' },
      { category: 'Desserts', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: '16' },
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

  // Order of categories for display
  const categoryOrder = ['Starters', 'Main Courses', 'Pasta', 'Soups', 'Salads', 'Desserts', 'Sushi', 'Hot Dishes', 'Pizza', 'Steaks', 'Mains'];
  const orderedCategories = categoryOrder.filter(cat => groupedMenuItems[cat]);

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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="default" size="icon" data-testid="button-back-home">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
                {t.dining}
              </h1>
            </div>
            <LanguageSelector 
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>
        )}

        <div className="flex-1 overflow-hidden pb-20">
          {!selectedRestaurant ? (
            <div className="grid grid-cols-4 gap-4 h-full">
              {translatedRestaurants.map((restaurant) => (
                <Card
                  key={restaurant.id}
                  className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer bg-white/95 backdrop-blur-sm flex flex-col h-full"
                  onClick={() => setSelectedRestaurant(restaurant.id)}
                  data-testid={`restaurant-card-${restaurant.id}`}
                >
                  <div className="relative w-full flex-1 overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <CardContent className="text-center space-y-4 p-6 flex flex-col items-center justify-center h-full">
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
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <Button 
                  variant="default" 
                  onClick={() => setSelectedRestaurant(null)}
                  data-testid="button-back-restaurants"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Restaurants
                </Button>
                <LanguageSelector 
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />
              </div>

              <div 
                className="flex-1 overflow-hidden rounded-lg p-8"
                style={{
                  background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)',
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="text-center mb-6 pb-4 border-b border-white/20">
                    <p className="text-white/80 text-sm tracking-widest uppercase mb-2">
                      RESTAURANT · BAR · DINER
                    </p>
                    <h2 className="text-3xl font-bold text-white mb-2" data-testid="text-restaurant-name">
                      {selectedRestaurantData?.name}
                    </h2>
                    <div className="flex items-center justify-center space-x-6 text-white/60 text-sm">
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

                  <div 
                    className="flex-1 overflow-hidden rounded-md p-12"
                    style={{
                      backgroundColor: '#f8f6f0',
                    }}
                  >
                    <div className="h-full overflow-y-auto">
                      <div className="grid grid-cols-3 gap-12">
                        {orderedCategories.map((category) => (
                          <div key={category}>
                            <h3 
                              className="text-4xl mb-6 text-center"
                              style={{
                                fontFamily: "'Brush Script MT', cursive",
                                color: '#2d2d2d',
                              }}
                              data-testid={`menu-category-${category.toLowerCase().replace(' ', '-')}`}
                            >
                              {category}
                            </h3>
                            <div className="space-y-6">
                              {groupedMenuItems[category].map((item, index) => (
                                <div 
                                  key={index}
                                  className="pb-4 border-b border-gray-300/30 last:border-0"
                                  data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  <div className="flex justify-between items-baseline mb-1 gap-3">
                                    <h4 
                                      className="font-bold text-sm tracking-wide uppercase"
                                      style={{ color: '#2d2d2d' }}
                                    >
                                      {item.name}
                                    </h4>
                                    <div className="border-b border-dotted border-gray-400/50 flex-1 mb-1"></div>
                                    <span 
                                      className="text-sm font-semibold whitespace-nowrap"
                                      style={{ color: '#2d2d2d' }}
                                    >
                                      {item.price}
                                    </span>
                                  </div>
                                  <p 
                                    className="text-xs leading-relaxed"
                                    style={{ color: '#666' }}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
