import { Utensils, ShoppingBag, MapPin, Music, Waves, Umbrella } from 'lucide-react';
import { Link } from 'wouter';
import cookingImage from '@assets/cook-garnishing-pasta-with-crushed-peanuts-2023-11-27-05-33-17-utc_1759145510240.jpg';
import shoppingImage from '@assets/two-young-multiethnic-women-buying-purse-in-the-st-2023-11-27-04-55-45-utc_1759145595867.jpg';
import excursionsImage from '@assets/the-picturesque-town-of-perast-in-the-bay-of-kotor-2023-11-27-04-48-55-utc_1759145689907.jpg';
import entertainmentImage from '@assets/the-musicians-were-playing-rock-music-on-stage-th-2023-11-27-05-11-51-utc_1759145753669.jpg';
import spaImage from '@assets/skilled-physiotherapist-relaxing-tight-pectoral-mu-2024-10-18-10-50-56-utc_1759145807719.jpg';
import beachImage from '@assets/stock_images/luxury_beach_resort__7d96b99a.jpg';

interface ServiceCategoryProps {
  category: 'dining' | 'shopping' | 'excursions' | 'entertainment' | 'spa' | 'beach';
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
      case 'beach':
        return <Umbrella className="w-12 h-12" />;
      default:
        return <Utensils className="w-12 h-12" />;
    }
  };

  const isDining = category === 'dining';
  const isShopping = category === 'shopping';
  const isExcursions = category === 'excursions';
  const isEntertainment = category === 'entertainment';
  const isSpa = category === 'spa';
  const isBeach = category === 'beach';
  const hasBackgroundImage = isDining || isShopping || isExcursions || isEntertainment || isSpa || isBeach;

  const getBackgroundImage = () => {
    if (isDining) return cookingImage;
    if (isShopping) return shoppingImage;
    if (isExcursions) return excursionsImage;
    if (isEntertainment) return entertainmentImage;
    if (isSpa) return spaImage;
    if (isBeach) return beachImage;
    return null;
  };

  const getNavigationPath = () => {
    switch (category) {
      case 'dining':
        return '/dining';
      case 'excursions':
        return '/tours';
      case 'spa':
        return '/spa';
      case 'entertainment':
        return '/entertainment';
      case 'beach':
        return '/beach';
      default:
        return '#'; // Placeholder for other categories
    }
  };

  const content = (
    <>
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
      )}
      
      <div className={`relative z-10 flex flex-col items-center ${hasBackgroundImage ? 'text-white' : 'text-primary'} mb-4`}>
        {getCategoryIcon()}
      </div>
      <h3 className={`text-2xl font-medium text-center relative z-10 ${hasBackgroundImage ? 'text-white' : 'text-card-foreground'}`} data-testid={`text-category-${category}`}>
        {title}
      </h3>
    </>
  );

  const sharedClassName = `rounded-lg flex flex-col items-center justify-center p-6 hover-elevate active-elevate-2 relative overflow-hidden ${className} ${
    hasBackgroundImage ? '' : 'bg-card'
  }`;

  const sharedStyle = hasBackgroundImage ? {
    backgroundImage: `url(${getBackgroundImage()})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  if (category === 'dining' || category === 'excursions' || category === 'spa' || category === 'entertainment' || category === 'beach') {
    return (
      <Link href={getNavigationPath()} className="h-full">
        <div 
          className={`${sharedClassName} cursor-pointer h-full`}
          style={sharedStyle}
          data-testid={`service-category-${category}`}
        >
          {content}
        </div>
      </Link>
    );
  }

  return (
    <div 
      className={sharedClassName}
      style={sharedStyle}
      data-testid={`service-category-${category}`}
    >
      {content}
    </div>
  );
}