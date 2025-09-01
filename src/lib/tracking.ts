// Custom tracking utilities for landing page optimization
import { getAnalyticsData } from './cookies';

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  // Get cookie data for enhanced tracking
  const cookieData = typeof window !== 'undefined' ? getAnalyticsData() : null;
  
  // Combine properties with cookie data
  const enhancedProperties = {
    ...properties,
    ...(cookieData && {
      sessionId: cookieData.sessionId,
      hasConsent: cookieData.cookieConsent,
      preferredAiTool: cookieData.preferredAiTool,
      isReturningUser: !!cookieData.firstVisit && cookieData.firstVisit < new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
    }),
  };

  // Track with Vercel Analytics
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', { name: eventName, properties: enhancedProperties });
  }
  
  // Track with Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, enhancedProperties);
  }
  
  // Also log to console for development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Track Event:', eventName, enhancedProperties);
  }
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', { depth });
};

export const trackButtonClick = (buttonName: string, section?: string) => {
  trackEvent('button_click', { button: buttonName, section });
};

export const trackFormInteraction = (action: 'start' | 'complete' | 'error', formName: string, properties?: Record<string, unknown>) => {
  trackEvent('form_interaction', { action, form: formName, ...properties });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', { section: sectionName });
};

export const trackConversion = (type: string, value?: unknown) => {
  trackEvent('conversion', { type, value });
};

// Scroll depth tracking
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let maxScrollDepth = 0;
  const trackScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    if (scrollPercent > maxScrollDepth) {
      maxScrollDepth = scrollPercent;
      
      // Track at key milestones
      if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent);
      }
    }
  };

  window.addEventListener('scroll', trackScroll);
  return () => window.removeEventListener('scroll', trackScroll);
};

// Intersection Observer for section tracking
export const initSectionTracking = () => {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            trackSectionView(sectionName);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all sections with data-section attribute
  document.querySelectorAll('[data-section]').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};
