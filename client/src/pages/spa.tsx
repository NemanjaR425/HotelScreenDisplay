import { ArrowLeft, MapPin, Clock, Flower2, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import spaImage1 from '@assets/skilled-physiotherapist-relaxing-tight-pectoral-mu-2024-10-18-10-50-56-utc_1759145807719.jpg';
import spaImage2 from '@assets/close-up-of-a-portrait-of-a-young-woman-with-her-e-2025-01-09-21-59-16-utc (Large)_1763401007421.jpg';
import spaImage3 from '@assets/two-attractive-women-are-pampered-themselves-at-th-2024-04-22-20-12-44-utc (Large)_1763401615156.jpg';
import spaImage4 from '@assets/strong-couch-training-woman-in-modern-gym-2025-03-08-05-47-45-utc (Large)_1763401695456.jpg';
import spaImage5 from '@assets/young-happy-couple-relaxing-at-spa-resort-hotel-lu-2025-04-01-13-03-43-utc (Large)_1763401809350.jpg';
import { getTranslation } from '../utils/translations';

const spaServices = [
  { id: '1', image: spaImage1 },
  { id: '2', image: spaImage2 },
  { id: '3', image: spaImage3 },
  { id: '4', image: spaImage4 },
  { id: '5', image: spaImage5 },
];

export default function SpaPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const translatedServices = spaServices.map(s => ({
    id: s.id,
    image:       s.image,
    name:        t[`spa${s.id}Name`        as keyof typeof t] as string,
    description: t[`spa${s.id}Description` as keyof typeof t] as string,
    hours:       t[`spa${s.id}Hours`       as keyof typeof t] as string,
    price:       t[`spa${s.id}Price`       as keyof typeof t] as string,
  }));

  return (
    <div
      className="w-full h-screen overflow-hidden flex"
      data-testid="spa-page"
    >
      {/* ── Left panel: atmospheric image + info ── */}
      <div
        className="relative flex flex-col w-[38%] h-full overflow-hidden"
        style={{
          backgroundImage: `url(${spaImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-10">
          {/* Logo + name */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
              <Flower2 className="w-7 h-7 text-white" />
            </div>
            <span className="text-white text-3xl font-light tracking-widest uppercase">
              {t.spa}
            </span>
          </div>

          {/* Location & hours */}
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{t.spaFloor}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{t.spaOpenHours}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            {t.spaIntro}
          </p>

          {/* Tagline */}
          <p className="text-white text-lg font-light italic mt-auto mb-8">
            {t.spaTagline}
          </p>

          {/* Back + Language */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="default"
                className="rounded-full w-14 h-14 p-0 flex items-center justify-center bg-white text-black"
                data-testid="button-back-home"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={setLanguage}
            />
          </div>
        </div>
      </div>

      {/* ── Right panel: service cards ── */}
      <div
        className="flex-1 h-full overflow-hidden flex items-center justify-center py-6 pr-6"
        style={{ backgroundColor: '#162739' }}
      >
        <div className="grid grid-cols-3 gap-3 w-full">
          {translatedServices.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden bg-white/95 flex flex-col"
              data-testid={`spa-service-card-${service.id}`}
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="flex flex-col items-center justify-center text-center space-y-1 p-3">
                <h3 className="text-sm font-bold leading-tight" data-testid={`text-service-name-${service.id}`}>
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{service.hours}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-3 h-3" />
                    <span className="font-semibold text-foreground">{service.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
