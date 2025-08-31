import React from 'react';
import Image from 'next/image';

export default function SocialProofSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Built for marketers, by a marketer.
          </h2>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  {/* Profile Picture with Gradient Border */}
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-green-50 to-teal-100 p-2 shadow-xl">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <Image 
                          src="/profile-picture.jpeg" 
                          alt="Founder Profile" 
                          width={224}
                          height={224}
                          className="w-full h-full object-cover rounded-full"
                          style={{
                            objectPosition: 'center 20%'
                          }}
                        />
                        {/* Green Hue Overlay */}
                        <div className="absolute inset-0 bg-green-600 bg-opacity-25 rounded-full mix-blend-multiply"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-left lg:text-left space-y-6">
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    I&apos;m <strong>Thomas</strong>, an automation founder from the Netherlands. I built this tool after wasting too much time hunting coupons while testing AI SaaS.
                  </p>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    My promise: <strong className="text-green-600">transparent deals only, no tricks.</strong>
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="bg-green-50 px-4 py-2 rounded-full shadow-md border border-green-100">
                      <p className="text-sm font-medium text-green-700">🇳🇱 Netherlands</p>
                    </div>
                    <div className="bg-green-50 px-4 py-2 rounded-full shadow-md border border-green-100">
                      <p className="text-sm font-medium text-green-700">🚀 Automation Founder</p>
                    </div>
                    <div className="bg-green-50 px-4 py-2 rounded-full shadow-md border border-green-100">
                      <p className="text-sm font-medium text-green-700">💡 AI Marketing Expert</p>
                    </div>
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
