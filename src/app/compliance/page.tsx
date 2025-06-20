import React from 'react';
import Link from 'next/link';

export default function CompliancePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Compliance & Trust</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-8">
            DataShadow is committed to the highest standards of data protection. We&apos;ve designed our systems to comply with leading privacy regulations, including the &quot;General Data Protection Regulation&quot; (GDPR) and the &quot;California Consumer Privacy Act&quot; (CCPA).
          </p>
        </div>
        
        {/* Main content */}
        <div className="max-w-4xl mx-auto bg-[#111827]/60 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30 mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Compliance Framework</h2>
              <p className="mb-4 text-gray-300">
                At DataShadow, we&apos;ve built our compliance program on the principle of &quot;privacy by design.&quot; This means that data protection and regulatory compliance are integrated into our services from the ground up, not added as an afterthought.
              </p>
              <p className="mb-4 text-gray-300">
                Our approach to compliance is comprehensive, covering global privacy regulations, industry standards, and security frameworks to ensure the highest level of data protection for our users.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Privacy Regulations</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* GDPR */}
                <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30">
                  <h3 className="text-xl font-bold mb-3 text-white">GDPR</h3>
                  <p className="text-gray-300">
                    We adhere to the GDPR&apos;s principles of data minimization, purpose limitation, and user consent, ensuring that your data is handled lawfully and transparently.
                  </p>
                </div>
                {/* CCPA */}
                <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30">
                  <h3 className="text-xl font-bold mb-3 text-white">CCPA</h3>
                  <p className="text-gray-300">
                    DataShadow respects your rights under the CCPA, including the right to know what personal information is collected and the right to have it deleted.
                  </p>
                </div>
                {/* Privacy by Design */}
                <div className="bg-gradient-to-br from-[#111827]/80 to-[#1f2937]/80 backdrop-blur-sm p-8 rounded-xl border border-blue-900/30">
                  <h3 className="text-xl font-bold mb-3 text-white">Privacy by Design</h3>
                  <p className="text-gray-300">
                    Our platform&apos;s architecture is built on the principle of &quot;Privacy by Design,&quot; embedding data protection into our technology from the ground up.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Security Certifications</h2>
              
              <div className="bg-[#0A1020] p-6 rounded-lg border border-blue-900/30 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 rounded-full p-2 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white">SOC 2 Type II</h3>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">In Progress</span>
                </div>
                <p className="text-gray-400 mt-4">
                  We are currently undergoing the SOC 2 Type II audit process to validate our security, availability, processing integrity, confidentiality, and privacy controls. This certification demonstrates our commitment to maintaining rigorous security practices and protecting customer data.
                </p>
              </div>
              
              <p className="mb-4 text-gray-300">
                Other security frameworks and standards we align with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-3">
                  <span className="font-medium text-white">NIST Cybersecurity Framework:</span> We follow the NIST CSF for identifying, protecting, detecting, responding to, and recovering from cybersecurity threats.
                </li>
                <li className="mb-3">
                  <span className="font-medium text-white">ISO 27001:</span> Our information security management system is built on ISO 27001 principles, ensuring comprehensive protection of sensitive information.
                </li>
                <li className="mb-3">
                  <span className="font-medium text-white">OWASP Top 10:</span> We actively mitigate all risks identified in the OWASP Top 10 web application security risks.
                </li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Data Processing Practices</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Data Minimization</h3>
                <p className="mb-4 text-gray-300">
                  Our k-anonymity and partial data hashing approach exemplifies our commitment to data minimization. We only process the minimum amount of data necessary to provide our service:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-300">
                  <li className="mb-2">We don&apos;t store complete email addresses or personal identifiers</li>
                  <li className="mb-2">Search queries use partial data hashing to protect privacy</li>
                  <li className="mb-2">Processing is performed client-side whenever possible</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">International Data Transfers</h3>
                <p className="mb-4 text-gray-300">
                  For any international data transfers, we implement appropriate safeguards in compliance with GDPR requirements:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-300">
                  <li className="mb-2">Standard Contractual Clauses (SCCs) with our service providers</li>
                  <li className="mb-2">Data Processing Agreements (DPAs) that meet regulatory requirements</li>
                  <li className="mb-2">Regular assessment of cross-border transfer risks</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Vendor Management</h2>
              <p className="mb-4 text-gray-300">
                We carefully select and manage our vendors to ensure they meet our high standards for data protection:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li className="mb-2">Comprehensive security and privacy assessments before engagement</li>
                <li className="mb-2">Contractual obligations for data protection and compliance</li>
                <li className="mb-2">Regular audits and reviews of vendor security practices</li>
                <li className="mb-2">Data processing agreements with all vendors who process personal data</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Documentation and Verification</h2>
              <p className="mb-4 text-gray-300">
                We maintain comprehensive documentation of our compliance efforts and are transparent about our practices. If you require verification of our compliance status or have specific compliance questions, please contact our compliance team.
              </p>
              <div className="bg-[#0A1020] p-6 rounded-lg border border-blue-900/30">
                <h3 className="text-lg font-semibold text-white mb-3">Request Compliance Documentation</h3>
                <p className="text-gray-400 mb-4">
                  For compliance documentation requests or questions, please contact:
                </p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-400">compliance@datashadow.dev</span>
                </div>
              </div>
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