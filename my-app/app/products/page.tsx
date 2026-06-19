import React from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

export default function ProductsPage() {
    return (
        <div className="flex-grow max-w-6xl mx-auto px-6 py-16 md:py-24 w-full relative overflow-hidden">
            {/* Ambient layered background glows - Softened for light mode */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[130px] rounded-full pointer-events-none" />

            <div className="space-y-12 relative z-10">
                {/* Header Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-slate-800 to-slate-500 bg-clip-text text-transparent">
                        Our Products
                    </h1>
                    <p className="text-slate-600 text-sm md:text-base max-w-md font-light">
                        Explore our curated selection of high-performance workspace essentials.
                    </p>
                </div>

                {/* Product Grid Matrix */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col justify-between p-6 bg-white/70 border border-slate-200/80 hover:border-indigo-300 rounded-2xl shadow-sm hover:shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 border border-indigo-100 rounded-md">
                                        {product.category}
                                    </span>
                                    <span className="text-base font-bold text-slate-800 tracking-tight">
                                        {product.price}
                                    </span>
                                </div>
                                
                                <div className="space-y-1.5">
                                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-600 text-xs leading-relaxed font-light line-clamp-3">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Link
                                    href={`/products/${product.id}`}
                                    className="block w-full text-center py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100/80 hover:bg-indigo-600 hover:text-white border border-slate-200 hover:border-indigo-600 rounded-xl transition-all duration-200 transform active:scale-[0.98] shadow-sm cursor-pointer"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}