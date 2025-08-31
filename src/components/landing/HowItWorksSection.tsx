import React from 'react';
import { Download, Globe2, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: "Install the free Chrome extension",
    description: "Quick 1-click install from the Chrome Web Store. No account required."
  },
  {
    icon: Globe2,
    title: "Visit an AI marketing tool website",
    description: "Browse any of the 20+ supported AI marketing SaaS tools as you normally would."
  },
  {
    icon: Sparkles,
    title: "See discount → Activate Deal",
    description: "Our extension shows available discounts instantly. Click to activate and save on your subscription."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How it works in 3 simple steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 z-10">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}

              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
