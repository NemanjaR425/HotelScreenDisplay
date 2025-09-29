import { Utensils, ShoppingBag, MapPin, Music, Waves } from 'lucide-react';

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

  return (
    <div 
      className={`bg-card border border-card-border rounded-lg flex flex-col items-center justify-center p-6 hover-elevate ${className}`}
      data-testid={`service-category-${category}`}
    >
      <div className="text-primary mb-4">
        {getCategoryIcon()}
      </div>
      <h3 className="text-2xl font-medium text-card-foreground text-center" data-testid={`text-category-${category}`}>
        {title}
      </h3>
    </div>
  );
}