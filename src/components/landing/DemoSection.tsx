import React from 'react';
import Logo from '@/components/ui/Logo';

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            See it in action (60s)
          </h2>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl">
              <div className="bg-black rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  {/* Browser Mockup */}
                  <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Browser Header */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-sm text-gray-600 ml-4">
                        writesonic.com
                      </div>
                    </div>
                    
                    {/* Page Content */}
                    <div className="p-8 bg-white">
                      <div className="max-w-4xl mx-auto">
                        {/* Writesonic Header */}
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-sm">W</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900">Writesonic</h1>
                          </div>
                          <div className="flex items-center gap-4">
                            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">Login</button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Start Free Trial
                            </button>
                          </div>
                        </div>
                        
                        {/* Hero Section */}
                        <div className="text-center mb-12">
                          <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            AI-Powered Content Creation
                          </h2>
                          <p className="text-xl text-gray-600 mb-8">
                            Create high-quality content in seconds with AI
                          </p>
                          <div className="flex justify-center gap-4">
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Get Started Free
                            </button>
                            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                              View Pricing
                            </button>
                          </div>
                        </div>
                        
                        {/* StackSaver Extension Popup */}
                        <div className="absolute top-20 right-8 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 w-80 animate-pulse">
                          <div className="flex items-center gap-3 mb-3">
                            <Logo size="sm" />
                            <div>
                              <h3 className="font-semibold text-gray-900">StackSaver</h3>
                              <p className="text-xs text-gray-500">Extension Active</p>
                            </div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-green-600">🎉</span>
                              <span className="font-semibold text-green-800">30% OFF</span>
                            </div>
                            <p className="text-sm text-green-700 mb-3">
                              Writesonic Pro Annual Plan
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
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              When you land on Writesonic, Jasper, or Grammarly, the extension instantly shows verified discounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
