import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        notFound();
    }

    return (
        <div className="flex-grow max-w-3xl mx-auto px-6 py-16 md:py-24 w-full relative overflow-hidden">
            {/* Centered soft background glow - Softened for light mode */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-6">
                <div>
                    <Link
                        href="/products"
                        className="inline-flex items-center text-xs text-indigo-600 hover:text-indigo-700 font-semibold tracking-wide uppercase transition-colors group"
                    >
                        <span className="transform group-hover:-translate-x-1 transition-transform mr-1.5">&larr;</span> 
                        Back to all products
                    </Link>
                </div>

                {/* Main Product Container */}
                <div className="p-8 md:p-12 bg-white/70 border border-slate-200/80 rounded-2xl shadow-md backdrop-blur-sm space-y-8">
                    
                    {/* Header Info Block */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-200 pb-6">
                        <div className="space-y-2">
                            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 border border-indigo-100 rounded-md">
                                {product.category}
                            </span>
                            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-slate-800 to-slate-500 bg-clip-text text-transparent pt-1">
                                {product.name}
                            </h1>
                        </div>
                        <div className="text-2xl font-black text-indigo-600 sm:text-right tracking-tight pt-1">
                            {product.price}
                        </div>
                    </div>

                    {/* Description Body */}
                    <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Product Overview
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                            {product.description}
                        </p>
                    </div>

                    {/* Interactive Button Group */}
                    <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 py-3 px-6 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-indigo-600/10 cursor-pointer">
                            Add to Cart
                        </button>
                        <button className="flex-1 py-3 px-6 text-sm font-medium text-slate-700 bg-slate-100/80 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer">
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}