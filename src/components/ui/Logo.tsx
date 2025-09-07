import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export default function Logo({ size = 'md', className = '', showText = false }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32
  };

  const LogoIcon = () => (
    <svg 
      width={iconSizes[size]} 
      height={iconSizes[size]} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M44.3605 32.0502L47.3884 33.6975C47.9849 34.022 48.1781 34.7234 47.8204 35.2642C47.7138 35.425 47.5657 35.5595 47.3884 35.6558L25.2958 47.6743C24.4984 48.1085 23.5016 48.1085 22.7042 47.6743L0.611637 35.6558C0.0152077 35.3314 -0.178191 34.63 0.17966 34.0892C0.286032 33.9284 0.434362 33.7939 0.611637 33.6975L3.63953 32.0502L24.0001 43.1266L44.3605 32.0502ZM44.3605 21.3164L47.3884 22.9637C47.9849 23.2882 48.1781 23.9896 47.8204 24.5304C47.7138 24.6912 47.5657 24.8257 47.3884 24.922L24.0001 37.6455L0.611637 24.922C0.0152077 24.5975 -0.178191 23.8961 0.17966 23.3554C0.286032 23.1946 0.434362 23.06 0.611637 22.9637L3.63953 21.3164L24.0001 32.3928L44.3605 21.3164Z" fill="#16803C"/>
      <path d="M25.2958 0.325443L47.3884 12.344C47.9849 12.6685 48.1781 13.37 47.8204 13.9107C47.7138 14.0715 47.5657 14.206 47.3884 14.3024L24.0001 27.0259L0.611637 14.3024C0.0152077 13.9779 -0.178191 13.2765 0.17966 12.7357C0.286032 12.575 0.434362 12.4405 0.611637 12.344L22.7042 0.325443C23.5016 -0.108481 24.4984 -0.108481 25.2958 0.325443ZM24.0001 4.94715L8.60318 13.3232L24.0001 21.6994L39.3969 13.3232L24.0001 4.94715Z" fill="#49DE80"/>
    </svg>
  );

  if (showText) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoIcon />
        <span className={`font-bold ${textSizes[size]} font-sans`}>
          <span className="text-gray-900">Stack</span>
          <span className="text-green-600">Saver</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} flex items-center justify-center ${className}`}>
      <LogoIcon />
    </div>
  );
}
