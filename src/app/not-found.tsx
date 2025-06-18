'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen h-screen w-screen overflow-hidden bg-gradient-to-b from-[#0A0E17] to-[#070A10] flex flex-col items-center justify-center px-4 text-white relative">
      {/* Background elements - contained within viewport */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Subtle grid background - contained within viewport */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'linear-gradient(#0e4166 1px, transparent 1px), linear-gradient(90deg, #0e4166 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)] backdrop-blur-sm mb-8">
            <span className="text-white font-bold text-2xl">DS</span>
          </div>
          
          {/* Error code with gradient */}
          <div className="relative mb-6">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">404</h1>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          
          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Page Not Found</h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg text-center mb-8 md:mb-12">
            We couldn't find the page you're looking for.
          </p>
          
          {/* Security card - more compact on mobile */}
          <div className="bg-[#111827]/60 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-blue-900/30 mb-8 md:mb-10 w-full max-w-lg">
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="bg-blue-500/20 rounded-full p-1.5 md:p-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Your Connection is Secure</h3>
                <p className="text-sm md:text-base text-gray-400">
                  DataShadow is still protecting your digital identity. Your data remains safe.
                </p>
              </div>
            </div>
          </div>
          
          {/* Action button */}
          <Link href="/" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-base md:text-lg shadow-lg hover:shadow-xl transition-colors">
            <span>Return to Homepage</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}