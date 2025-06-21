import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0E17] to-[#070A10] text-white pt-24 pb-10 mt-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/3 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/3 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-700"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-1500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content with premium grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand column - expanded width */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)] backdrop-blur-sm">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">DataShadow</span>
            </div>
            
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Protecting your digital identity in an increasingly vulnerable online world.
            </p>
            
            <div className="flex flex-col space-y-6">
              <a href="https://github.com/EricZil/DataShadow" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group w-fit">
                <div className="flex items-center space-x-3 group-hover:-translate-y-0.5 transition-transform">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111827]/80 backdrop-blur-sm border border-gray-800/50 group-hover:border-blue-500/50 transition-colors shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors font-medium">GitHub</span>
                </div>
              </a>
              
              <a href="https://summer.hack.club/qy" target="_blank" rel="noopener noreferrer" className="group w-fit">
                <div className="flex items-center space-x-3 group-hover:-translate-y-0.5 transition-transform">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all">
                    <Image unoptimized src="https://summer.hackclub.com/assets/flag-orpheus-top-5ae5e11b.png" alt="Hack Club" width={24} height={24} className="h-6 w-auto" />
                  </div>
                  <div>
                    <div className="text-white font-bold group-hover:text-white transition-colors">Summer of Making</div>
                    <div className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">Join the community!</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Links columns with premium styling */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {/* Product column */}
              <div>
                <h3 className="text-lg font-semibold mb-8 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Product
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors inline-block py-1 relative group">
                      Features
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1 relative group">
                      FAQ
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-900/30 text-blue-300 rounded-full border border-blue-800/50 backdrop-blur-sm">Soon</span>
                  </li>
                  <li className="flex items-center">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors inline-block py-1 relative group">
                      Documentation
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <span className="ml-2 px-2 py-0.5 text-xs bg-blue-900/30 text-blue-300 rounded-full border border-blue-800/50 backdrop-blur-sm">Soon</span>
                  </li>
                </ul>
              </div>
              
              {/* Legal column */}
              <div>
                <h3 className="text-lg font-semibold mb-8 flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Legal
                </h3>
                <ul className="space-y-5">
                  <li>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors inline-block py-1 relative group">
                      Terms of Service
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="text-gray-400 hover:text-white transition-colors inline-block py-1 relative group">
                      Privacy
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/security" className="text-gray-400 hover:text-white transition-colors inline-block py-1 relative group">
                      Security
                      <span className="absolute left-0 bottom-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 cursor-not-allowed inline-block py-1">
                      Compliance
                    </span>
                    <span className="ml-2 px-2 py-0.5 text-xs bg-red-900/30 text-red-300 rounded-full border border-red-800/50 backdrop-blur-sm">Unavailable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium divider with enhanced glow */}
        <div className="relative h-px w-full my-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm"></div>
        </div>
        
        {/* Bottom footer with premium styling */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} <span className="text-gray-400">DataShadow</span>. All rights reserved.</p>
          <p className="text-sm text-gray-600">Built with security and privacy in mind.</p>
        </div>
      </div>
    </footer>
  );
} 