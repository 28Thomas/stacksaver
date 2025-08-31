import React from 'react';
import { DollarSign } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const shapeSizes = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center ${className}`}>
      {/* Bottom Layer - Light Green */}
      <div className={`${shapeSizes[size]} bg-green-400 rounded-lg absolute transform translate-x-1 translate-y-1`}></div>
      
      {/* Middle Layer - Medium Green */}
      <div className={`${shapeSizes[size]} bg-green-500 rounded-lg absolute transform translate-x-0.5 translate-y-0.5`}></div>
      
      {/* Top Layer - Dark Green */}
      <div className={`${shapeSizes[size]} bg-green-700 rounded-lg absolute transform translate-x-0 translate-y-0`}></div>
      
      {/* Dollar Sign Icon - Centered on top layer */}
      <div className="absolute z-10 flex items-center justify-center">
        <DollarSign className={`${iconSizes[size]} text-white stroke-[3]`} />
      </div>
    </div>
  );
}
