import React from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Logo size="lg" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  <span className="text-gray-900">Stack</span>
                  <span className="text-green-600 relative">
                    Saver
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full"></span>
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-green-600">Save on every tool</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
              The transparent Chrome extension that earns you cashback on AI SaaS signups. No tricks, no hidden fees.
            </p>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Contact</h4>
            <a 
              href="mailto:thomas@stacksaver.io" 
              className="text-sm sm:text-base text-gray-600 mb-4 hover:text-green-600 transition-colors duration-200"
            >
              thomas@stacksaver.io
            </a>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="#how-it-works" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-200">How It Works</a>
              <a href="#demo" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-200">See Demo</a>
              <a href="#early-access-form" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-200">Join Early Access</a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Legal</h4>
            <div className="space-y-2 sm:space-y-3">
              <Link href="/privacy" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-200">Privacy & Cookie Policy</Link>
              <Link href="/terms" className="block text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-600">© 2025 StackSaver. All rights reserved.</p>
            <div className="bg-green-100 px-3 py-1.5 sm:py-2 rounded-full">
              <p className="text-xs sm:text-sm font-medium text-green-700">🇳🇱 Made in Netherlands</p>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> StackSaver operates as an independent affiliate service. 
              See our <Link href="/terms" className="text-green-600 hover:text-green-700 underline">Terms of Service</Link> for complete details about our affiliate relationships and cashback program.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
