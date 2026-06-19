import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-100/60 backdrop-blur-md border-t border-slate-200 w-full relative z-20">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-light tracking-wide">
                    &copy; {new Date().getFullYear()} PracticeProject. Built for workspace practice.
                </p>
                <div className="flex gap-6 text-xs text-slate-500 font-medium">
                    <a 
                        href="/privacy" 
                        className="hover:text-slate-900 transition-colors duration-200"
                    >
                        Privacy Policy
                    </a>
                    <a 
                        href="/terms" 
                        className="hover:text-slate-900 transition-colors duration-200"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}