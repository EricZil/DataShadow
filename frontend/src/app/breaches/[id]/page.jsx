'use client';

import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/navigation';

export default function BreachPage({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const [breachData, setBreachData] = React.useState(null);
  
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const breachId = unwrappedParams.id;

  React.useEffect(() => {
    // Simulate loading and API call
    const timer = setTimeout(() => {
      // Mock breach data (since we can't call Notion API from client-side)
      const mockBreachData = {
        id: breachId,
        title: `Data Breach: ${breachId.substring(0, 8)}`,
        company: "Example Corporation",
        pwnedCount: 1500000,
        date: "2023-05-15",
        dataTypes: ["Email addresses", "Passwords", "Names", "Phone numbers"],
        severity: "high",
        status: "completed",
        summary: "A significant data breach affecting users of Example Corporation's services.",
        fullDescription: "In May 2023, Example Corporation discovered unauthorized access to their user database. The breach exposed personal information of approximately 1.5 million users including email addresses, hashed passwords, names, and phone numbers. The company has since patched the vulnerability and reset all user passwords as a precautionary measure.",
        recommendations: [
          "Change your password immediately if you use the same password on other sites",
          "Enable two-factor authentication on your accounts",
          "Monitor your accounts for suspicious activity",
          "Be cautious of phishing attempts that may reference this breach"
        ],
        sources: [
          "Example Corporation Security Notice (May 16, 2023)",
          "Cybersecurity Researcher Report (May 18, 2023)"
        ]
      };
      
      setBreachData(mockBreachData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [breachId]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0E17] via-[#0F1419] to-[#0A0E17] text-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">Loading breach details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0E17] via-[#0F1419] to-[#0A0E17] text-white">
      <Header />
      <main className="flex-1 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Notion API Error Disclaimer */}
          <div className="mb-12 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-left text-yellow-300">
                <span className="font-semibold">Note:</span> The Notion API integration is currently experiencing issues. 
                The breach details shown below are mock data. Please check the devlog on SoM for updates.
              </p>
            </div>
          </div>
          
          {breachData ? (
            <div className="space-y-12">
              <div className="text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                  breachData.severity === 'critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  breachData.severity === 'high' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  breachData.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                  'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {breachData.severity.toUpperCase()} SEVERITY
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">{breachData.title}</h1>
                <p className="mt-6 text-xl text-gray-300">{breachData.summary}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Date Discovered</h3>
                  <p className="text-xl font-bold text-white">{new Date(breachData.date).toLocaleDateString('en-US', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  })}</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Records Affected</h3>
                  <p className="text-xl font-bold text-white">{breachData.pwnedCount.toLocaleString()}</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Status</h3>
                  <p className="text-xl font-bold text-white">{breachData.status.replace('-', ' ').toUpperCase()}</p>
                </div>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-gray-300 whitespace-pre-line">{breachData.fullDescription}</p>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Exposed Data</h2>
                <div className="flex flex-wrap gap-2">
                  {breachData.dataTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              {breachData.recommendations && breachData.recommendations.length > 0 && (
                <div className="bg-gray-800/30 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Recommendations</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {breachData.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {breachData.sources && breachData.sources.length > 0 && (
                <div className="bg-gray-800/30 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {breachData.sources.map((source, index) => (
                      <li key={index}>{source}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="text-center">
                <button 
                  onClick={() => router.back()} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Go Back
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Breach ID: {breachId}</h1>
              <p className="mt-6 text-xl text-gray-300">No data found for this breach.</p>
              <button 
                onClick={() => router.back()} 
                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 