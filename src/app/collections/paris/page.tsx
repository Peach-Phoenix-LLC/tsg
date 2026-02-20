"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PARIS_COLLECTION_DATA } from '@/data/parisData';

export default function ParisPage() {
    const { hero, hotspots, infoPanel } = PARIS_COLLECTION_DATA;

    return (
        <main className="min-h-screen bg-[#05080a] text-white selection:bg-blue-500/30 overflow-x-hidden">
            {/* Immersive Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={hero.mainImage}
                        alt={hero.title}
                        fill
                        className="object-cover opacity-50 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1520]/40 to-[#05080a]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] uppercase">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2c3e50] via-[#3498db] to-[#ecf0f1]">
                            {hero.title}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-8 opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards] text-blue-200/80">
                        {hero.subtitle}
                    </p>
                    <p className="max-w-xl mx-auto text-lg text-white/50 font-light leading-relaxed mb-12 opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards]">
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
                                <div className="hotspot-point paris-glow" />
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 p-4 rounded-xl border border-blue-500/20 bg-black/80 backdrop-blur-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
                                    <h4 className="text-[#3498db] font-bold text-sm tracking-widest uppercase mb-1">{spot.title}</h4>
                                    <p className="text-xs text-white/70 leading-relaxed font-light">{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-40 animate-bounce">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-blue-200">The Promenade</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400 to-transparent" />
                </div>
            </section>

            {/* Narrative Content */}
            <section className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-24">
                        {infoPanel.sections.map((section, idx) => (
                            <div key={idx} className="group">
                                <span className="text-blue-500/40 font-mono text-sm mb-4 block">0{idx + 1} // ARCHIVE</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 group-hover:text-blue-400 transition-colors duration-500">{section.heading}</h2>
                                <p className="text-xl text-white/40 leading-loose font-light max-w-2xl">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:w-96 lg:sticky lg:top-32 h-fit">
                        <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl paris-glow relative overflow-hidden group">
                            <h3 className="text-2xl font-bold mb-2">{infoPanel.title}</h3>
                            <p className="text-white/40 text-sm mb-8">{infoPanel.footer}</p>
                            <Link
                                href="/cart"
                                className="btn-high-vis-wrapper"
                                style={{ background: 'linear-gradient(45deg, #2c3e50, #3498db, #ecf0f1, #2c3e50)' }}
                            >
                                <button className="btn-high-vis">
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
