import { ArrowLeft, Users, Fuel, Settings } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import gradientBackground from '@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg';
import opelCorsaImage from '@assets/opel-corsa-autosportmany_1765139827008.jpg';
import vwGolfImage from '@assets/2019102501_VW_Golf_1765138194734.jpg';
import octaviaImage from '@assets/octavia_1765138345158.png';
import superbImage from '@assets/superb_1765138897149.jpg';
import dusterImage from '@assets/dacia_duster_1765139096529.jpg';
import bmwX5Image from '@assets/x5_1765139263561.jpg';
import joggerImage from '@assets/jogger_1765139684325.jpg';
import vwVanImage from '@assets/van_1765139487838.jpg';
import { getTranslation } from '../utils/translations';

const carOptions = [
  {
    id: '1',
    name: 'Economy Compact',
    description: 'Fuel-efficient city car, perfect for short trips',
    passengers: '4',
    transmission: 'Manual',
    price: '€35/day',
    image: opelCorsaImage,
  },
  {
    id: '2',
    name: 'Compact Hatchback',
    description: 'Versatile and easy to park in urban areas',
    passengers: '5',
    transmission: 'Automatic',
    price: '€40/day',
    image: vwGolfImage,
  },
  {
    id: '3',
    name: 'Midsize Sedan',
    description: 'Comfortable ride for longer journeys',
    passengers: '5',
    transmission: 'Automatic',
    price: '€55/day',
    image: octaviaImage,
  },
  {
    id: '4',
    name: 'Premium Sedan',
    description: 'Luxury comfort with advanced features',
    passengers: '5',
    transmission: 'Automatic',
    price: '€75/day',
    image: superbImage,
  },
  {
    id: '5',
    name: 'Compact SUV',
    description: 'Ideal for mountain roads and adventures',
    passengers: '5',
    transmission: 'Automatic',
    price: '€65/day',
    image: dusterImage,
  },
  {
    id: '6',
    name: 'Luxury SUV',
    description: 'Premium 4x4 with all-terrain capability',
    passengers: '7',
    transmission: 'Automatic',
    price: '€95/day',
    image: bmwX5Image,
  },
  {
    id: '7',
    name: 'Family Minivan',
    description: 'Spacious interior for groups and families',
    passengers: '7',
    transmission: 'Automatic',
    price: '€70/day',
    image: joggerImage,
  },
  {
    id: '8',
    name: 'Premium Van',
    description: 'Maximum space for large groups',
    passengers: '9',
    transmission: 'Automatic',
    price: '€85/day',
    image: vwVanImage,
  },
];

export default function RentACarPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const translatedCars = carOptions.map(car => ({
    ...car,
    name: t[`car${car.id}Name` as keyof typeof t] as string,
    description: t[`car${car.id}Description` as keyof typeof t] as string,
    transmission: t[`car${car.id}Transmission` as keyof typeof t] as string,
    price: t[`car${car.id}Price` as keyof typeof t] as string,
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6"
      style={{ backgroundColor: '#162739' }} 
      data-testid="rentacar-page"
    >
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="lg" className="rounded-full w-14 h-14 bg-white text-black hover:bg-white" data-testid="button-back-home">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.rentACar}
            </h1>
          </div>
        </div>

        {/* Language Selector - Bottom Left */}
        <div className="absolute bottom-4 left-0 z-50">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={setLanguage}
          />
        </div>

        {/* Cars Grid - 4 columns, 2 rows */}
        <div className="flex-1 overflow-y-auto pb-20">
          <div className="grid grid-cols-4 gap-4 h-full">
            {translatedCars.map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden bg-white/95 backdrop-blur-sm flex flex-col"
                data-testid={`car-card-${car.id}`}
              >
                <div className="relative w-full flex-[2] overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="text-center space-y-1 p-3 flex flex-col items-center justify-center flex-1">
                  <h3 className="text-lg font-bold" data-testid={`text-car-name-${car.id}`}>
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {car.description}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{car.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="w-3 h-3" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-primary" data-testid={`text-car-price-${car.id}`}>
                    {car.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
