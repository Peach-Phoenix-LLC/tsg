"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CRYSTAL_SKIES_DATA } from '@/data/crystalSkiesData';

export default function CrystalSkiesPage() {
    const { hero, hotspots, infoPanel } = CRYSTAL_SKIES_DATA;

    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-cyan-500/30 overflow-x-hidden">
            {/* Light Implementation for Crystal Skies */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={hero.mainImage}
                        alt={hero.title}
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-[#f8fafc]" />
                </div>

                {/* Floating Crystal Decor */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-100/50 rounded-full blur-3xl crystal-decoration" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl crystal-decoration [animation-delay:2s]" />

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 uppercase">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4fc3f7] via-[#80deea] to-[#0ea5e9]">
                            {hero.title}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-8 text-slate-400">
                        {hero.subtitle}
                    </p>
                    <p className="max-w-xl mx-auto text-lg text-slate-500 font-light leading-relaxed mb-12">
                        {hero.description}
                    </p>

                    {/* Interactive Hotspots */}
                    <div className="absolute inset-0 pointer-events-none">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute pointer-events-auto group"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            >
                                <div className="hotspot-point crystal-glow" style={{ backgroundColor: 'rgba(255,255,255,0.8)', borderColor: '#80deea' }} />
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 p-4 rounded-xl border border-cyan-200 bg-white/90 backdrop-blur-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-xl pointer-events-none">
                                    <h4 className="text-[#0891b2] font-bold text-sm tracking-widest uppercase mb-1">{spot.title}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed font-light">{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-40 animate-bounce">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-slate-400">The Refraction</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
                </div>
            </section>

            {/* Narrative Content */}
            <section className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-24">
                        {infoPanel.sections.map((section, idx) => (
                            <div key={idx} className="group">
                                <span className="text-cyan-500/40 font-mono text-sm mb-4 block">0{idx + 1} // ARCHIVE</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 group-hover:text-cyan-600 transition-colors duration-500">{section.heading}</h2>
                                <p className="text-xl text-slate-400 leading-loose font-light max-w-2xl">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:w-96 lg:sticky lg:top-32 h-fit">
                        <div className="p-8 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-3xl crystal-glow relative overflow-hidden group">
                            <h3 className="text-2xl font-bold mb-2">{infoPanel.title}</h3>
                            <p className="text-slate-400 text-sm mb-8">{infoPanel.footer}</p>
                            <Link
                                href="/cart"
                                className="btn-high-vis-wrapper block w-full no-underline"
                                style={{ background: 'linear-gradient(45deg, #e0f7fa, #80deea, #ffffff, #80deea)' }}
                            >
                                <button className="btn-high-vis py-4 rounded-full uppercase tracking-widest text-xs bg-cyan-500 hover:bg-cyan-600 transition-all">
                                    {infoPanel.cta}
                                </button>
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
