"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [aiTool, setAiTool] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    setMessageType('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          aiTool: aiTool.trim() || null 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setMessageType('success');
        setEmail('');
        setAiTool('');
      } else {
        setMessage(data.error);
        setMessageType('error');
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="early-access-form" className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Join the early access list
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Be the first to know when we launch. No spam, just updates.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="aiTool" className="block text-sm font-medium text-gray-700">
                      Which AI tool do you spend the most on? (optional)
                    </label>
                    <Input
                      id="aiTool"
                      type="text"
                      placeholder="e.g., Writesonic, Jasper, Grammarly"
                      value={aiTool}
                      onChange={(e) => setAiTool(e.target.value)}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {message && (
                  <div className={`p-4 rounded-lg ${
                    messageType === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Subscribing...' : 'Join Early Access'}
                </Button>

                <p className="text-sm text-gray-500 leading-relaxed">
                  We&apos;ll send you updates about StackSaver launches and features. 
                  You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
