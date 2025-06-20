import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At DataShadow, we&apos;re committed to protecting your privacy. This policy explains how we handle your data.
          </p>
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto bg-[#111827]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="mb-4 text-gray-300">
                DataShadow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital identity protection service.
              </p>
              <p className="mb-4 text-gray-300">
                We take your privacy seriously and have designed our service with data minimization as a core principle. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.1 K-Anonymity Search Data</h3>
              <p className="mb-4 text-gray-300">
                When you use our breach scanning service, we employ k-anonymity techniques to check if your information appears in known data breaches:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">We only process partial data hashes of your information</li>
                <li className="mb-2">Full email addresses or personal information are never stored on our servers</li>
                <li className="mb-2">Search queries are not linked to your identity</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-300">2.2 Account Information (Optional)</h3>
              <p className="mb-4 text-gray-300">
                If you choose to create an account for advanced features, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Email address (encrypted at rest)</li>
                <li className="mb-2">Hashed password</li>
                <li className="mb-2">Notification preferences</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="mb-4 text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Check if your data appears in known breaches</li>
                <li className="mb-2">Provide you with breach notifications (if you opt in)</li>
                <li className="mb-2">Improve and optimize our services</li>
                <li className="mb-2">Comply with legal obligations</li>
              </ul>
              <p className="mb-4 text-gray-300">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Data Retention</h2>
              <p className="mb-4 text-gray-300">
                For anonymous searches, we maintain a strict no-logs policy. For users with accounts:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Account information is retained until you delete your account</li>
                <li className="mb-2">You can request deletion of your data at any time</li>
                <li className="mb-2">Breach notification data is retained only as long as necessary to provide the service</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">5. Security</h2>
              <p className="mb-4 text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Encryption of sensitive data</li>
                <li className="mb-2">Regular security assessments</li>
                <li className="mb-2">Access controls and authentication</li>
                <li className="mb-2">Open source code for transparency</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
              <p className="mb-4 text-gray-300">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Right to access your data</li>
                <li className="mb-2">Right to correct inaccurate data</li>
                <li className="mb-2">Right to delete your data</li>
                <li className="mb-2">Right to restrict or object to processing</li>
                <li className="mb-2">Right to data portability</li>
              </ul>
              <p className="mb-4 text-gray-300">
                To exercise these rights, please contact us at privacy@datashadow.dev.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Changes to This Policy</h2>
              <p className="mb-4 text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
              <p className="mb-4 text-gray-300">
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-blue-400 mt-2">privacy@datashadow.dev</p>
            </section>
          </div>
        </div>
        
        {/* Last updated */}
        <div className="text-center text-gray-500 text-sm mb-8">
          Last Updated: June 2025
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