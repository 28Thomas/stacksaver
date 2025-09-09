"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

export default function DemoSection() {
  const [loomVisible, setLoomVisible] = useState(false);
  const [loomKey, setLoomKey] = useState(0);
  const demoSectionRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    setLoomVisible(true);
    setLoomKey(prev => prev + 1);
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoomVisible(true);
            setLoomKey((k) => k + 1);
          } else {
            setLoomVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (demoSectionRef.current) {
      observer.observe(demoSectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white" ref={demoSectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
          See It In Action
        </h2>
        <div className="overflow-hidden shadow-2xl rounded-lg sm:rounded-xl">
          <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
            {!loomVisible ? (
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  background: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer' 
                }}
                onClick={handlePlayClick}
              >
                <img
                  src="https://cdn.loom.com/sessions/thumbnails/30e5498ccb4c42daa6e1cd1a62ec53d6.jpg"
                  alt="Loom video thumbnail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  background: 'rgba(0,0,0,0.5)', 
                  borderRadius: '50%', 
                  padding: 16 
                }}>
                  <Play color="#fff" size={48} />
                </div>
              </div>
            ) : (
              <iframe
                key={loomKey}
                src="https://www.loom.com/embed/30e5498ccb4c42daa6e1cd1a62ec53d6?sid=950af38b-5ca4-4a5c-84b2-7a9a6093997b&hideEmbedTopBar=true&autoplay=1&t=0s&muted=false"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            )}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-6 sm:mt-8">
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center">
            When you visit Writesonic, Jasper, or Grammarly, the extension shows cashback opportunities for signups through our tracked links.
          </p>
        </div>
      </div>
    </section>
  );
}
