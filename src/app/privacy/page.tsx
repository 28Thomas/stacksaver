import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy - StackSaver',
  description: 'StackSaver Privacy & Cookie Policy. Learn how we collect, use, and protect your information when using our Chrome extension.',
  alternates: {
    canonical: 'https://stacksaver.io/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo size="sm" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">StackSaver</h1>
              <p className="text-sm text-green-600">Privacy & Cookie Policy</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-2xl">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy & Cookie Policy</h1>

              <p className="text-gray-600 mb-6">
                <strong>&quot;Last updated&quot;:</strong> August 31, 2025 {/* Updated for deployment */}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    StackSaver (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy & Cookie Policy explains how we collect, use, and safeguard your information when you use our Chrome extension and related services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect minimal information necessary to provide our service:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Email address:</strong> When you join our early access list</li>
                    <li><strong>Usage data:</strong> Basic analytics about extension usage (no personal data)</li>
                    <li><strong>Technical information:</strong> Browser type, extension version, and basic performance metrics</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use your information solely to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Send you updates about StackSaver launches and features</li>
                    <li>Improve our extension&apos;s performance and user experience</li>
                    <li>Provide customer support when needed</li>
                    <li>Ensure the security and integrity of our service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information only when required by law or to protect our rights and safety.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our extension uses minimal cookies and tracking:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Essential cookies:</strong> Required for basic functionality</li>
                    <li><strong>Analytics cookies:</strong> Help us understand usage patterns (anonymized)</li>
                    <li><strong>No tracking cookies:</strong> We don&apos;t track your browsing behavior</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy & Cookie Policy, please contact us at:
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <p className="text-green-800 font-medium">Email: thomas@stacksaver.io</p>
                    <p className="text-green-700 text-sm mt-1">We&apos;ll respond within 48 hours</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2">
              <span>←</span>
              <span>Back to StackSaver</span>
            </Link>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <Logo size="sm" />
                <p className="text-sm text-gray-500">© 2025 StackSaver. All rights reserved.</p>
              </div>
              <p className="text-sm text-gray-500">thomas@stacksaver.io</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
