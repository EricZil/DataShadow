import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20 bg-[#0A0E17] text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Protect Your Digital Identity
          </h1>
          <p className="text-xl mb-10 text-gray-400 leading-relaxed max-w-lg">
            DataShadow helps you monitor and protect your personal information from data breaches across the internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/scan" className="px-8 py-3.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)] font-medium text-base">
              Check Your Exposure
            </Link>
            <button className="px-8 py-3.5 bg-transparent border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 opacity-30 blur-md"></div>
            <div className="relative bg-[#151A24] p-5 rounded-lg shadow-lg border border-gray-800 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">datashadow.scan</div>
              </div>
              
              {/* Terminal content */}
              <div className="terminal-text">
                <p className="text-green-400 mb-4">$ initiating scan</p>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Checking databases:</span>
                    <span className="text-gray-400">50%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-yellow-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-300">Found: <span className="text-red-400 font-semibold">3 potential breaches</span></p>
                </div>
                
                <div className="flex items-center text-blue-400">
                  <span className="inline-block w-2 h-4 bg-blue-500 mr-2 animate-pulse"></span>
                  <span>Analyzing exposure level...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 