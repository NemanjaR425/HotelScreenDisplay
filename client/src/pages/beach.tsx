import { ArrowLeft, Clock, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from "../components/ui/card";
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import gradientBackground from '@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg';
import beachImage1 from '@assets/stock_images/luxury_beach_resort__7d96b99a.jpg';
import beachImage2 from '@assets/stock_images/luxury_beach_resort__101b0b27.jpg';
import beachImage3 from '@assets/stock_images/luxury_beach_resort__01622698.jpg';
import beachImage4 from '@assets/stock_images/luxury_beach_resort__18f04661.jpg';
import beachImage5 from '@assets/stock_images/luxury_beach_resort__2ea838d4.jpg';
import { getTranslation } from '../utils/translations';

const beachServices = [
  {
    id: '1',
    name: 'Sun Loungers',
    description: 'Premium sun loungers with umbrella service',
    hours: '08:00 AM - 07:00 PM',
    location: 'Main Beach',
    image: beachImage1,
  },
  {
    id: '2',
    name: 'Beach Bar',
    description: 'Refreshing cocktails and light snacks by the water',
    hours: '10:00 AM - 10:00 PM',
    location: 'Beach Pavilion',
    image: beachImage2,
  },
  {
    id: '3',
    name: 'Water Sports',
    description: 'Kayaking, paddleboarding, and jet ski rentals',
    hours: '09:00 AM - 06:00 PM',
    location: 'Water Sports Center',
    image: beachImage3,
  },
  {
    id: '4',
    name: 'Beach Cabanas',
    description: 'Private cabanas with personalized service',
    hours: '08:00 AM - 08:00 PM',
    location: 'VIP Beach Area',
    image: beachImage4,
  },
  {
    id: '5',
    name: 'Sunset Cruise',
    description: 'Evening boat tours along the Adriatic coast',
    hours: '06:00 PM - 09:00 PM',
    location: 'Marina Dock',
    image: beachImage5,
  },
];

export default function BeachPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const translatedServices = beachServices.map(service => ({
    ...service,
    name: t[`beach${service.id}Name` as keyof typeof t] as string,
    description: t[`beach${service.id}Description` as keyof typeof t] as string,
    hours: t[`beach${service.id}Hours` as keyof typeof t] as string,
    location: t[`beach${service.id}Location` as keyof typeof t] as string,
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6"
      style={{ backgroundColor: '#162739' }} 
      data-testid="beach-page"
    >
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="default" size="lg" className="rounded-full w-14 h-14 bg-white text-black hover:bg-white pl-[22px] pr-[22px] ml-[20px] mr-[20px] mt-[20px] mb-[20px]" data-testid="button-back-home">
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-white" data-testid="text-page-title">
              {t.beach}
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

        {/* Services Grid */}
        <div className="flex-1 overflow-y-auto pb-20">
          <div className="grid grid-cols-5 gap-4 h-full ml-[20px] mr-[20px]">
            {translatedServices.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden bg-white/95 backdrop-blur-sm flex flex-col h-full"
                data-testid={`beach-service-card-${service.id}`}
              >
                <div className="relative w-full flex-1 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <CardContent className="text-center space-y-3 p-6 flex flex-col items-center justify-center h-full">
                    <h3 className="text-xl font-bold" data-testid={`text-service-name-${service.id}`}>
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{service.hours}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="w-3 h-3" />
                        <span className="font-semibold text-foreground">{service.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
