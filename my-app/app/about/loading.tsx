import React from 'react';

export default function AboutLoading() {
    return (
        <div className="flex-grow max-w-4xl mx-auto px-6 py-16 md:py-24 w-full animate-pulse">
            <div className="space-y-16">
                {/* Header Section Skeleton */}
                <div className="space-y-4">
                    {/* Main Title Block */}
                    <div className="h-12 w-2/3 md:w-1/2 bg-slate-200 rounded-xl" />
                    {/* Subtitle Lines */}
                    <div className="space-y-2 max-w-2xl pt-2">
                        <div className="h-4 bg-slate-200 rounded" />
                        <div className="h-4 w-4/5 bg-slate-200 rounded" />
                    </div>
                </div>

                {/* Grid Feature Section Skeleton */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="p-6 bg-white border border-slate-100 rounded-2xl space-y-4 shadow-sm">
                        <div className="h-5 w-1/3 bg-slate-200 rounded" />
                        <div className="space-y-2">
                            <div className="h-3 bg-slate-200 rounded" />
                            <div className="h-3 w-5/6 bg-slate-200 rounded" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white border border-slate-100 rounded-2xl space-y-4 shadow-sm">
                        <div className="h-5 w-1/3 bg-slate-200 rounded" />
                        <div className="space-y-2">
                            <div className="h-3 bg-slate-200 rounded" />
                            <div className="h-3 w-5/6 bg-slate-200 rounded" />
                        </div>
                    </div>
                </div>

                {/* Footer Philosophy Section Skeleton */}
                <div className="border-t border-slate-200 pt-10 space-y-4">
                    <div className="h-6 w-1/4 bg-slate-200 rounded" />
                    <div className="space-y-2 max-w-3xl">
                        <div className="h-3 bg-slate-200 rounded" />
                        <div className="h-3 bg-slate-200 rounded" />
                        <div className="h-3 w-3/4 bg-slate-200 rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}