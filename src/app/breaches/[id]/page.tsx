import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface BreachPost {
  id: string;
  title: string;
  company: string;
  date: string;
  status: 'completed' | 'in-progress' | 'investigating';
  description: string;
  dataTypes: string[];
  recordsAffected?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  fullDescription?: string;
  technicalDetails?: string;
  recommendations?: string[];
  sources?: string[];
}

const breachPosts: BreachPost[] = [
  {
    id: '1',
    title: 'Major Social Media Platform Data Breach',
    company: 'SocialCorp',
    date: '2024-01-15',
    status: 'completed',
    description: 'A significant data breach affecting millions of users. Personal information including email addresses, phone numbers, and profile data was compromised.',
    dataTypes: ['Email Addresses', 'Phone Numbers', 'Profile Data', 'Location Data'],
    recordsAffected: '15.2M',
    severity: 'high',
    fullDescription: 'On January 15, 2024, SocialCorp discovered a sophisticated cyber attack that compromised the personal data of over 15 million users. The breach was the result of a zero-day vulnerability in their authentication system, which allowed attackers to gain unauthorized access to user databases. The attackers were able to exfiltrate sensitive personal information including email addresses, phone numbers, profile data, and location information that users had shared on the platform.',
    technicalDetails: 'The breach involved exploitation of a SQL injection vulnerability in the user authentication API. Attackers used automated tools to extract data over a period of 48 hours before the security team detected the unusual database activity. The vulnerability was patched within 6 hours of discovery, but the damage had already been done.',
    recommendations: [
      'Change your password immediately if you have a SocialCorp account',
      'Enable two-factor authentication on all your accounts',
      'Monitor your email for suspicious activity',
      'Check your credit reports for any unauthorized activity',
      'Consider using a password manager to generate strong, unique passwords'
    ],
    sources: [
      'SocialCorp Official Statement',
      'Security Research Team Report',
      'Data Protection Authority Notification'
    ]
  },
  {
    id: '2',
    title: 'E-commerce Platform Security Incident',
    company: 'ShopSecure',
    date: '2024-01-10',
    status: 'in-progress',
    description: 'Ongoing investigation into a potential data breach. Customer payment information may have been exposed.',
    dataTypes: ['Payment Information', 'Customer Names', 'Addresses'],
    severity: 'critical',
    fullDescription: 'ShopSecure is currently investigating a potential security incident that may have exposed customer payment information. The investigation began on January 10, 2024, after unusual activity was detected in their payment processing systems. While the full scope of the incident is still being determined, preliminary findings suggest that customer names, addresses, and potentially payment card information may have been accessed by unauthorized parties.',
    technicalDetails: 'The incident appears to be related to a third-party payment processor integration that may have been compromised. Security teams are working around the clock to determine the exact method of intrusion and the full extent of data exposure. The investigation is expected to take several more days to complete.',
    recommendations: [
      'Monitor your bank statements and credit card activity closely',
      'Contact your bank to request a new card if you made purchases on ShopSecure',
      'Enable fraud alerts on your financial accounts',
      'Consider freezing your credit as a precautionary measure',
      'Report any suspicious charges immediately'
    ],
    sources: [
      'ShopSecure Security Advisory',
      'Payment Processor Investigation',
      'Cybersecurity Firm Analysis'
    ]
  },
  {
    id: '3',
    title: 'Healthcare Provider Data Exposure',
    company: 'HealthCare Plus',
    date: '2024-01-05',
    status: 'investigating',
    description: 'Initial reports of unauthorized access to patient records. Investigation is currently underway.',
    dataTypes: ['Medical Records', 'Patient Information', 'Insurance Details'],
    severity: 'critical',
    fullDescription: 'HealthCare Plus has reported a potential data exposure incident affecting patient records. The healthcare provider discovered unusual access patterns to their patient database on January 5, 2024. The incident is currently under investigation by both internal security teams and external cybersecurity experts. Given the sensitive nature of healthcare data, this incident has been classified as critical severity.',
    technicalDetails: 'The investigation is focusing on potential unauthorized access to the patient management system. Security logs indicate unusual login patterns and data access outside of normal business hours. The healthcare provider has temporarily restricted access to certain systems while the investigation continues.',
    recommendations: [
      'Contact HealthCare Plus directly if you are a patient',
      'Monitor your medical records for any unauthorized changes',
      'Be vigilant for medical identity theft attempts',
      'Consider placing a fraud alert on your credit reports',
      'Report any suspicious medical bills or insurance claims'
    ],
    sources: [
      'HealthCare Plus Patient Notification',
      'Healthcare Security Investigation',
      'HIPAA Compliance Review'
    ]
  },
  {
    id: '4',
    title: 'Educational Institution Breach',
    company: 'UniTech University',
    date: '2024-01-01',
    status: 'completed',
    description: 'Student and faculty information was exposed due to a misconfigured database.',
    dataTypes: ['Student Records', 'Faculty Information', 'Academic Data'],
    recordsAffected: '45K',
    severity: 'medium',
    fullDescription: 'UniTech University experienced a data exposure incident on January 1, 2024, when a misconfigured database was discovered to be publicly accessible. The incident affected approximately 45,000 current and former students and faculty members. The exposed data included academic records, personal contact information, and some administrative details.',
    technicalDetails: 'The breach was caused by a misconfigured cloud database that was accidentally set to public access. The database was accessible for approximately 72 hours before being discovered and secured. While no evidence of data theft was found, the university has implemented additional security measures to prevent similar incidents.',
    recommendations: [
      'Update your contact information with the university',
      'Monitor your email for any suspicious communications',
      'Be cautious of phishing attempts claiming to be from the university',
      'Consider changing passwords for any accounts using your university email',
      'Review your academic records for any unauthorized changes'
    ],
    sources: [
      'UniTech University Official Statement',
      'IT Security Department Report',
      'External Security Audit'
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30';
    case 'in-progress':
      return 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30';
    case 'investigating':
      return 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30';
    default:
      return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-500/30';
  }
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-500/30';
    case 'high':
      return 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30';
    case 'medium':
      return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border-yellow-500/30';
    case 'low':
      return 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30';
    default:
      return 'bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-500/30';
  }
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BreachDetailPage({ params }: PageProps) {
  const { id } = await params;
  const breach = breachPosts.find(post => post.id === id);

  if (!breach) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
      <Header />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/breaches" className="group inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              Back to Breach Reports
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mb-8 p-6 bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 rounded-2xl backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-yellow-300">Demo Data Notice</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50 text-purple-200 rounded-full text-sm font-semibold">
                    🤖 AI GENERATED
                  </span>
                </div>
                <p className="text-yellow-200/90 leading-relaxed mb-3">
                  This page displays demo data for demonstration purposes only. The breach information shown here has been <span className="font-semibold text-purple-300">generated with AI</span> and has <span className="font-semibold text-red-300">not been verified for accuracy</span>.
                </p>
                <p className="text-yellow-200/80 leading-relaxed text-sm">
                  This data is not synchronized with any backend system and does not represent real data breaches.
                </p>
              </div>
            </div>
          </div>

          {/* Breach Header */}
          <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 mb-8 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                    <h1 className="text-3xl font-bold text-white">{breach.title}</h1>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getSeverityColor(breach.severity)}`}>
                    {breach.severity.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium text-white">{breach.company}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(breach.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <p className="text-gray-300/90 leading-relaxed text-lg">{breach.description}</p>
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-8">
                <span className={`px-6 py-3 rounded-full text-sm font-semibold border ${getStatusColor(breach.status)}`}>
                  {breach.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-[#0A0E17] to-[#0F1419] rounded-xl p-4 border border-gray-800/50">
                <div className="text-sm text-gray-400 mb-2">Severity</div>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(breach.severity)}`}>
                  {breach.severity.toUpperCase()}
                </div>
              </div>
              {breach.recordsAffected && (
                <div className="bg-gradient-to-br from-[#0A0E17] to-[#0F1419] rounded-xl p-4 border border-gray-800/50">
                  <div className="text-sm text-gray-400 mb-2">Records Affected</div>
                  <div className="text-white font-bold text-xl">{breach.recordsAffected}</div>
                </div>
              )}
              <div className="bg-gradient-to-br from-[#0A0E17] to-[#0F1419] rounded-xl p-4 border border-gray-800/50">
                <div className="text-sm text-gray-400 mb-2">Data Types</div>
                <div className="text-white font-bold text-xl">{breach.dataTypes.length}</div>
              </div>
            </div>
          </div>

          {/* Data Types */}
          <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              Data Types Exposed
            </h2>
            <div className="flex flex-wrap gap-3">
              {breach.dataTypes.map((type, index) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-red-900/40 to-pink-900/40 text-red-300 rounded-full text-sm font-medium border border-red-500/30 backdrop-blur-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Full Description */}
          {breach.fullDescription && (
            <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 mb-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Full Description
              </h2>
              <p className="text-gray-300/90 leading-relaxed text-lg">{breach.fullDescription}</p>
            </div>
          )}

          {/* Technical Details */}
          {breach.technicalDetails && (
            <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 mb-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                Technical Details
              </h2>
              <p className="text-gray-300/90 leading-relaxed text-lg">{breach.technicalDetails}</p>
            </div>
          )}

          {/* Recommendations */}
          {breach.recommendations && (
            <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 mb-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                What You Should Do
              </h2>
              <ul className="space-y-4">
                {breach.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start space-x-4 p-4 bg-[#0A0E17]/50 rounded-xl border border-gray-800/50">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300/90 leading-relaxed">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sources */}
          {breach.sources && (
            <div className="bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 mb-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Sources
              </h2>
              <ul className="space-y-3">
                {breach.sources.map((source, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 bg-[#0A0E17]/50 rounded-lg border border-gray-800/50">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    <span className="text-gray-300/90">{source}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl p-12 border border-blue-500/30 backdrop-blur-sm overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-50" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 rounded-full text-blue-200 text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Check Your Exposure
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Check if You&apos;re Affected
                </h2>
                <p className="text-gray-300/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                  Scan your email address to see if your data has been compromised in this breach and get personalized recommendations to secure your accounts.
                </p>
                <Link href="/scan" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Scan Your Email Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 