'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function BreachPage({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [breachData, setBreachData] = useState(null);
  const [error, setError] = useState(null);
  
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const breachId = unwrappedParams.id;

  useEffect(() => {
    async function fetchBreachData() {
      try {
        const response = await fetch(`/api/breaches/${breachId}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        setBreachData(data);
      } catch (err) {
        console.error("Error fetching breach data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBreachData();
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

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0E17] via-[#0F1419] to-[#0A0E17] text-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Error</h1>
            <p className="text-lg text-red-400 mb-6">{error}</p>
            <button 
              onClick={() => router.back()} 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Go Back
            </button>
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
                      <li key={index}>
                        <ReactMarkdown
                          components={{
                            a: ({node, ...props}) => (
                              <a {...props} className="text-blue-400 underline hover:text-blue-300" target="_blank" rel="noopener noreferrer" />
                            )
                          }}
                        >
                          {source}
                        </ReactMarkdown>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => router.back()} 
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
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