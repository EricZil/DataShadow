'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { sha1 } from '../../lib/crypto';
import { fetchWithAuth } from '../../lib/api-auth';

export default function PasswordCheck() {
    const [password, setPassword] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [scanCompleted, setScanCompleted] = useState(false);
    const [isPwned, setIsPwned] = useState(false);
    const [occurrences, setOccurrences] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleScan = async () => {
        if (!password) return;

        setIsScanning(true);
        setScanCompleted(false);
        setIsPwned(false);
        setOccurrences(0);
        setErrorMessage(null);

        try {
            const hash = await sha1(password);
            const prefix = hash.substring(0, 5).toUpperCase();
            const suffix = hash.substring(5).toUpperCase();

            const response = await fetchWithAuth(`/api/passwords/${prefix}`);

            if (!response.ok) {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            const text = await response.text();
            const lines = text.split('\n');

            let found = false;
            for (const line of lines) {
                const [hashSuffix, count] = line.split(':');
                if (hashSuffix === suffix) {
                    found = true;
                    setIsPwned(true);
                    setOccurrences(parseInt(count, 10));
                    break;
                }
            }

            if (!found) {
                setIsPwned(false);
                setOccurrences(0);
            }
        } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : String(error));
        } finally {
            setIsScanning(false);
            setScanCompleted(true);
        }
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#0A0E17] to-[#070A10] overflow-hidden">
            <Header />
            <div className="max-w-3xl mx-auto mt-6 mb-2">
                <div className="bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-200 p-4 rounded-lg text-left">
                    <strong>Disclaimer:</strong> No password leaks have been uploaded yet due to limitations of Cloudflare&apos;s Class A operations. I currently looking for alternatives to enable this feature.
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            
            {/* Password check section */}
            <section className="relative flex-grow flex items-center justify-center py-16 md:py-24">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Check Your Password Security</h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Enter a password to see if it has been exposed in data breaches.
                        </p>
                        
                        <div className="relative max-w-xl mx-auto mb-8 group">
                            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                            <input 
                                type="password" 
                                placeholder="Enter password to check"
                                className="w-full bg-[#111827]/80 backdrop-blur-sm border border-blue-900/50 rounded-lg py-4 pl-12 pr-32 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyUp={(e) => e.key === 'Enter' && handleScan()}
                            />
                            <button 
                                onClick={handleScan}
                                disabled={isScanning || !password}
                                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium shadow-lg hover:shadow-blue-600/40 transition-all disabled:bg-blue-800 disabled:cursor-not-allowed disabled:shadow-none"
                            >
                                {isScanning ? 'Checking...' : 'Check Password'}
                            </button>
                        </div>

                        <div className="mt-12">
                            <div className="bg-gradient-to-br from-[#111827]/60 to-[#1f2937]/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 min-h-[20rem] flex items-center justify-center transition-all duration-500">
                                {isScanning ? (
                                    <div className="flex flex-col items-center justify-center text-white animate-fade-in-up">
                                        <div className="relative h-24 w-24">
                                            <div className="absolute h-full w-full rounded-full bg-blue-500/20 animate-ping"></div>
                                            <div className="relative h-full w-full rounded-full bg-blue-500/30 flex items-center justify-center">
                                                <svg className="h-10 w-10 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-lg mt-6">Checking password...</p>
                                        <p className="text-sm text-gray-400">Your password never leaves your device.</p>
                                    </div>
                                ) : scanCompleted ? (
                                    <div className="w-full text-center opacity-0 animate-fade-in-up">
                                        {isPwned ? (
                                            <div className="space-y-6">
                                                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-red-500/20 text-red-400">
                                                    <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                                                </div>
                                                <h3 className="text-3xl font-bold text-red-400">Password Compromised</h3>
                                                <p className="text-xl text-gray-300">
                                                    This password was found in <span className="font-bold text-red-400">{occurrences.toLocaleString()}</span> data breaches.
                                                </p>
                                                <p className="text-gray-400 max-w-lg mx-auto">
                                                    You should change this password immediately on any site where you use it.
                                                    For better security, use a unique password for each account.
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-6">
                                                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-500/20 text-green-400">
                                                    <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                </div>
                                                <h3 className="text-3xl font-bold text-green-400">Password Looks Good</h3>
                                                <p className="text-xl text-gray-300">
                                                    This password wasn&apos;t found in any known data breaches.
                                                </p>
                                                <p className="text-gray-400 max-w-lg mx-auto">
                                                    However, always use strong, unique passwords for each of your accounts.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="text-gray-400">
                                        <p className="mb-4">Enter a password to check if it has appeared in known data breaches.</p>
                                        <p className="text-sm text-gray-500">
                                            <span className="inline-flex items-center mr-2">
                                                <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                                                Secure:
                                            </span>
                                            Your password never leaves your device - only a partial hash is sent to our server.
                                        </p>
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="mt-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-left">
                                        <h4 className="font-bold text-red-300">Error:</h4>
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