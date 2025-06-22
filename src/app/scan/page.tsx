'use client';

import React, { useState } from 'react';

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

const demoResults: { email: string; breaches: Breach[] } = {
    email: 'test@example.com',
    breaches: [
        {
            name: 'Naz.API',
            date: '2023-09-20',
            exposedData: ['Email', 'Password'],
            severity: 'High',
        },
        {
            name: 'ALIEN TXTBASE',
            date: '2025-02',
            exposedData: ['Email', 'Password'],
            severity: 'Medium',
        }
    ],
};

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
    const [email, setEmail] = useState('test@example.com');
    const [isScanning, setIsScanning] = useState(false);
    const [scanCompleted, setScanCompleted] = useState(false);
    const [maskedEmail, setMaskedEmail] = useState('');

    const handleScan = () => {
        if (!email) return;
        setScanCompleted(false);
        setIsScanning(true);
        setMaskedEmail(maskEmail(email));
        setTimeout(() => {
            setIsScanning(false);
            setScanCompleted(true);
        }, 2500);
    };

    const allExposedData = scanCompleted
        ? [...new Set(demoResults.breaches.flatMap((b: Breach) => b.exposedData))]
        : [];

    return (
        <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10] overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            
            {/* Scan section */}
            <section className="relative flex-grow flex items-center justify-center py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Discover Your Digital Shadow</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enter an email address to scan for exposed data across the web. This is a demo using mock data.
                        </p>
                        
                        <div className="relative max-w-xl mx-auto mb-8 group">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="w-full bg-[#111827]/80 backdrop-blur-sm border border-blue-900/50 rounded-lg py-4 pl-12 pr-32 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button 
                                onClick={handleScan}
                                disabled={isScanning}
                                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium shadow-lg hover:shadow-blue-600/40 transition-all disabled:bg-blue-800 disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                {isScanning ? 'Scanning...' : 'Scan Now'}
                            </button>
                        </div>

                        <div className="mt-12">
                            <div className="bg-gradient-to-br from-[#111827]/60 to-[#1f2937]/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 min-h-[24rem] flex items-center justify-center transition-all duration-500">
                                {isScanning ? (
                                    <div className="flex flex-col items-center justify-center text-white animate-fade-in-up">
                                        <div className="relative h-24 w-24">
                                            <div className="absolute h-full w-full rounded-full bg-blue-500/20 animate-ping"></div>
                                            <div className="relative h-full w-full rounded-full bg-blue-500/30 flex items-center justify-center">
                                                <svg className="h-10 w-10 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-lg mt-6">Scanning for breaches...</p>
                                        <p className="text-sm text-gray-400">This may take a moment.</p>
                                    </div>
                                ) : scanCompleted ? (
                                    <div className="w-full text-left">
                                        <div className="text-center mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0ms'}}>
                                            <h3 className="text-3xl font-bold text-white mb-2">Scan Complete</h3>
                                            <p className="text-gray-300">Found <span className="text-red-400 font-bold">{demoResults.breaches.length} breaches</span> for <span className="font-mono text-blue-300">{maskedEmail}</span></p>
                                            {allExposedData.length > 0 && (
                                                <div className="mt-4 border-t border-blue-900/30 pt-4">
                                                    <p className="text-sm text-gray-400">Key Exposures:</p>
                                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                                        {allExposedData.map((type: string) => (
                                                            <span key={type} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md">
                                                                {type}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-4">
                                            {demoResults.breaches.map((breach: Breach, index: number) => (
                                                <div 
                                                    key={index} 
                                                    className="bg-[#0A0E17]/50 p-5 rounded-lg border border-blue-900/40 opacity-0 animate-fade-in-up group hover:border-blue-700/60 hover:bg-[#0A0E17]/70 transition-all"
                                                    style={{ animationDelay: `${150 + index * 150}ms` }}
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div>
                                                            <h4 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">{breach.name}</h4>
                                                            <p className="text-sm text-gray-500">{breach.domain ? `${breach.domain} &bull; ` : ''}Breached on {breach.date}</p>
                                                        </div>
                                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                                                            breach.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                                                            breach.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                            'bg-green-500/20 text-green-400'
                                                        }`}>
                                                            {breach.severity} Risk
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-400 mb-3">Exposed data:</p>
                                                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                                                            {breach.exposedData.map((data: string) => (
                                                                <div key={data} className="flex items-center text-sm text-gray-300">
                                                                    <DataIcon dataType={data} className="h-5 w-5 mr-2 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                                                    <span>{data}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-gray-400 animate-fade-in-up">Enter an email and click &quot;Scan Now&quot; to see the results.</div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
} 