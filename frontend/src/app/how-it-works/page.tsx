import React from 'react';
import Link from 'next/link';
import ComingSoonBadge from '../../components/ComingSoonBadge';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HowItWorks() {
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
              <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  How It Works
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mb-8 md:mx-0 mx-auto"></div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  DataShadow helps you check if your info&apos;s been leaked — without revealing it.<br />
                  We hash your email, use a k-anonymity method, and never store anything.<br />
                  Simple, private, and fast. No shady stuff.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link href="/scan" className="px-8 py-3.5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)] font-medium text-base">
                    Try a Scan
                  </Link>
                  <Link href="/features" className="px-8 py-3.5 bg-transparent border border-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-base">
                    See Features
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
                        <div className="text-blue-400 font-bold text-lg">0%</div>
                        <div className="text-gray-400 text-sm">Data Stored</div>
                      </div>
                    </div>
                    <div className="h-32 bg-gradient-to-br from-[#1a2035] to-[#1f2937] rounded-xl flex items-center justify-center p-4 transform hover:scale-105 transition-transform shadow-lg">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="text-gray-300 text-sm">K-Anonymity</div>
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
                        <div className="text-blue-400 font-bold text-lg">100%</div>
                        <div className="text-gray-400 text-sm">Private</div>
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
      
      {/* Overview section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Privacy by Design</h2>
              <p className="text-lg text-gray-300 mb-6">
              DataShadow was built with one goal: don&apos;t leak your info while checking for leaks.
              <br />
              No logins, no data storage, no tracking. Your email is hashed and checked using k-anonymity, so nothing sensitive ever touches the server directly.
              </p>
              <p className="text-lg text-gray-300">
              You get answers — we keep nothing.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)]">
                <div className="bg-gradient-to-br from-blue-400/20 to-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Core Principles</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-400 font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Zero Logging</h4>
                      <p className="text-gray-300">We don&apos;t store or track your queries. Ever.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-400 font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">K-Anonymity</h4>
                      <p className="text-gray-300">Only a fragment of your hashed input is sent — your full data stays private.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-400 font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Transparent by Default</h4>
                      <p className="text-gray-300">Frontend is open source. Backend isn&apos;t (yet), but we&apos;ll keep you informed.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How it works steps */}
      <section className="py-16 md:py-24 relative bg-[#080C14] overflow-visible">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">The DataShadow Process</h2>
          
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 relative group overflow-visible">
            <div className="order-2 md:order-1">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-400 font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Privacy-Preserving Scans</h3>
              <p className="text-lg text-gray-300 mb-6">
                When you scan, your email is hashed and partially sent — not the whole thing.
                This k-anonymity trick means we never see your full address, and we never store anything.
              </p>
              <p className="text-lg text-gray-300">
                You get breach results. We get… nothing.
              </p>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)]">
                <div className="bg-[#0A0E17]/70 p-4 rounded-xl border border-blue-900/30 mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-500/10 rounded-md p-2 text-blue-300 font-mono text-sm">
                      &gt; Processing scan request...
                    </div>
                    <div className="bg-blue-500/10 rounded-md p-2 text-blue-300 font-mono text-sm">
                      &gt; Applying k-anonymity model
                    </div>
                    <div className="bg-blue-500/10 rounded-md p-2 text-blue-300 font-mono text-sm">
                      &gt; Bundling with anonymous queries
                    </div>
                    <div className="bg-blue-500/10 rounded-md p-2 text-blue-300 font-mono text-sm">
                      &gt; Checking breach databases...
                    </div>
                    <div className="bg-green-500/10 rounded-md p-2 text-green-300 font-mono text-sm">
                      &gt; Scan complete: Privacy maintained
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24 relative group overflow-visible">
            <ComingSoonBadge className="z-50" />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)] h-full">
                <div className="bg-[#0A0E17]/70 p-4 rounded-xl border border-blue-900/30">
                  <div className="flex justify-between items-center mb-4 border-b border-blue-900/30 pb-2">
                    <div className="text-white font-medium">Data Breach Monitor</div>
                    <div className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded">Active</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <div className="text-gray-300 text-sm">Email: ****@*****.com</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <div className="text-gray-300 text-sm">Phone: ***-***-1234</div>
                      <div className="ml-auto text-yellow-400 text-xs">1 exposure</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <div className="text-gray-300 text-sm">Username: ********</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      <div className="text-gray-300 text-sm">Password: *********</div>
                      <div className="ml-auto text-red-400 text-xs">3 exposures</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <span className="text-blue-400 font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Continuous Data Breach Monitoring</h3>
              <p className="text-lg text-gray-300 mb-6">
                This isn&apos;t live yet — but eventually, DataShadow will let you opt in to ongoing checks for new breaches tied to your email.
              </p>
              <p className="text-lg text-gray-300">
                No spam, no creepy tracking — just a heads-up if your info pops up somewhere shady.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What Powers DataShadow</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tech 1 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">SHA-1 Hashing + K-Anonymity</h3>
              <p className="text-gray-300">
                Your input gets hashed and trimmed so we never see the full thing — no storage, no tracking.
              </p>
            </div>
            
            {/* Tech 2 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Frontend</h3>
              <p className="text-gray-300">
                Built with modern web tools like Next.js & Tailwind. Fast, minimal, and responsive.
              </p>
            </div>
            
            {/* Tech 3 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all">
              <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Backend</h3>
              <p className="text-gray-300">
                Handles encrypted breach data. Not open source (yet) because, well… leaks contain leaks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-900/30 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join the Chaos (Mission*)</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Building a more private internet — one sketchy breach at a time.
                Jump in or just cheer from the sidelines. 🫡
              </p>
              <Link href="/scan" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
                <span>Start a Free Scan</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 