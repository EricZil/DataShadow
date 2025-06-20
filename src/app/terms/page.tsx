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
                  TL;DR: DataShadow helps protect your digital identity by checking if your data has been leaked in breaches.
                </p>
              </div>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4">
                <p className="text-gray-300">
                  DataShadow is a digital identity protection service that helps users discover if their personal information has been compromised in data breaches. Our service uses k-anonymity techniques and partial data hashing to protect your privacy while searching for your information in known data breach databases.
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
                  TL;DR: Keep your account information accurate and your password secure. You&apos;re responsible for all activity on your account.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
              </p>
              <p className="mb-4 text-gray-300">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
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
                  TL;DR: All content and functionality of DataShadow belongs to us and is protected by law.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                The Service and its original content, features, and functionality are and will remain the exclusive property of DataShadow and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DataShadow.
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
                  TL;DR: Don&apos;t break laws, impersonate others, harm the service, or collect personal information.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                You agree not to use the Service:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-3">
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  In any way that violates any applicable national or international law or regulation
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  To impersonate or attempt to impersonate DataShadow, a DataShadow employee, another user, or any other person or entity
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Service, or which may harm DataShadow or users of the Service
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  To attempt to probe, scan, or test the vulnerability of the Service or to breach security or authentication measures
                </li>
                <li className="flex items-start text-gray-300">
                  <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  To collect or track the personal information of others
                </li>
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
                  TL;DR: We&apos;re not liable for damages related to your use of the service or third-party content.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#0A1020] to-[#111827] rounded-lg border border-blue-900/30 mb-4">
                <p className="mb-4 text-gray-300">
                  In no event shall DataShadow, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-none pl-0 space-y-3">
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Your access to or use of or inability to access or use the Service
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Any conduct or content of any third party on the Service
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Any content obtained from the Service
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="bg-blue-500/10 p-1 rounded mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Unauthorized access, use or alteration of your transmissions or content
                  </li>
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
                  TL;DR: The service is provided &quot;as is&quot; without warranties of any kind.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>
              <p className="mb-4 text-gray-300">
                DataShadow does not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects will be corrected. We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.
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
                  TL;DR: These terms are governed by the laws of the United States.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4 text-gray-300">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
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
                  TL;DR: We may update these terms, and if you keep using the service, you&apos;re agreeing to the changes.
                </p>
              </div>
              <p className="mb-4 text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mb-4 text-gray-300">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
                <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">10</span>
                Contact Us
              </h2>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-800/30 rounded-lg">
                <p className="text-sm font-medium text-blue-300 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR: Questions about these terms? Contact legal@datashadow.dev
                </p>
              </div>
              <div className="p-6 bg-[#0A1020] rounded-lg border border-blue-900/30 mb-4 hover:border-blue-700/50 transition-colors duration-300">
                <p className="text-gray-300 mb-3">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-400 font-medium">legal@datashadow.dev</span>
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
          Last Updated: June 2025
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