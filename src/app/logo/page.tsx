import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import LogoDownload from '@/components/ui/LogoDownload';

export const metadata: Metadata = {
  title: 'Download StackSaver Logo - Brand Assets',
  description: 'Download StackSaver logo assets in different sizes for Figma, presentations, and design tools. High-quality PNG files with transparent backgrounds.',
  alternates: {
    canonical: 'https://stacksaver.io/logo',
  },
};

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">←</span>
              </div>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">StackSaver Logo</h1>
              <p className="text-sm text-gray-600">Download logo assets for Figma</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download StackSaver Logo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download the StackSaver logo in different sizes for use in Figma, presentations, or other design tools. 
              All logos are provided as high-quality PNG files with transparent backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Small Logo */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Small (64px)</h3>
              <LogoDownload size="sm" />
              <p className="text-sm text-gray-500 mt-2">Perfect for small icons</p>
            </div>

            {/* Medium Logo */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Medium (96px)</h3>
              <LogoDownload size="md" />
              <p className="text-sm text-gray-500 mt-2">Good for headers</p>
            </div>

            {/* Large Logo */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Large (128px)</h3>
              <LogoDownload size="lg" />
              <p className="text-sm text-gray-500 mt-2">Ideal for hero sections</p>
            </div>

            {/* Extra Large Logo */}
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Extra Large (192px)</h3>
              <LogoDownload size="xl" />
              <p className="text-sm text-gray-500 mt-2">For presentations</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">Usage Guidelines</h3>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Maintain the logo&apos;s aspect ratio when resizing</li>
              <li>• Keep clear space around the logo (at least 1/4 of the logo width)</li>
              <li>• Use on light backgrounds for best visibility</li>
              <li>• The logo represents StackSaver&apos;s commitment to saving money</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to StackSaver
            </Link>
            <p className="text-sm text-gray-500">© 2025 StackSaver. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
