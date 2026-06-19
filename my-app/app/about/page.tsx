import React from 'react';

export default function About() {
    return (
        <div className="flex-grow max-w-4xl mx-auto px-6 py-16 md:py-24 w-full relative overflow-hidden bg-slate-50">
            {/* Ambient background glow - Soft Indigo tint for light mode */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="space-y-16 relative z-10">
                {/* Header Section */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-slate-800 to-slate-500 bg-clip-text text-transparent">
                        About PracticeProject
                    </h1>
                    <p className="text-slate-600 text-lg max-w-2xl leading-relaxed font-light">
                        This environment is built as a clean web workspace designed to master full-stack routing, state architecture, and UI fluidity.
                    </p>
                </div>

                {/* Grid Feature Section */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/70 border border-slate-200/80 rounded-2xl space-y-3 hover:border-indigo-300 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md">
                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                            The Objective
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            To isolate frontend logic away from configuration noise, experimenting freely with semantic components and robust structure.
                        </p>
                    </div>

                    <div className="p-6 bg-white/70 border border-slate-200/80 rounded-2xl space-y-3 hover:border-indigo-300 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md">
                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                            The Core Stack
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Leveraging Next.js App Router mechanics alongside utility-first styling patterns to ensure rapid, predictable styling loops.
                        </p>
                    </div>
                </div>

                {/* Footer Philosophy Section */}
                <div className="border-t border-slate-200 pt-10 space-y-4">
                    <h2 className="text-xl font-bold tracking-tight text-slate-800">
                        Our Workflow Philosophy
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-3xl font-light">
                        Clean codebases demand a complete removal of arbitrary constraints. By focusing exclusively on lightweight, functional interfaces, components remain reusable, fast to test, and effortless to expand into comprehensive systems.
                    </p>
                </div>
            </div>
        </div>
    );
}