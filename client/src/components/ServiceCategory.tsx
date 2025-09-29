import { Utensils, ShoppingBag, MapPin, Music, Waves } from 'lucide-react';
import cookingImage from '@assets/cook-garnishing-pasta-with-crushed-peanuts-2023-11-27-05-33-17-utc_1759145510240.jpg';

interface ServiceCategoryProps {
  category: 'dining' | 'shopping' | 'excursions' | 'entertainment' | 'spa';
  title: string;
  className?: string;
}

export default function ServiceCategory({ category, title, className = '' }: ServiceCategoryProps) {
  const getCategoryIcon = () => {
    switch (category) {
      case 'dining':
        return <Utensils className="w-12 h-12" />;
      case 'shopping':
        return <ShoppingBag className="w-12 h-12" />;
      case 'excursions':
        return <MapPin className="w-12 h-12" />;
      case 'entertainment':
        return <Music className="w-12 h-12" />;
      case 'spa':
        return <Waves className="w-12 h-12" />;
      default:
        return <Utensils className="w-12 h-12" />;
    }
  };

  const isDining = category === 'dining';

  return (
    <div 
      className={`border border-card-border rounded-lg flex flex-col items-center justify-center p-6 hover-elevate relative overflow-hidden ${className} ${
        isDining ? '' : 'bg-card'
      }`}
      style={isDining ? {
        backgroundImage: `url(${cookingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
      data-testid={`service-category-${category}`}
    >
      {isDining && (
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
      )}
      
      <div className={`relative z-10 flex flex-col items-center ${isDining ? 'text-white' : 'text-primary'} mb-4`}>
        {getCategoryIcon()}
      </div>
      <h3 className={`text-2xl font-medium text-center relative z-10 ${isDining ? 'text-white' : 'text-card-foreground'}`} data-testid={`text-category-${category}`}>
        {title}
      </h3>
    </div>
  );
}