"use client"; // <--- Add this directive at the absolute top of the file

import React from 'react';

export default function ContactPage() {
    return (
        <div className="flex-grow max-w-5xl mx-auto px-6 py-12 md:py-24 w-full relative overflow-hidden">
            {/* Ambient background glow matching the system design - Softened for light mode */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-5 gap-12 relative z-10 items-start">
                
                {/* Information Column */}
                <div className="md:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-slate-800 to-slate-500 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-slate-600 text-sm leading-relaxed font-light">
                            Have questions about the workspace, structural architecture, or utility configurations? Drop us a message.
                        </p>
                    </div>

                    <div className="space-y-6 pt-2 text-sm">
                        <div className="flex flex-col space-y-1">
                            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Email</span>
                            <span className="text-slate-800 font-medium">hello@practiceproject.dev</span>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Location</span>
                            <span className="text-slate-800 font-medium">Remote / Global</span>
                        </div>
                    </div>
                </div>

                {/* Form Card Column */}
                <div className="md:col-span-3 p-6 md:p-8 bg-white/70 border border-slate-200/80 rounded-2xl shadow-md backdrop-blur-sm">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-xs font-medium text-slate-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-slate-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-xs font-medium text-slate-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-medium text-slate-700">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 resize-none"
                                placeholder="Your message details..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-indigo-600/10 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}