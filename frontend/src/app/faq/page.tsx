'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FAQItem from '../../components/FAQItem';

type FAQItemType = {
  question: string;
  answer: string | React.ReactNode;
};

type FAQDataType = {
  general: FAQItemType[];
  security: FAQItemType[];
};

type CategoryType = 'general' | 'security';

// FAQ data organized by category
const faqData: FAQDataType = {
  general: [
    {
      question: "What is DataShadow?",
      answer: "DataShadow is a comprehensive digital identity protection service designed to help you secure your personal information online. We scan for data breaches, monitor your digital footprint, and provide tools to protect your privacy across the internet."
    },
    {
      question: "How does DataShadow help protect my identity?",
      answer: "DataShadow protects your identity through multiple layers of security: scanning for your information in data breaches, monitoring the dark web for your personal data, checking if your passwords have been compromised, and providing recommendations to improve your online security posture."
    },
    {
      question: "What features are currently available?",
      answer: (
        <div className="space-y-2">
          <p>DataShadow currently offers the following features:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="text-green-400 font-medium">Data Breach Scanning</span> - Check if your email or personal information has been exposed in known data breaches</li>
            <li><span className="text-blue-400 font-medium">Password Check</span> (in development) - Verify if your passwords have been compromised</li>
            <li>Additional features like Continuous Monitoring, Privacy Dashboard, and Domain Check are planned for future updates</li>
          </ul>
        </div>
      )
    },
    {
      question: "Who should use DataShadow?",
      answer: "DataShadow is designed for anyone concerned about their online privacy and security. This includes individuals who want to protect their personal information, businesses looking to secure their employees' data, and organizations that need to maintain strong security practices."
    }
  ],
  security: [
    {
      question: "Is my data safe with DataShadow?",
      answer: "Yes, we take data security extremely seriously. We use industry-standard encryption and security practices to protect your information. We never store your actual passwords or sensitive data - we use secure hashing techniques to check if your information has been compromised without actually storing the data itself."
    },
    {
      question: "How does the data breach scanning work?",
      answer: "Our data breach scanning service uses privacy-preserving techniques to check if your personal information has been exposed in known data breaches. We maintain a comprehensive database of breached records and use secure hashing methods to check if your data appears in these breaches without exposing your actual information."
    },
    {
      question: "What should I do if my data has been breached?",
      answer: (
        <div className="space-y-2">
          <p>If you discover your data has been breached, we recommend taking these steps immediately:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Change your password for the affected account and any other accounts using the same or similar passwords</li>
            <li>Enable two-factor authentication where available</li>
            <li>Monitor your accounts for suspicious activity</li>
            <li>Be cautious of phishing attempts that might reference the breach</li>
            <li>Consider placing a fraud alert on your credit reports if sensitive information was exposed</li>
          </ol>
        </div>
      )
    },
    {
      question: "How often is the breach database updated?",
      answer: "Our breach database is updated continuously as new breaches are discovered and verified. We monitor multiple sources including security researchers, dark web forums, and public disclosures to ensure our database remains current."
    },
    {
      question: "How can I protect my passwords?",
      answer: (
        <div className="space-y-2">
          <p>To protect your passwords effectively:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use unique passwords for each account</li>
            <li>Create strong passwords with a mix of characters, numbers, and symbols</li>
            <li>Consider using a reputable password manager</li>
            <li>Enable two-factor authentication wherever possible</li>
            <li>Regularly check if your passwords have been compromised using our Password Check feature</li>
            <li>Change passwords immediately if you suspect they&apos;ve been compromised</li>
          </ul>
        </div>
      )
    }
  ],
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItemType[]>(faqData.general);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFAQs(faqData[activeCategory]);
    } else {
      const query = searchQuery.toLowerCase();
      const results = Object.values(faqData).flat().filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(query))
      );
      setFilteredFAQs(results);
    }
  }, [searchQuery, activeCategory]);
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0A0E17] via-[#0F1419] to-[#0A0E17]">
      <Header />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/5 blur-2xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in" style={{animationDelay: '0ms'}}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Knowledge Base
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about data privacy, security, and how our services work to protect your digital identity.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-[#1A1F2E]/80 to-[#1F2433]/80 border border-gray-800/50 focus:border-blue-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 backdrop-blur-sm transition-all"
                placeholder="Search for questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* FAQ Categories */}
          {searchQuery.trim() === '' && (
            <div className="flex flex-wrap gap-4 mb-12 justify-center animate-fade-in" style={{animationDelay: '300ms'}}>
              <CategoryButton 
                isActive={activeCategory === 'general'} 
                onClick={() => setActiveCategory('general')}
                icon={
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                General Questions
              </CategoryButton>
              <CategoryButton 
                isActive={activeCategory === 'security'} 
                onClick={() => setActiveCategory('security')}
                icon={
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
              >
                Security & Privacy
              </CategoryButton>
            </div>
          )}

          {/* FAQ Items */}
          <div className="space-y-6 mb-16 animate-fade-in" style={{animationDelay: '400ms'}}>
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{animationDelay: `${400 + (index * 100)}ms`}}
                >
                  <FAQItem 
                    question={faq.question} 
                    answer={faq.answer} 
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search or browse by category instead</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Category Button Component
interface CategoryButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ children, isActive, onClick, icon }) => {
  return (
    <button 
      className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25' 
          : 'bg-gradient-to-br from-[#1A1F2E]/80 to-[#1F2433]/80 text-gray-300 border border-gray-800/50 hover:border-blue-500/30'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="font-medium">{children}</span>
    </button>
  );
}; 