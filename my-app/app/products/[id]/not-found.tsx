import React from 'react';

export default function ProductNotFound() {
    return (
        <div className="flex-grow flex items-center justify-center px-4 py-20 relative overflow-hidden">
            {/* Ambient background glow matching the system design - Softened for light mode */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="text-center space-y-6 max-w-md relative z-10">
                <h1 className="text-9xl font-black tracking-tighter bg-gradient-to-b from-indigo-500 to-indigo-800 bg-clip-text text-transparent select-none">
                    404
                </h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                        Product Not Found
                    </h2>
                    <p className="text-slate-600 text-sm">
                        The specific item you are looking for does not exist in our catalog or has been discontinued.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="/products"
                        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg transition-colors shadow-md shadow-indigo-600/10"
                    >
                        Back to Catalog
                    </a>
                </div>
            </div>
        </div>
    );
}