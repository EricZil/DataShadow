import React from 'react';
import Link from 'next/link';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10] text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security</h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            How we protect your data and maintain the highest security standards
          </p>
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto bg-[#111827]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Security Philosophy</h2>
              <p className="mb-4 text-gray-300">
                At DataShadow, security isn&apos;t just a feature—it&apos;s our foundation. We&apos;ve built our platform with a &quot;security by design&quot; approach, implementing privacy-preserving technologies from the ground up. Our goal is to provide robust digital identity protection while minimizing data collection and exposure.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">K-Anonymity and Partial Data Hashing</h2>
              <p className="mb-4 text-gray-300">
                Our core technology leverages k-anonymity principles to protect your privacy:
              </p>
              
              <div className="bg-[#0A1020] p-6 rounded-lg border border-blue-900/30 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">How It Works</h3>
                <ol className="list-decimal pl-6 text-gray-300">
                  <li className="mb-3">
                    <span className="font-medium text-white">Prefix Extraction:</span> When you enter your email or other personal data, we extract only a partial prefix (e.g., first few characters).
                  </li>
                  <li className="mb-3">
                    <span className="font-medium text-white">Secure Hashing:</span> This prefix is then cryptographically hashed using SHA-256.
                  </li>
                  <li className="mb-3">
                    <span className="font-medium text-white">K-Anonymity Search:</span> We search for this hash prefix in our breach database, returning only k-anonymized results where multiple potential matches exist.
                  </li>
                  <li className="mb-3">
                    <span className="font-medium text-white">Client-Side Verification:</span> Final matching is performed in your browser, so complete data never leaves your device.
                  </li>
                </ol>
              </div>
              
              <p className="mb-4 text-gray-300">
                This approach ensures that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Your complete personal information is never stored on our servers</li>
                <li className="mb-2">We maintain plausible deniability about which specific records you&apos;re searching for</li>
                <li className="mb-2">Even in the event of a breach of our systems, attackers cannot reconstruct your original data</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Infrastructure Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Encryption</h3>
                      <p className="text-gray-400">
                        All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">DDoS Protection</h3>
                      <p className="text-gray-400">
                        Enterprise-grade DDoS mitigation with automatic traffic filtering and rate limiting.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30">
                  <div className="flex items-start mb-3">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Regular Audits</h3>
                      <p className="text-gray-400">
                        Scheduled security audits and penetration testing by independent security researchers.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0A1020] p-5 rounded-lg border border-blue-900/30">
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
                        24/7 real-time monitoring and alerting for suspicious activities and anomalies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Authentication & Access Control</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-300">
                <li className="mb-3">
                  <span className="font-medium text-white">Multi-Factor Authentication:</span> Optional 2FA for all user accounts using TOTP or WebAuthn.
                </li>
                <li className="mb-3">
                  <span className="font-medium text-white">Password Security:</span> Passwords are hashed using Argon2id with appropriate memory, iterations, and parallelism parameters.
                </li>
                <li className="mb-3">
                  <span className="font-medium text-white">Session Management:</span> Short-lived, rotating session tokens with strict invalidation policies.
                </li>
                <li className="mb-3">
                  <span className="font-medium text-white">Principle of Least Privilege:</span> Internal access controls follow strict need-to-know principles.
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Open Source Security</h2>
              <p className="mb-4 text-gray-300">
                We believe in the power of transparency for security. That&apos;s why our core security components are open source, allowing the community to review, audit, and contribute to our security practices.
              </p>
              <div className="bg-[#0A1020] p-6 rounded-lg border border-blue-900/30 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">View Our Source Code</h3>
                  <p className="text-gray-400">
                    Inspect our implementation of k-anonymity and partial data hashing
                  </p>
                </div>
                <a href="https://github.com/datashadow/core" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex-shrink-0">
                  GitHub Repository
                </a>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Bug Bounty Program</h2>
              <p className="mb-4 text-gray-300">
                We maintain an active bug bounty program to encourage responsible disclosure of security vulnerabilities. If you discover a potential security issue, please report it to us following our responsible disclosure guidelines.
              </p>
              <div className="bg-[#0A1020] p-6 rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold text-white mb-3">Responsible Disclosure</h3>
                <p className="text-gray-400 mb-4">
                  To report a vulnerability, please email <span className="text-blue-400">security@datashadow.dev</span> with details of the issue.
                </p>
                <ul className="list-disc pl-6 text-gray-400">
                  <li className="mb-2">Include steps to reproduce the vulnerability</li>
                  <li className="mb-2">Provide any proof-of-concept code if applicable</li>
                  <li className="mb-2">Allow us reasonable time to address the issue before public disclosure</li>
                </ul>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Compliance & Certifications</h2>
              <p className="mb-4 text-gray-300">
                We adhere to industry-standard security frameworks and maintain compliance with relevant regulations:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">GDPR compliant data handling practices</li>
                <li className="mb-2">CCPA/CPRA compliance for California residents</li>
                <li className="mb-2">SOC 2 Type II certification (in progress)</li>
                <li className="mb-2">NIST Cybersecurity Framework alignment</li>
              </ul>
              <p className="text-gray-300">
                For more details on our compliance program or to request documentation, please contact <span className="text-blue-400">compliance@datashadow.dev</span>.
              </p>
            </section>
          </div>
        </div>
        
        {/* Back to home */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-colors">
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