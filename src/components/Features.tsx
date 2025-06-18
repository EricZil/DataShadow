import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0A0E17] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20 tracking-tight">How DataShadow Protects You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Breach Detection */}
          <div className="p-8 bg-[#111827] rounded-2xl border border-gray-800 relative hover:border-blue-500/30 transition-colors group">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-[#1a2035] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="text-center pt-12">
              <h3 className="text-xl font-bold mb-4 text-white">Breach Detection</h3>
              <p className="text-gray-400 leading-relaxed">
                Scan billions of leaked records to find if your personal data has been compromised.
              </p>
            </div>
          </div>
          
          {/* Real-time Alerts */}
          <div className="p-8 bg-[#111827] rounded-2xl border border-gray-800 relative hover:border-blue-500/30 transition-colors group">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-[#1a2035] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>
            
            <div className="text-center pt-12">
              <h3 className="text-xl font-bold mb-4 text-white">Real-time Alerts</h3>
              <p className="text-gray-400 leading-relaxed">
                Receive immediate notifications when your information appears in new data breaches.
              </p>
            </div>
          </div>
          
          {/* Protection Tips */}
          <div className="p-8 bg-[#111827] rounded-2xl border border-gray-800 relative hover:border-blue-500/30 transition-colors group">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 bg-[#1a2035] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            <div className="text-center pt-12">
              <h3 className="text-xl font-bold mb-4 text-white">Protection Tips</h3>
              <p className="text-gray-400 leading-relaxed">
                Get personalized recommendations to secure your accounts and protect your identity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="h-1 w-full max-w-xs mx-auto mt-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
    </section>
  );
} 