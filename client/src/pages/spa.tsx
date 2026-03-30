import { ArrowLeft, MapPin, Clock, Flower2 } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
import spaImage1 from '@assets/skilled-physiotherapist-relaxing-tight-pectoral-mu-2024-10-18-10-50-56-utc_1759145807719.jpg';
import { getTranslation } from '../utils/translations';

const spaServices = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
];

export default function SpaPage() {
  const { currentLanguage, setLanguage } = useLanguage();
  const t = getTranslation(currentLanguage);

  const translatedServices = spaServices.map(s => ({
    id: s.id,
    name:        t[`spa${s.id}Name`        as keyof typeof t] as string,
    description: t[`spa${s.id}Description` as keyof typeof t] as string,
    hours:       t[`spa${s.id}Hours`       as keyof typeof t] as string,
    price:       t[`spa${s.id}Price`       as keyof typeof t] as string,
  }));

  const col1 = translatedServices.slice(0, 3);
  const col2 = translatedServices.slice(3, 5);

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

      {/* ── Right panel: service menu ── */}
      <div
        className="flex-1 flex flex-col h-full overflow-hidden"
        style={{ backgroundColor: '#f5f1eb' }}
      >
        {/* Top decorative line */}
        <div className="mx-10 mt-8 border-t border-[#c8b89a]" />

        {/* Services grid */}
        <div className="flex-1 overflow-hidden px-10 py-8 flex gap-10">
          {/* Column 1 */}
          <div className="flex-1 space-y-8">
            {col1.map((service, idx) => (
              <ServiceRow
                key={service.id}
                service={service}
                priceLabel={t.spaPriceLabel}
                showHeader={idx === 0}
                data-testid={`spa-service-${service.id}`}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="w-px bg-[#c8b89a] self-stretch" />

          {/* Column 2 */}
          <div className="flex-1 space-y-8">
            {col2.map((service, idx) => (
              <ServiceRow
                key={service.id}
                service={service}
                priceLabel={t.spaPriceLabel}
                showHeader={idx === 0}
                data-testid={`spa-service-${service.id}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mx-10 mb-8 border-b border-[#c8b89a]" />
      </div>
    </div>
  );
}

interface ServiceRowProps {
  service: { id: string; name: string; description: string; hours: string; price: string };
  priceLabel: string;
  showHeader: boolean;
  'data-testid'?: string;
}

function ServiceRow({ service, priceLabel, showHeader, 'data-testid': testId }: ServiceRowProps) {
  return (
    <div data-testid={testId}>
      {showHeader && (
        <div className="flex justify-between items-baseline mb-4 pb-1 border-b border-[#c8b89a]">
          <span className="text-xs tracking-[0.2em] uppercase text-[#7a6a55] font-semibold" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#7a6a55] font-semibold">
            {priceLabel}
          </span>
        </div>
      )}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="text-sm font-bold tracking-wide uppercase text-[#2d2417]">
              {service.name}
            </h3>
            <span className="text-xs text-[#9a8a72]">({service.hours})</span>
          </div>
          <p className="text-xs text-[#7a6a55] leading-relaxed">
            {service.description}
          </p>
        </div>
        <span className="text-sm font-semibold text-[#2d2417] whitespace-nowrap">
          {service.price}
        </span>
      </div>
      <div className="mt-4 border-b border-[#c8b89a]/50" />
    </div>
  );
}
