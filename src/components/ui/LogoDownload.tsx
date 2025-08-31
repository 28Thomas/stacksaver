"use client";

import React from 'react';
import { DollarSign } from 'lucide-react';

interface LogoDownloadProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showDownloadButton?: boolean;
}

export default function LogoDownload({ size = 'lg', className = '', showDownloadButton = true }: LogoDownloadProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const shapeSizes = {
    sm: 'w-12 h-12',
    md: 'w-18 h-18',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36'
  };

  const handleDownload = () => {
    // Create a canvas element to render the logo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size based on logo size
    const canvasSize = size === 'sm' ? 64 : size === 'md' ? 96 : size === 'lg' ? 128 : 192;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    
    if (ctx) {
      // Draw background (transparent)
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      
      // Calculate positions for the stacked shapes
      const shapeSize = size === 'sm' ? 48 : size === 'md' ? 72 : size === 'lg' ? 96 : 144;
      const offset = size === 'sm' ? 4 : size === 'md' ? 6 : size === 'lg' ? 8 : 12;
      
      // Draw bottom layer (light green)
      ctx.fillStyle = '#4ade80'; // green-400
      ctx.beginPath();
      ctx.roundRect(offset, offset, shapeSize, shapeSize, 8);
      ctx.fill();
      
      // Draw middle layer (medium green)
      ctx.fillStyle = '#22c55e'; // green-500
      ctx.beginPath();
      ctx.roundRect(offset/2, offset/2, shapeSize, shapeSize, 8);
      ctx.fill();
      
      // Draw top layer (dark green)
      ctx.fillStyle = '#15803d'; // green-700
      ctx.beginPath();
      ctx.roundRect(0, 0, shapeSize, shapeSize, 8);
      ctx.fill();
      
      // Draw dollar sign
      ctx.fillStyle = '#ffffff';
      ctx.font = `bold ${size === 'sm' ? 16 : size === 'md' ? 24 : size === 'lg' ? 32 : 48}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('$', shapeSize/2, shapeSize/2);
    }
    
    // Convert canvas to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `stacksaver-logo-${size}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
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
      
      {showDownloadButton && (
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
        >
          Download for Figma
        </button>
      )}
    </div>
  );
}
