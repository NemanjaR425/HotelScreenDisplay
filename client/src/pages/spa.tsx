import { ArrowLeft, Clock, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import gradientBackground from '@assets/abstract-luxury-gradient-blue-background-smooth-d-2025-03-08-01-09-33-utc_1759149171572.jpg';
import spaImage1 from '@assets/skilled-physiotherapist-relaxing-tight-pectoral-mu-2024-10-18-10-50-56-utc_1759145807719.jpg';
import spaImage2 from '@assets/close-up-of-a-portrait-of-a-young-woman-with-her-e-2025-01-09-21-59-16-utc (Large)_1763401007421.jpg';
import spaImage3 from '@assets/two-attractive-women-are-pampered-themselves-at-th-2024-04-22-20-12-44-utc (Large)_1763401615156.jpg';
import spaImage4 from '@assets/strong-couch-training-woman-in-modern-gym-2025-03-08-05-47-45-utc (Large)_1763401695456.jpg';
import spaImage5 from '@assets/young-happy-couple-relaxing-at-spa-resort-hotel-lu-2025-04-01-13-03-43-utc (Large)_1763401809350.jpg';
import { getTranslation } from '../utils/translations';

const spaServices = [
  {
    id: '1',
    name: 'Swedish Massage',
    description: 'Classic therapeutic massage for muscle relaxation',
    hours: '09:00 AM - 08:00 PM',
    price: '€65',
    image: spaImage1,
  },
  {
    id: '2',
    name: 'Hot Stone Therapy',
    description: 'Soothing therapy with warm volcanic stones',
    hours: '10:00 AM - 07:00 PM',
    price: '€85',
    image: spaImage2,
  },
  {
    id: '3',
    name: 'Facial Treatment',
    description: 'Luxury facial treatment for all skin types',
    hours: '09:00 AM - 08:00 PM',
    price: '€75',
    image: spaImage3,
  },
  {
    id: '4',
    name: 'Body Scrub',
    description: 'Revitalizing body scrub treatment with natural oils',
    hours: '10:00 AM - 06:00 PM',
    price: '€55',
    image: spaImage4,
  },
  {
    id: '5',
    name: 'Aromatherapy',
    description: 'Relaxing massage with essential oils',
    hours: '09:00 AM - 08:00 PM',
    price: '€70',
    image: spaImage5,
  },
];

export default function SpaPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const translatedServices = spaServices.map(service => ({
    ...service,
    name: t[`spa${service.id}Name` as keyof typeof t] as string,
    description: t[`spa${service.id}Description` as keyof typeof t] as string,
    hours: t[`spa${service.id}Hours` as keyof typeof t] as string,
    price: t[`spa${service.id}Price` as keyof typeof t] as string,
  }));

  return (
    <div 
      className="w-full h-screen overflow-hidden p-6"
      style={{ backgroundColor: '#162739' }} 
      data-testid="spa-page"
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
              {t.spa}
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
          <div className="grid grid-cols-5 gap-4 h-full">
            {translatedServices.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden bg-white/95 backdrop-blur-sm flex flex-col h-full"
                data-testid={`spa-service-card-${service.id}`}
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
                        <DollarSign className="w-3 h-3" />
                        <span className="font-semibold text-foreground">{service.price}</span>
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
