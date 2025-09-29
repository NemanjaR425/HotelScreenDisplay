import { Utensils, ShoppingBag, MapPin, Music, Waves } from 'lucide-react';
import cookingImage from '@assets/cook-garnishing-pasta-with-crushed-peanuts-2023-11-27-05-33-17-utc_1759145510240.jpg';
import shoppingImage from '@assets/two-young-multiethnic-women-buying-purse-in-the-st-2023-11-27-04-55-45-utc_1759145595867.jpg';
import excursionsImage from '@assets/the-picturesque-town-of-perast-in-the-bay-of-kotor-2023-11-27-04-48-55-utc_1759145689907.jpg';

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
  const isShopping = category === 'shopping';
  const isExcursions = category === 'excursions';
  const hasBackgroundImage = isDining || isShopping || isExcursions;

  const getBackgroundImage = () => {
    if (isDining) return cookingImage;
    if (isShopping) return shoppingImage;
    if (isExcursions) return excursionsImage;
    return null;
  };

  return (
    <div 
      className={`border border-card-border rounded-lg flex flex-col items-center justify-center p-6 hover-elevate relative overflow-hidden ${className} ${
        hasBackgroundImage ? '' : 'bg-card'
      }`}
      style={hasBackgroundImage ? {
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
      data-testid={`service-category-${category}`}
    >
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
      )}
      
      <div className={`relative z-10 flex flex-col items-center ${hasBackgroundImage ? 'text-white' : 'text-primary'} mb-4`}>
        {getCategoryIcon()}
      </div>
      <h3 className={`text-2xl font-medium text-center relative z-10 ${hasBackgroundImage ? 'text-white' : 'text-card-foreground'}`} data-testid={`text-category-${category}`}>
        {title}
      </h3>
    </div>
  );
}