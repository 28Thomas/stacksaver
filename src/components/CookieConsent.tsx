"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { setCookieConsent, getCookieConsent } from '../lib/cookies';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = getCookieConsent();
    console.log('Cookie consent check:', hasConsent); // Debug log
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    setCookieConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            We use cookies to improve your experience
          </h3>
          <p className="text-sm text-gray-600">
            We use cookies to remember your preferences, analyze site traffic, and personalize content. 
            By continuing to use our site, you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="text-sm"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="text-sm"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
