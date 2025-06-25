'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#0A0E17] to-[#070A10] text-white pt-20 pb-8 mt-auto relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-blue-500/4 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-blue-500/4 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-700"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-1500"></div>
      
      {/* Additional premium background effects */}
      <div className="absolute top-1/4 left-1/2 w-[20rem] h-[20rem] bg-indigo-500/3 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content with premium grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand column - expanded width */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)] backdrop-blur-sm group-hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-300">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">DataShadow</span>
            </Link>
            
            <p className="text-gray-400 max-w-md text-base leading-relaxed">
              Protecting your digital identity in an increasingly vulnerable online world.
            </p>
            
            <div className="flex flex-row space-x-4 pt-2">
              <a href="https://github.com/EricZil/DataShadow" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#111827]/90 to-[#1f2937]/50 backdrop-blur-sm border border-gray-800/50 group-hover:border-blue-500/50 transition-colors shadow-lg group-hover:-translate-y-1 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              
              <a href="https://summer.hack.club/qy" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-9 h-9 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all group-hover:-translate-y-1 duration-300">
                  <Image unoptimized src="https://summer.hackclub.com/assets/flag-orpheus-top-5ae5e11b.png" alt="Hack Club" width={20} height={20} className="h-5 w-auto" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Links columns with premium styling */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Pages column */}
              <div className="backdrop-blur-sm p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-lg">
                <h3 className="text-sm font-semibold mb-3 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Pages
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/features" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      Features
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/breaches" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      Breaches
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      How It Works
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      About
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Product column */}
              <div className="backdrop-blur-sm p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-lg">
                <h3 className="text-sm font-semibold mb-3 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Product
                </h3>
                <ul className="space-y-2.5">
                <li>
                    <Link href="/scan" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      Scan
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a href="/faq" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                        FAQ
                        <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="text-gray-500 cursor-not-allowed inline-block py-0.5 text-sm">
                        Documentation
                      </span>
                      <span className="ml-1.5 px-1.5 py-0.5 text-[10px]  bg-purple-400 text-purple-900 text-xs font-bold rounded-full shadow-md transform group-hover:scale-110 transition-transform cursor-help z-[100]">SoM Voting</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Legal column */}
              <div className="backdrop-blur-sm p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-lg">
                <h3 className="text-sm font-semibold mb-3 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Legal
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      Terms of Service
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      Privacy
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/security" className="text-gray-400 hover:text-white transition-colors inline-block py-0.5 text-sm relative group">
                      Security
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <span className="text-gray-500 cursor-not-allowed inline-block py-0.5 text-sm">
                        Compliance
                      </span>
                      <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-red-900/40 text-red-300 rounded-md border border-red-800/50 backdrop-blur-sm">Unavailable</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Status badge section - enhanced with card style */}
        <div className="mt-10 mb-8">
          <div className="inline-block backdrop-blur-md bg-gradient-to-br from-blue-900/10 to-blue-900/5 p-1 rounded-lg border border-blue-800/30 shadow-lg">
            <iframe 
              src="https://status.datashadow.eryxks.xyz/badge?theme=dark" 
              width="220" 
              height="26" 
              frameBorder="0" 
              scrolling="no" 
              style={{border: 'none', borderRadius: '0.375rem'}}
            ></iframe>
          </div>
        </div>
        
        {/* Premium divider with enhanced glow */}
        <div className="relative h-px w-full mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm"></div>
        </div>
        
        {/* Bottom footer with premium styling */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-sm py-3 px-4 rounded-xl bg-gradient-to-r from-white/[0.02] to-transparent border border-white/[0.03]">
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <p className="text-xs text-gray-500">© {currentYear} <span className="text-gray-300 font-medium">DataShadow</span>. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="h-3 w-3 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="h-1 w-1 rounded-full bg-blue-500"></span>
            </span>
            <p className="text-xs bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent font-medium">Built with security and privacy in mind.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 