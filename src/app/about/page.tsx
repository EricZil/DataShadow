import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10]">
      <Header />
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-700"></div>
      
      {/* Hero section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About DataShadow</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8">
              Built during Hack Club&apos;s Summer of Making to protect your digital identity in an increasingly vulnerable online world.
            </p>
          </div>
        </div>
      </section>
      
      {/* Origin story section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>
                
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] mr-4">
                    <Image 
                      unoptimized 
                      src="https://summer.hackclub.com/assets/flag-orpheus-top-5ae5e11b.png" 
                      alt="Hack Club" 
                      width={32} 
                      height={32} 
                      className="h-8 w-auto" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Hack Club</h3>
                    <p className="text-red-400">Summer of Making 2023</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  DataShadow was born during Hack Club&apos;s Summer of Making, a global initiative that empowers students to build and launch projects that matter.
                </p>
                
                <a 
                  href="https://summer.hack.club" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>Learn more about Summer of Making</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                DataShadow began as an ambitious project during Hack Club&apos;s Summer of Making, where a team of privacy-focused developers came together to address the growing threat of data breaches and identity theft.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Inspired by the community&apos;s emphasis on building technology that matters, we created a tool that would make advanced privacy protection accessible to everyone, not just those with technical backgrounds.
              </p>
              <p className="text-lg text-gray-300">
                What started as a summer project has evolved into a comprehensive platform dedicated to protecting digital identities through innovative, privacy-preserving technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-gray-300">
              We believe privacy is a fundamental right that shouldn&apos;t require technical expertise to protect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Privacy by Design</h3>
              <p className="text-gray-300">
                We implement privacy protection at every level, from our k-anonymity search technology to our zero-knowledge architecture.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Open Source</h3>
              <p className="text-gray-300">
                In the spirit of Hack Club, our codebase is open source, allowing anyone to verify our security practices and privacy claims.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all group">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Community Driven</h3>
              <p className="text-gray-300">
                Built by and for the community, we&apos;re committed to creating tools that empower individuals to take control of their digital identities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built by the Community</h2>
              <p className="text-lg text-gray-300 mb-6">
                DataShadow is more than just a project—it&apos;s a community effort. We&apos;re proud to be part of the Hack Club ecosystem, where students and developers collaborate to build meaningful technology.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                The Summer of Making provided us with the resources, mentorship, and community support needed to transform our idea into reality. Through collaborative coding sessions, design reviews, and feedback from privacy experts, we&apos;ve created a tool that truly serves its users.
              </p>
              <p className="text-lg text-gray-300">
                Today, we continue to embrace the Hack Club ethos of learning by building and sharing knowledge openly with others.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-900/30 overflow-hidden shadow-[0_0_25px_rgba(59,130,246,0.1)]">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Join Our Community</h3>
                      <p className="text-gray-400">Collaborate with privacy advocates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Contribute Code</h3>
                      <p className="text-gray-400">Help improve our open source project</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Spread the Word</h3>
                      <p className="text-gray-400">Help us reach more people</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">DataShadow&apos;s Family</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Meet the developer behind DataShadow.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-start-2 md:col-span-1 group">
              <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 overflow-hidden relative mb-4 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                    <Image 
                      unoptimized
                      src="https://avatars.githubusercontent.com/u/71651253?s=400&u=71900a8b81ab8a7d068c20f1472efae7c5fbce70&v=4" 
                      alt="Eric Zilvytis"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white text-center">Eric Zilvytis</h3>
                  <p className="text-blue-400 mb-4 text-center">CEO & CTO</p>
                  <p className="text-gray-400 text-center">Summer of Making participant and passionate about privacy.</p>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We&apos;re building a future where privacy is respected and protected by default. Be part of the change.
              </p>
              <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
                <span>Get Started</span>
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