import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ComingSoonBadge from '../../components/ComingSoonBadge';

export default function Features() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10] overflow-hidden">
      <Header />
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-700"></div>
      
      {/* Hero section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Premium Features for <span className="text-blue-400">Ultimate Protection</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mb-8"></div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Tools built to help you stay private, stay safe, and stay in control — no tech degree required.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/scan" className="px-8 py-3.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)] font-medium text-base">
                    Try It Now
                  </Link>
                  <Link href="/how-it-works" className="px-8 py-3.5 bg-transparent border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-base">
                    How It Works
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-24 bg-gradient-to-br from-[#1a2035] to-[#1f2937] rounded-xl flex items-center justify-center p-4 transform hover:scale-105 transition-transform shadow-lg">
                      <div className="text-center">
                        <div className="text-blue-400 font-bold text-lg">100%</div>
                        <div className="text-gray-400 text-sm">Secure</div>
                      </div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-[#1a2035] to-[#1f2937] rounded-xl flex items-center justify-center p-4 transform hover:scale-105 transition-transform shadow-lg">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="text-gray-300 text-sm">Advanced Protection</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-gradient-to-br from-[#1a2035] to-[#1f2937] rounded-xl flex items-center justify-center p-4 transform hover:scale-105 transition-transform shadow-lg">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div className="text-gray-300 text-sm">Breach Detection</div>
                      </div>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-[#1a2035] to-[#1f2937] rounded-xl flex items-center justify-center p-4 transform hover:scale-105 transition-transform shadow-lg">
                      <div className="text-center">
                        <div className="text-blue-400 font-bold text-lg">24/7</div>
                        <div className="text-gray-400 text-sm">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features section */}
      <section className="py-16 md:py-24 relative overflow-visible">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Key Features</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Cutting-edge tools designed to protect your digital identity with enterprise-grade security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 overflow-visible">
            {/* Feature 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/90 to-[#1f2937]/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-500 h-full">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">Data Breach Scanning</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  Our core feature allows you to scan for your personal information across billions of breached records, using privacy-preserving techniques.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Anonymous and secure scanning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Comprehensive database of known breaches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Instant results on your exposure</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/90 to-[#1f2937]/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-500 h-full">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">Continuous Monitoring & Alerts</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  Our systems will continuously monitor for new breaches and send you real-time alerts if your information is compromised.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time alerts for potential exposures</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Detailed reports on affected services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Guided remediation steps</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/90 to-[#1f2937]/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 shadow-[0_0_25px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-all duration-500 h-full">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">Password Check</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  Check if your passwords have been compromised in known data breaches and receive alerts for vulnerable credentials.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Scan against massive breach database</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Get notified of pwned passwords</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Securely check without exposing passwords</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 shadow-[0_0_25px_rgba(59,130,246,0.1)] h-full">
                <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m-9 4h12M3 7h18M4 7h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Privacy Dashboard</h3>
                <p className="text-gray-300 mb-6">
                  A centralized dashboard to view your exposure, manage alerts, and get actionable insights to enhance your privacy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Visual privacy score</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Progress tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 shadow-[0_0_25px_rgba(59,130,246,0.1)] h-full">
                <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 009 9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Domain Check</h3>
                <p className="text-gray-300 mb-6">
                  Monitor your entire domain for compromised email accounts in data breaches.
                </p>
                 <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Domain-wide breach monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Protect all employee accounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Prevent supply chain attacks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features section */}
      <section className="py-16 md:py-24 relative bg-[#080C14]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Additional Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8 overflow-visible">
            {/* Feature card 1 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Disposable Email Aliases</h3>
              <p className="text-gray-300">
                Create unlimited email aliases to protect your primary email address from spam and tracking.
              </p>
            </div>
            
            {/* Feature card 2 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Automated Privacy Scans</h3>
              <p className="text-gray-300">
                Regular scans of your digital presence to identify and address privacy vulnerabilities.
              </p>
            </div>
            
            {/* Feature card 3 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all relative group overflow-visible">
              <ComingSoonBadge className="z-50" />
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Multi-Factor Authentication</h3>
              <p className="text-gray-300">
                Enhanced account security with multiple authentication methods to protect your DataShadow account.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/90 to-[#1f2937]/90 backdrop-blur-sm p-12 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.2)]">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to Secure Your Digital Identity?</h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Take control of your online presence today and protect yourself from data breaches with DataShadow.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/scan" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)] font-medium text-lg">
                      Start Your Free Scan
                    </Link>
                    <Link href="/how-it-works" className="px-8 py-4 bg-transparent border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-lg">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 