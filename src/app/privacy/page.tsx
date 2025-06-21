import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Privacy Policy</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t want your data — that&apos;s the whole point. This policy explains what little info we do process (if any), and how we keep it private.
          </p>
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto bg-[#111827]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 mb-12 shadow-[0_0_50px_rgba(30,64,175,0.05)] hover:shadow-[0_0_50px_rgba(30,64,175,0.1)] transition-all duration-700">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">1</span>
                Introduction
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We&apos;re committed to protecting your privacy and designed our service with data minimization as a core principle.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                DataShadow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital identity protection service.
              </p>
              <p className="mb-4 text-gray-300">
                We take your privacy seriously and have designed our service with data minimization as a core principle. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">2</span>
                What Data We (Don&apos;t) Collect
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We collect minimal data. Your breach scans are anonymous, and we never see your full email or queries.
                </p>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.1 Breach Scans (Anonymous)</h3>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4">
                <p className="mb-4 text-gray-300">
                  When you run a scan:
                </p>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Your input (like email) is hashed locally and trimmed using k-anonymity
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Only the prefix (first 5 chars of hash) is sent to our backend
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    We never see, store, or log full emails or queries
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.2 Accounts (Coming Soon)</h3>
              <div className="p-6 bg-gradient-to-br from-[#0A1020] to-[#111827] rounded-lg border border-blue-900/30 mb-4">
                <p className="mb-4 text-gray-300">
                  If we add accounts later, we may store:
                </p>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Email address (encrypted at rest)
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Hashed password (using secure hashing)
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Your opt-in notification preferences
                  </li>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">3</span>
                How Your Info Is Used
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We only use your data to check for breaches and improve our service. We never sell your information.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                We use your data only to:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Check if your data appears in known breaches
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Provide you with breach notifications (if you opt in)
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Improve and optimize our services
                </li>
              </ul>
              <p className="mb-4 text-gray-300">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">4</span>
                Data Retention
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We maintain a strict no-logs policy for anonymous searches. Account data is retained until you delete it.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                For anonymous searches, we maintain a strict no-logs policy. For users with accounts:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Account information is retained until you delete your account
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  You can request deletion of your data at any time
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Breach notification data is retained only as long as necessary to provide the service
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">5</span>
                Security
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We use industry-standard encryption, no tracking, and open source transparency to protect your data.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  TLS 1.3 encryption in transit
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  AES-256 encryption at rest (for any stored data)
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  No tracking, no third-party analytics
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Open source frontend for transparency
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">6</span>
                Your Rights
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: You have rights to access, correct, delete, and control your data. Contact us to exercise these rights.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Right to access your data
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Right to correct inaccurate data
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Right to delete your data
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Right to restrict or object to processing
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Right to data portability
                </li>
              </ul>
              <p className="mb-4 text-gray-300">
                To exercise these rights, please contact us at <a href="mailto:eric@nezser.com" className="text-blue-400 hover:text-blue-300 transition-colors">eric@nezser.com</a>.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">7</span>
                Changes to This Policy
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We may update this policy and will notify you of any material changes.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
              <p className="mb-4 text-gray-300">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">8</span>
                Contact Us
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Questions about privacy? Contact eric@nezser.com
                </p>
              </div>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4 hover:border-blue-700/50 transition-colors duration-300">
                <p className="text-gray-300 mb-3">
                  If you have any questions about this Privacy Policy, please contact us at:
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