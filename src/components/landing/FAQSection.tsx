"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does StackSaver work?",
    answer: "StackSaver is a Chrome extension that shows cashback opportunities when you visit AI SaaS websites. When you sign up through our tracked links, we earn affiliate commissions and share a percentage back with you as cashback."
  },
  {
    question: "How much cashback can I earn?",
    answer: "Cashback amounts vary by SaaS provider, typically ranging from $5-$50 per signup. StackSaver gives you the majority of our affiliate commission back as cashback. For most tools, that means 70–80% of what we earn goes back into your pocket."
  },
  {
    question: "When do I get paid?",
    answer: "Cashback is marked as 'pending' immediately after signup. It becomes 'confirmed' once the SaaS provider confirms your subscription (usually 30-90 days). You can withdraw confirmed cashback once you reach the $10 minimum threshold."
  },
  {
    question: "How do I withdraw my cashback?",
    answer: "You can withdraw confirmed cashback via PayPal or Stripe once you reach the $10 minimum threshold. We're working on automated payouts with lower thresholds and faster cycles for the future."
  },
  {
    question: "Do you track my browsing?",
    answer: "No, we don't track your browsing or personal data. StackSaver only activates on AI SaaS websites to show you relevant cashback opportunities. Your privacy is our priority."
  },
  {
    question: "Which AI tools do you support?",
    answer: "We support popular AI SaaS tools like WriteSonic, Jasper, Copy.ai, Grammarly, and many more. We're constantly adding new tools to our database."
  },
  {
    question: "When will StackSaver be available?",
    answer: "We're currently in development and will launch soon. Join our early access list to be the first to know when we're ready!"
  },
  {
    question: "Are you affiliated with the SaaS companies?",
    answer: "No, we are not affiliated with, endorsed by, or connected to any of the SaaS companies we promote. We are independent affiliates who earn commissions when users sign up through our tracked links. We do not represent these companies or their products."
  }
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about StackSaver
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
