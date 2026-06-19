import React from 'react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-lg border-b border-slate-200 w-full">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Brand / Identity */}
                <div className="text-lg font-extrabold tracking-tight text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
                    <a href="/">PracticeProject</a>
                </div>

                {/* Navigation Matrix */}
                <nav className="flex items-center gap-6 md:gap-8">
                    <a 
                        href="/" 
                        className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-all duration-200 transform active:scale-95"
                    >
                        Home
                    </a>
                    <a 
                        href="/products" 
                        className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-all duration-200 transform active:scale-95"
                    >
                        Products
                    </a>
                    <a 
                        href="/about" 
                        className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-all duration-200 transform active:scale-95"
                    >
                        About
                    </a>
                    <a 
                        href="/contact" 
                        className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-all duration-200 transform active:scale-95"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}