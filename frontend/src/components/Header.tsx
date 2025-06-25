'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SoMVotingBadge from './SoMVotingBadge';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`sticky top-0 py-5 px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#090D15]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
        : 'bg-[#0A0E17]'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <Link href="/" className="block">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] group-hover:scale-105">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
            </Link>
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-white transition-all duration-300">DataShadow</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {[
                { name: 'Data Scan', href: '/scan' },
                { name: 'Password Check', href: '/passwords' },
                { name: 'Features', href: '/features' },
                { name: 'Breaches', href: '/breaches' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'About', href: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === item.href 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative group hidden sm:block">
              <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/50 text-gray-500 cursor-not-allowed font-medium border border-gray-800/50 shadow-md backdrop-blur-sm transition-all duration-300">
                Log in
              </button>
              <SoMVotingBadge />
            </div>
            <div className="relative group">
              <button className="px-6 py-2 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-gray-400 cursor-not-allowed font-medium shadow-lg border border-blue-500/20 transition-all duration-300">
                Sign up
              </button>
              <SoMVotingBadge />
            </div>
            <button className="md:hidden text-gray-300 bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/50 p-2 rounded-lg border border-gray-700/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 