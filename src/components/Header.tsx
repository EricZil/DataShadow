import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-[#0A0E17]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <div className="bg-blue-500 w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
            </Link>
            <Link href="/" className="text-xl font-bold text-white">DataShadow</Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-10">
              <li><Link href="/scan" className="text-gray-300 hover:text-white transition-colors font-medium">Scan</Link></li>
              <li><Link href="/features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</Link></li>
              <li><Link href="/breaches" className="text-gray-300 hover:text-white transition-colors font-medium">Breaches</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors font-medium">How It Works</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">About</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="hidden sm:block px-6 py-2 rounded-full text-gray-500 cursor-not-allowed font-medium">
                Log in
              </button>
              <span className="absolute -top-6 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full shadow-md">Soon</span>
            </div>
            <div className="relative group">
              <button className="px-6 py-2 rounded-full bg-blue-800 text-gray-400 cursor-not-allowed font-medium shadow-lg">
                Sign up
              </button>
              <span className="absolute -top-6 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full shadow-md">Soon</span>
            </div>
            <button className="md:hidden text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 