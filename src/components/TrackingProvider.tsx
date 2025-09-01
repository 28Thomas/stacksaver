"use client";

import { useEffect } from 'react';
import { initScrollTracking, initSectionTracking } from '@/lib/tracking';
import { trackFirstVisit } from '@/lib/cookies';

export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track first visit
    trackFirstVisit();
    
    // Initialize scroll tracking
    const cleanupScroll = initScrollTracking();
    
    // Initialize section tracking with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initSectionTracking();
    }, 100);

    return () => {
      cleanupScroll?.();
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
