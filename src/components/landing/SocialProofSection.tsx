import React from 'react';
import Image from 'next/image';

export default function SocialProofSection() {
  return (
    <section data-section="social_proof" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-8 sm:space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Built for SaaS users, by a SaaS founder.
          </h2>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                <div className="flex-shrink-0">
                  {/* Profile Picture with Gradient Border */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-green-50 to-teal-100 p-1.5 sm:p-2 shadow-xl">
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
                
                <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    I&apos;m <strong>Thomas</strong>, an automation founder from the Netherlands. I built this tool after wasting too much time hunting coupons while testing AI SaaS.
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    My promise: <strong className="text-green-600">share the commission with you as cashback, transparently.</strong>
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <div className="bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-green-100">
                      <p className="text-xs sm:text-sm font-medium text-green-700">🇳🇱 Netherlands</p>
                    </div>
                    <div className="bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-green-100">
                      <p className="text-xs sm:text-sm font-medium text-green-700">🚀 Automation Founder</p>
                    </div>
                    <div className="bg-green-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-md border border-green-100">
                      <p className="text-xs sm:text-sm font-medium text-green-700">💡 AI Vibe Coding</p>
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
