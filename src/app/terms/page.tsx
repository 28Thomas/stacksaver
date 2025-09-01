import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';

export const metadata: Metadata = {
  title: 'Terms of Service - StackSaver',
  description: 'StackSaver Terms of Service. Read our terms and conditions for using our Chrome extension and services.',
  alternates: {
    canonical: 'https://stacksaver.io/terms',
  },
};

export default function TermsOfService() {
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
              <p className="text-sm text-green-600">Terms of Service</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-2xl">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> January 27, 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using StackSaver (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including our Chrome extension and website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    StackSaver is a Chrome extension that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Identifies and displays verified discounts for AI SaaS tools</li>
                    <li>Shows real-time savings opportunities when visiting supported websites</li>
                    <li>Provides transparent affiliate links to help users save money</li>
                    <li>Collects minimal usage data to improve service quality</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Eligibility</h2>
                  <p className="text-gray-700 leading-relaxed">
                    You must be at least 18 years old to use StackSaver. By using our service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Use StackSaver only for lawful purposes</li>
                    <li>Not attempt to reverse engineer or modify the extension</li>
                    <li>Not use automated tools to access our services</li>
                    <li>Respect the intellectual property rights of third-party services</li>
                    <li>Provide accurate information when subscribing to our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Affiliate Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed">
                    StackSaver may earn commissions when users activate offers through our extension. We are committed to transparency and only promote verified, legitimate discounts. Our affiliate relationships do not affect the quality or accuracy of the deals we present.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Our collection and use of your data is governed by our Privacy & Cookie Policy, which is incorporated into these terms by reference. We collect minimal data necessary to provide our service and improve user experience.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed">
                    StackSaver and its content, including but not limited to the extension, website, logos, and trademarks, are owned by us and protected by intellectual property laws. You may not copy, distribute, or create derivative works without our express permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    StackSaver is provided &quot;as is&quot; without warranties of any kind. We do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>The availability or accuracy of all discounts</li>
                    <li>That deals will always be the best available</li>
                    <li>Uninterrupted service or error-free operation</li>
                    <li>Compatibility with all browsers or devices</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    To the maximum extent permitted by law, StackSaver shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount you paid for our services, if any.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
                  <p className="text-gray-700 leading-relaxed">
                    StackSaver integrates with third-party services and websites. We are not responsible for the content, policies, or practices of these third parties. Your interactions with third-party services are governed by their respective terms of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may terminate or suspend your access to StackSaver at any time, with or without cause. You may also stop using our services at any time. Upon termination, your right to use StackSaver will cease immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these terms at any time. We will notify users of material changes by posting the updated terms on our website. Your continued use of StackSaver after changes become effective constitutes acceptance of the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law</h2>
                  <p className="text-gray-700 leading-relaxed">
                    These terms are governed by the laws of the Netherlands. Any disputes arising from these terms or your use of StackSaver shall be resolved in the courts of the Netherlands.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
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
