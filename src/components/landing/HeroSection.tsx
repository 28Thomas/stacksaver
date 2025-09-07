"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Chrome, CheckCircle, Shield, Zap } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { trackButtonClick } from '@/lib/tracking';

export default function HeroSection() {
  const scrollToForm = () => {
    trackButtonClick('join_early_access', 'hero_section');
    document.getElementById('early-access-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-section="hero" className="py-20 lg:py-32 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Never overpay for{' '}
                <span className="text-green-600">AI marketing tools</span>{' '}
                again.
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                A tiny Chrome extension that shows real discounts the moment you visit an AI SaaS site.
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-200">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-200">Save money while testing AI tools.</p>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-200">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-200">One click to activate verified deals.</p>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-200">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-200">No shady redirects. 100% transparent.</p>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <Button 
                onClick={scrollToForm}
                className="px-8 py-4 text-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Join Early Access
              </Button>
              <p className="text-sm text-gray-500 leading-relaxed">
                We may earn commissions if you activate offers. No tracking, ever.
              </p>
            </div>
          </div>
          
          {/* Right Column - Browser Mockup with Extension Popup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-600 ml-4 flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    writesonic.com
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="p-6 bg-white">
                  <div className="max-w-4xl mx-auto">
                    {/* Simple Writesonic Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">W</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Writesonic</h1>
                      </div>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Start Free Trial
                      </button>
                    </div>
                    
                    {/* Simple Hero Section */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        AI-Powered Content Creation
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        Create high-quality content in seconds with AI
                      </p>
                    </div>
                    
                    {/* Simple Pricing */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-gray-900 mb-1">Starter</h3>
                        <p className="text-xl font-bold text-gray-900">$19<span className="text-sm text-gray-600">/mo</span></p>
                      </div>
                      <div className="border-2 border-blue-500 rounded-lg p-3 text-center bg-blue-50">
                        <h3 className="font-semibold text-gray-900 mb-1">Pro</h3>
                        <p className="text-xl font-bold text-gray-900">$39<span className="text-sm text-gray-600">/mo</span></p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3 text-center">
                        <h3 className="font-semibold text-gray-900 mb-1">Enterprise</h3>
                        <p className="text-xl font-bold text-gray-900">$99<span className="text-sm text-gray-600">/mo</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* StackSaver Extension Popup - Top Right */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 animate-slow-pulse">
                  <div className="flex items-center gap-3 mb-3">
                    <Logo size="sm" showText={true} />
                    <div>
                      <p className="text-xs text-gray-500">Extension Active</p>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-600">🎉</span>
                      <span className="font-semibold text-green-800">30% OFF</span>
                    </div>
                    <p className="text-sm text-green-700 mb-3">
                      Writesonic Pro Plan
                    </p>
                    <button className="w-full bg-green-600 text-white py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      Activate Deal
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    Verified discount • No tracking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
