import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getAllBreaches } from '../../lib/notion';

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
  summary?: string;
  pwnedCount?: number;
}

interface NotionData {
  id: string;
  title: string;
  company: string;
  pwnedCount: number;
  date: string;
  dataTypes: string[];
  severity: string;
  status: string;
  summary: string;
  fullDescription: string;
  recommendations: string[];
  sources: string[];
}

const formatRecordsAffected = (count: number) => {
  if (typeof count !== 'number' || isNaN(count) || count === 0) {
    return undefined;
  }
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(0)}K`;
  }
  return count.toString();
};

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

const ProgressBar = ({ status }: { status: BreachPost['status'] }) => {
  const progressDetails = {
    completed: { width: '100%', color: 'from-green-500 to-emerald-500', label: 'Investigation Complete' },
    'in-progress': { width: '66%', color: 'from-yellow-500 to-orange-500', label: 'Investigation In Progress' },
    investigating: { width: '33%', color: 'from-blue-500 to-cyan-500', label: 'Investigating' },
  };

  const { width, color, label } = progressDetails[status] || progressDetails.investigating;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">Investigation Status</h3>
        <span className="text-sm font-medium text-gray-300">{label.split(' ')[1] || 'Investigating'}</span>
      </div>
      <div className="w-full bg-gray-800/50 rounded-full h-2.5">
        <div 
          className={`bg-gradient-to-r ${color} h-2.5 rounded-full transition-all duration-500`} 
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

const CallToAction = () => (
  <div className="mt-20 text-center">
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
          Protect Your Data
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Protect Yourself from Data Breaches
        </h2>
        <p className="text-gray-300/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Don&apos;t wait until it&apos;s too late. Scan your email address to see if your data has been compromised 
          in any of these breaches and get personalized recommendations to secure your accounts.
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
);

export default async function BreachesPage() {
  const notionBreaches = await getAllBreaches();
  const breachPosts: BreachPost[] = notionBreaches.map((breach: NotionData) => ({
    ...breach,
    description: breach.summary,
    recordsAffected: formatRecordsAffected(breach.pwnedCount),
    status: breach.status as BreachPost['status'],
    severity: breach.severity as BreachPost['severity'],
  }));

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
      <Header />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Real-time Breach Monitoring
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 mb-6">
              Data Breach Reports
            </h1>
            <p className="text-xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed">
              Stay informed about the latest data breaches and security incidents. 
              We track and report on breaches as they happen, providing you with 
              crucial information to protect your digital identity.
            </p>
            
            {/* Notion API Error Disclaimer */}
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg max-w-3xl mx-auto">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-left text-yellow-300">
                  <span className="font-semibold">Note:</span> The Notion API integration is currently experiencing issues. 
                  Breach details cannot be viewed at this time. Please check the devlog on SoM for updates.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="group bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {breachPosts.length}
                </div>
              </div>
              <div className="text-gray-400 font-medium">Total Breaches</div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 hover:border-red-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-red-400 group-hover:text-red-300 transition-colors">
                  {breachPosts.filter(b => b.severity === 'critical').length}
                </div>
              </div>
              <div className="text-gray-400 font-medium">Critical</div>
            </div>
            
            <div className="group bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
                  {breachPosts.filter(b => b.severity === 'high').length}
                </div>
              </div>
              <div className="text-gray-400 font-medium">High Risk</div>
            </div>
          </div>

          {/* Breach Posts */}
          {breachPosts.length > 0 ? (
            <>
              <div className="space-y-8">
                {breachPosts.map((post) => (
                  <article key={post.id} className="group bg-gradient-to-br from-[#1A1F2E] to-[#1F2433] rounded-2xl p-8 border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform hover:-translate-y-1">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400 text-2xl">•</span>
                        <h2 className="text-2xl font-bold text-white">{post.title}</h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(post.severity)}`}>
                          {post.severity.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(post.status)}`}>
                          {post.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                        <span className="font-medium">{post.company}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300/90 leading-relaxed text-lg mb-6">{post.description}</p>
                    
                    <div className="border-t border-gray-800/50 my-6"></div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                          Data Types Exposed
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {post.dataTypes.map((type: string) => (
                            <span key={type} className="px-4 py-2 bg-gradient-to-r from-red-900/40 to-pink-900/40 text-red-300 rounded-full text-sm font-medium border border-red-500/30 backdrop-blur-sm">
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                          Impact Details
                        </h3>
                        <div className="space-y-3">
                          {post.recordsAffected && (
                            <div className="flex justify-between items-center p-3 bg-[#0A0E17]/50 rounded-lg border border-gray-800/50">
                              <span className="text-gray-400">Records Affected:</span>
                              <span className="text-white font-semibold">{post.recordsAffected}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <ProgressBar status={post.status} />
                    </div>

                    {/* Card Footer */}
                    <div className="pt-6 border-t border-gray-800/50">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400 flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Last updated: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </div>
                        {/* Disabled View Details button */}
                        <button 
                          className="opacity-60 cursor-not-allowed flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-600/80 to-gray-700/80 text-gray-300 rounded-xl font-semibold"
                          title="Breach details are currently unavailable"
                        >
                          <span className="flex items-center gap-2">
                            View Details
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <CallToAction />
            </>
          ) : (
            <CallToAction />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 