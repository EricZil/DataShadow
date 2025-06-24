'use client';

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { sha1 } from '../../lib/crypto';

const maskEmail = (email: string): string => {
    const parts = email.split('@');
    if (parts.length !== 2) return '****@****.***';
    const [user, domain] = parts;

    const domainParts = domain.split('.');
    const domainName = domainParts[0];
    const tld = domainParts.slice(1).join('.');

    const maskUser = user.length > 2 ? `${user[0]}${'*'.repeat(user.length - 2)}${user.slice(-1)}` : `${user[0]}*`;
    const maskDomain = domainName.length > 1 ? `${domainName[0]}${'*'.repeat(domainName.length - 1)}` : `${domainName[0]}*`;

    return `${maskUser}@${maskDomain}.${tld}`;
};

interface Breach {
    name: string;
    date: string;
    exposedData: string[];
    severity: 'High' | 'Medium' | 'Low';
    domain?: string;
}

const DataIcon = ({ dataType, className }: { dataType: string; className: string }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        'Email': <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
        'Password': <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
        'Username': <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        'Name': <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
        'Physical Address': <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" /></svg>,
    };
    return iconMap[dataType] || null;
}

export default function Scan() {
    const [email, setEmail] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanCompleted, setScanCompleted] = useState(false);
    const [isPwned, setIsPwned] = useState(false);
    const [maskedEmail, setMaskedEmail] = useState('');
    const [foundBreaches, setFoundBreaches] = useState<Breach[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<string | null>(null);

    // Email validation function
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleScan = async () => {
        if (!email) {
            setValidationError("Please enter an email address");
            return;
        }

        if (!validateEmail(email)) {
            setValidationError("Please enter a valid email address");
            return;
        }

        setValidationError(null);
        setIsScanning(true);
        setScanCompleted(false);
        setIsPwned(false);
        setFoundBreaches([]);
        setMaskedEmail(maskEmail(email));
        setErrorMessage(null);

        try {
            const hash = await sha1(email);
            const prefix = hash.substring(0, 5);
            const suffix = hash.substring(5);

            const response = await fetch(`/api/check?prefix=${prefix}&suffix=${suffix}`);

            if (response.status === 404) {
                setIsPwned(false);
                return;
            }

            if (response.ok) {
                const matches: Breach[] = await response.json();
                
                if (matches.length > 0) {
                    setIsPwned(true);
                    setFoundBreaches(matches);
                } else {
                    setIsPwned(false);
                }
            } else {
                let errorData;
                try {
                    errorData = await response.json();
                    throw new Error(`API Error: ${response.status}. ${JSON.stringify(errorData)}`);
                } catch {
                    const errorText = await response.text();
                    throw new Error(`API Error: ${response.status}. ${errorText.substring(0, 200)}`);
                }
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            setErrorMessage(errorMessage);
        } finally {
            setIsScanning(false);
            setScanCompleted(true);
        }
    };

    const allExposedData = scanCompleted && isPwned
        ? [...new Set(foundBreaches.flatMap((b: Breach) => b.exposedData))]
        : [];

    return (
        <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10] overflow-hidden">
            <Header />
            
            {/* Enhanced background elements */}
            <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[100px] -translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/3 pointer-events-none"></div>
            
            {/* Small animated particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
                <div className="absolute bottom-[30%] left-[35%] w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute top-[40%] right-[40%] w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
                <div className="absolute bottom-[15%] right-[15%] w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" style={{animationDuration: '3.5s'}}></div>
            </div>
            
            {/* Scan section */}
            <section className="relative flex-grow flex items-center justify-center py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
                                Discover Your Digital Shadow
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                Enter an email address to scan for exposed data across the web.
                            </p>
                        </div>
                        
                        <div className="relative max-w-xl mx-auto mb-12 group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative flex flex-col md:flex-row gap-2">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-0 bg-[#0C1221] rounded-lg"></div>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 text-gray-500">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </div>
                                        <input 
                                            type="text" 
                                            inputMode="email"
                                            placeholder="Enter your email address"
                                            className="w-full bg-[#0C1221] py-4 pl-12 pr-4 text-white placeholder-gray-500 rounded-lg border border-blue-900/40 focus:border-blue-500/50 focus:outline-none transition-colors"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setValidationError(null);
                                            }}
                                            onKeyUp={(e) => e.key === 'Enter' && handleScan()}
                                            autoComplete="off"
                                            spellCheck="false"
                                        />
                                    </div>
                                </div>
                                <button 
                                    onClick={handleScan}
                                    disabled={isScanning || !email}
                                    className="relative group-hover:scale-105 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-medium shadow-xl shadow-blue-600/20 transition-all disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed disabled:shadow-none flex-shrink-0"
                                >
                                    {isScanning ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Scanning...
                                        </span>
                                    ) : 'Scan Now'}
                                </button>
                            </div>
                            {validationError && (
                                <div className="mt-3 py-2.5 px-4 bg-red-900/50 border border-red-500/50 rounded-lg text-white text-sm font-medium flex items-center shadow-lg">
                                    <svg className="h-5 w-5 mr-2 flex-shrink-0 text-red-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                    {validationError}
                                </div>
                            )}
                        </div>

                        <div className="mt-12">
                            <div className="bg-[#0C1221]/80 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-blue-900/30 shadow-2xl shadow-blue-900/5 min-h-[24rem] flex items-center justify-center transition-all duration-500">
                                {isScanning ? (
                                    <div className="flex flex-col items-center justify-center text-white animate-fade-in-up">
                                        <div className="relative h-28 w-28">
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-lg animate-pulse"></div>
                                            <div className="absolute h-full w-full rounded-full border-t-2 border-b-2 border-blue-400 animate-spin" style={{animationDuration: '1.5s'}}></div>
                                            <div className="absolute h-full w-full rounded-full border-l-2 border-r-2 border-indigo-400 animate-spin" style={{animationDuration: '3s'}}></div>
                                            <div className="relative h-full w-full rounded-full bg-blue-500/10 flex items-center justify-center backdrop-blur-sm">
                                                <svg className="h-12 w-12 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-xl font-medium mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                                            Scanning for breaches...
                                        </p>
                                        <p className="text-sm text-gray-400 mt-2">
                                            Securely checking your email against our database.
                                        </p>
                                    </div>
                                ) : scanCompleted ? (
                                    <div className="w-full text-left">
                                        <div className="text-center mb-10 opacity-0 animate-fade-in-up" style={{animationDelay: '0ms'}}>
                                            <div className="inline-flex items-center justify-center mb-6">
                                                {isPwned ? (
                                                    <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center">
                                                        <svg className="h-8 w-8 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                        </svg>
                                                    </div>
                                                ) : (
                                                    <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
                                                        <svg className="h-8 w-8 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-3">Scan Complete</h3>
                                            {isPwned ? (
                                                <>
                                                    <p className="text-gray-300 text-lg">
                                                        Found <span className="text-red-400 font-bold">{foundBreaches.length} {foundBreaches.length === 1 ? 'breach' : 'breaches'}</span> for <span className="font-mono text-blue-300">{maskedEmail}</span>
                                                    </p>
                                                    {allExposedData.length > 0 && (
                                                        <div className="mt-6 pt-5 border-t border-blue-900/30">
                                                            <p className="text-sm font-medium text-gray-400 mb-3">Key Exposures:</p>
                                                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                                                {allExposedData.map((type: string) => (
                                                                    <span 
                                                                        key={type} 
                                                                        className="text-xs bg-[#162037] text-blue-300 px-3 py-1.5 rounded-full border border-blue-900/50"
                                                                        title={`This breach exposed your ${type.toLowerCase()}`}
                                                                    >
                                                                        {type}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <p className="text-gray-300 text-lg">
                                                    <span className="text-green-400 font-bold">No breaches found</span> for <span className="font-mono text-blue-300">{maskedEmail}</span>.
                                                </p>
                                            )}
                                        </div>
                                        <div className="space-y-5">
                                            {isPwned && foundBreaches.map((breach: Breach, index: number) => (
                                                <div 
                                                    key={index} 
                                                    className="bg-gradient-to-br from-[#0A0E17]/95 to-[#0D1321]/95 p-6 rounded-xl border border-blue-900/40 opacity-0 animate-fade-in-up group hover:border-blue-600 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300"
                                                    style={{ animationDelay: `${150 + index * 150}ms` }}
                                                >
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className="flex items-start">
                                                            <div className="mr-4 mt-1 flex-shrink-0">
                                                                <div className="h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                                                    <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">{breach.name}</h4>
                                                                <p className="text-sm text-gray-500">{breach.domain ? `${breach.domain} • ` : ''}Breached on {breach.date}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pl-14">
                                                        <div className="bg-[#0A0E17]/80 rounded-lg p-4 border border-blue-900/20">
                                                            <p className="text-sm font-medium text-gray-400 mb-3">Exposed data:</p>
                                                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                                                {breach.exposedData.map((data: string) => (
                                                                    <div key={data} className="flex items-center text-sm text-gray-300 group-hover:text-blue-300 transition-colors">
                                                                        <DataIcon dataType={data} className="h-5 w-5 mr-2 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                                                        <span>{data}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center text-gray-400 animate-fade-in-up">
                                        <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                                            <svg className="h-8 w-8 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg mb-2">Enter an email and click &quot;Scan Now&quot;</p>
                                        <p className="text-sm text-gray-500">We&apos;ll check if your data has been exposed in any breaches.</p>
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="mt-6 p-5 bg-red-900/20 border border-red-500/30 rounded-xl text-left">
                                        <h4 className="font-bold text-red-400 flex items-center">
                                            <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                            </svg>
                                            Error:
                                        </h4>
                                        <p className="text-sm text-red-200 mt-2">{errorMessage}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
} 