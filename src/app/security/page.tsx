import React from 'react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10] text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70 animation-delay-700"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link href="/" className="inline-flex items-center mb-8 group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] mr-3 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all">
              <span className="text-white font-bold text-lg">DS</span>
            </div>
            <span className="text-xl font-bold text-white">DataShadow</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Security</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            How we protect your data and maintain the highest security standards
          </p>
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto bg-[#111827]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 mb-12 shadow-[0_0_50px_rgba(30,64,175,0.05)] hover:shadow-[0_0_50px_rgba(30,64,175,0.1)] transition-all duration-700">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">1</span>
                Our Security Philosophy
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Security isn&apos;t optional—it&apos;s the base layer. Built by one privacy-obsessed dev.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                Security isn&apos;t just another feature—it&apos;s the base. Built solo during Hack Club&apos;s Summer of Making, DataShadow was created with a privacy-first mindset and zero compromise on data protection, even without a big team or budget.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">2</span>
                K-Anonymity and Partial Data Hashing
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We use k-anonymity to protect your privacy. Your complete data never leaves your device.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                Our core technology leverages k-anonymity principles to protect your privacy:
              </p>
              
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-blue-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Prefix Extraction:</span>
                      <span className="text-gray-300"> When you enter your email or other personal data, we extract only a partial prefix (e.g., first few characters).</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-blue-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Secure Hashing:</span>
                      <span className="text-gray-300"> This prefix is then cryptographically hashed using SHA-256.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-blue-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">K-Anonymity Search:</span>
                      <span className="text-gray-300"> We search for this hash prefix in our breach database, returning only k-anonymized results where multiple potential matches exist.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-blue-400 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <span className="font-medium text-white">Client-Side Verification:</span>
                      <span className="text-gray-300"> Final matching is performed in your browser, so complete data never leaves your device.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="mb-4 text-gray-300">
                This approach ensures that:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Your complete personal information is never stored on our servers
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  We maintain plausible deniability about which specific records you&apos;re searching for
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Even in the event of a breach of our systems, attackers cannot reconstruct your original data
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">3</span>
                Infrastructure Security
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Encrypted everywhere. No tracking. No enterprise budget.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors duration-300">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Encryption</h3>
                      <p className="text-gray-400">
                        TLS 1.3 is used for all in-transit data, AES-256 for data at rest.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors duration-300">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">DDoS Protection</h3>
                      <p className="text-gray-400">
                        Basic protection is enabled via services like Cloudflare.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors duration-300">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Regular Audits</h3>
                      <p className="text-gray-400">
                        Pen-testing and audits are done using open-source tools and community support.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30 hover:border-blue-700/50 transition-colors duration-300">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Monitoring</h3>
                      <p className="text-gray-400">
                        Currently limited, but enhanced open-source monitoring is planned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">4</span>
                Authentication & Access Control
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Secure passwords, optional 2FA, no-nonsense access policies—even solo.
                </p>
              </div>
              <ul className="list-none pl-0 mb-6 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-white">Multi-Factor Authentication:</span>
                    <span className="text-gray-300"> Optional 2FA for all user accounts using TOTP or WebAuthn.</span>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-white">Password Security:</span>
                    <span className="text-gray-300"> Passwords are hashed using Argon2id with appropriate memory, iterations, and parallelism.</span>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-white">Session Management:</span>
                    <span className="text-gray-300"> Short-lived, rotating session tokens with strict invalidation policies.</span>
                  </div>
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-white">Principle of Least Privilege:</span>
                    <span className="text-gray-300"> Internal access controls follow strict need-to-know principles—even if it’s mostly just me.</span>
                  </div>
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">5</span>
                Open Source Security
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Frontend is open source. Backend is closed (for now) due to breach data sensitivity.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                Transparency matters. That’s why the frontend code is fully open source and available on GitHub. The backend is not public (yet) since it handles sensitive breach data. Still, I’ll document how key processes work—privacy deserves clarity.
              </p>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-6 flex items-center justify-between hover:border-blue-700/50 transition-colors duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">View Our Source Code</h3>
                </div>
                <a href="https://github.com/datashadow/core" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  GitHub Repository
                </a>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">6</span>
                Bug Bounty Program
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: No budget, no bounty—just gratitude. Still, please report any security bugs.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                I don’t run a formal bounty program (yet), but I welcome responsible disclosures.
              </p>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold text-white mb-3">Responsible Disclosure Guidelines</h3>
                <p className="text-gray-400 mb-4">
                  To report a vulnerability, please email <span className="text-blue-400">eric@nezser.com</span> with details of the issue.
                </p>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start text-gray-400">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Include steps to reproduce the vulnerability
                  </li>
                  <li className="flex items-start text-gray-400">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Provide proof-of-concept code (if available)
                  </li>
                  <li className="flex items-start text-gray-400">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Allow reasonable time for patching before public disclosure
                  </li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">7</span>
                Compliance & Certifications
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Built with GDPR/CCPA principles. No paid certs (yet), just real protections
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                We adhere to industry-standard security frameworks and maintain compliance with relevant regulations:
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">We follow the spirit of GDPR and CCPA:</h3>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Data minimization and privacy by design
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Right to deletion and data control
                </li>
                <h3 className="text-lg font-semibold text-white mb-3">No Formal Certs Yet:</h3>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  SOC 2 / ISO 27001: Currently not certified due to budget (coming soon if feasible)
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  NIST CSF: Key parts of the framework are followed where applicable
                </li>
              </ul>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4 hover:border-blue-700/50 transition-colors duration-300">
                <p className="text-gray-300 mb-3">
                  If formal certifications become available, they’ll be listed here. For questions, contact:
                </p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-400 font-medium">eric@nezser.com</span>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        {/* Last updated */}
        <div className="text-center text-gray-500 text-sm mb-8 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Last Updated: June 22, 2025
        </div>
        
        {/* Back to home */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
            <span>Return to Homepage</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 