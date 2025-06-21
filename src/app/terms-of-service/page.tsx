import React from 'react';
import Link from 'next/link';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">Terms of Service</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Please read these terms carefully before using our service.
          </p>
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto bg-[#111827]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 mb-12 shadow-[0_0_50px_rgba(30,64,175,0.05)] hover:shadow-[0_0_50px_rgba(30,64,175,0.1)] transition-all duration-700">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">1</span>
                Agreement to Terms
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: By using DataShadow, you agree to these terms. If you don&apos;t agree, don&apos;t use the service.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                By accessing or using DataShadow (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the Terms, you may not access the Service.
              </p>
              <p className="mb-4 text-gray-300">
                These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">2</span>
                Service Description
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: DataShadow helps protect your digital identity using privacy-first breach detection.
                </p>
              </div>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4">
                <p className="text-gray-300">
                  DataShadow is a digital identity protection tool built around k-anonymity and client-side verification. It lets users check if their data has been exposed in breaches—without ever handing over full personal information. No tracking, no storage, no compromises.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">3</span>
                User Accounts
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: If you make an account, keep it accurate and secure. You&apos;re responsible for it.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                If you choose to create an account, you must provide accurate, up-to-date information. Failure to do so may result in suspension or termination of your access.
              </p>
              <p className="mb-4 text-gray-300">
                You&apos;re responsible for all activity under your account. Don&apos;t share your password. If you suspect unauthorized use, notify us immediately.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">4</span>
                Intellectual Property
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Content and branding belong to DataShadow. Don&apos;t copy or misuse it.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                All content, logos, and code (unless otherwise open sourced) belong to DataShadow. Unauthorized use, copying, or distribution of this content is prohibited unless explicitly permitted.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">5</span>
                User Conduct
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Don&apos;t break laws, impersonate people, or misuse the service.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                You agree not to:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Violate any applicable laws
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Impersonate anyone
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Harm the platform or its users
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Probe or exploit vulnerabilities
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Collect data from others
                </li>
                <p className="mb-4 text-gray-300">
                  This platform is meant for respectful, privacy-conscious use. Don&apos;t mess with that.
                </p>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">6</span>
                Limitation of Liability
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: We’re not responsible for damages related to use or misuse of the service.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#0A1020] to-[#111827] rounded-lg border border-blue-900/30 mb-4">
                <p className="mb-4 text-gray-300">
                  To the fullest extent allowed by law, DataShadow is not liable for any indirect or consequential damages resulting from:
                </p>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Your use or inability to use the service
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Unauthorized access to your data
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Content accessed via the service
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Acts of third parties
                  </li>
                  <p className="mb-4 text-gray-300">
                  This platform is meant for respectful, privacy-conscious use. Don&apos;t mess with that.
                </p>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">7</span>
                Disclaimer
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: The service is provided “as is.” No guarantees.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                This platform is offered without warranties of any kind. We don&apos;t guarantee accuracy, availability, or security, though we do our best. Use it as-is, at your discretion.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">8</span>
                Governing Law
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: These terms are governed by EU law, especially GDPR, since DataShadow operates in the European Union.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                These Terms are governed by the laws of the European Union and applicable EU member state laws, with particular reference to the General Data Protection Regulation (GDPR). Disputes will be handled under EU or your local EEA jurisdiction, depending on applicable consumer protection rules.
              </p>

            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">9</span>
                Changes to Terms
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Terms may change. Continued use means you agree to the updates.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                We may revise these Terms at any time. We&apos;ll post changes on this page. By continuing to use the service after changes go live, you agree to the new terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">10</span>
                Contact Us
              </h2>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4 hover:border-blue-700/50 transition-colors duration-300">
                <p className="text-gray-300 mb-3">
                  For any questions or legal inquiries, contact:
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