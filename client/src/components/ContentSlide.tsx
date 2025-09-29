import { ReactNode } from 'react';

interface ContentSlideProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
}

export default function ContentSlide({ children, isActive, className = '' }: ContentSlideProps) {
  return (
    <div 
      className={`transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
      } ${className}`}
      data-testid={`content-slide-${isActive ? 'active' : 'inactive'}`}
    >
      {children}
    </div>
  );
}