import React from 'react';

const logos = [
  "Jasper", "Copy.ai", "Writesonic", "Grammarly", "Semrush", 
  "Ahrefs", "Canva", "Figma", "Notion", "Slack",
  "Zoom", "Miro"
];

const allLogos = [...logos, ...logos]; // Duplicate for seamless loop

export default function LogoCarousel() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-gray-500 font-semibold mb-8">
          FIND DEALS ON 20+ AI MARKETING TOOLS
        </h3>
        <div className="relative">
          <div 
            className="flex"
            style={{
              animation: 'scroll 30s linear infinite'
            }}
          >
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-20 flex items-center justify-center mx-4">
                <span className="text-2xl font-bold text-gray-400">{logo}</span>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}
