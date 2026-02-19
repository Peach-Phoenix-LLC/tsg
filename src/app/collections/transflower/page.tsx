"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TRANSFLOWER_DATA } from '@/data/transFlowerData';

export default function TransFlowerPage() {
    const { hero, hotspots, infoPanel } = TRANSFLOWER_DATA;

    return (
        <main className="min-h-screen bg-[#08110a] text-white selection:bg-green-500/30 overflow-x-hidden">
            {/* Immersive Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={hero.mainImage}
                        alt={hero.title}
                        fill
                        className="object-cover opacity-50 bloom-animation scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1a11]/60 to-[#08110a]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 uppercase">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#27ae60] via-[#f1c40f] to-[#e91e63]">
                            {hero.title}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase mb-8 text-green-200/60">
                        {hero.subtitle}
                    </p>
                    <p className="max-w-xl mx-auto text-lg text-white/40 font-light leading-relaxed mb-12">
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
                                <div className="hotspot-point bg-green-500 border-pink-400" />
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-64 p-4 rounded-xl border border-white/5 bg-black/80 backdrop-blur-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
                                    <h4 className="text-[#27ae60] font-bold text-sm tracking-widest uppercase mb-1">{spot.title}</h4>
                                    <p className="text-xs text-white/50 leading-relaxed font-light">{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-30 animate-bounce">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-green-400">The Bloom</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-green-500 to-transparent" />
                </div>
            </section>

            {/* Narrative Content */}
            <section className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-24">
                        {infoPanel.sections.map((section, idx) => (
                            <div key={idx} className="group">
                                <span className="text-green-500/40 font-mono text-sm mb-4 block">0{idx + 1} // GROWTH</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 group-hover:text-green-400 transition-colors duration-500">{section.heading}</h2>
                                <p className="text-xl text-white/30 leading-loose font-light max-w-2xl">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="lg:w-96 lg:sticky lg:top-32 h-fit">
                        <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
                            <h3 className="text-2xl font-bold mb-2 text-white">{infoPanel.title}</h3>
                            <p className="text-white/40 text-sm mb-8">{infoPanel.footer}</p>
                            <Link
                                href="/cart"
                                className="btn-high-vis-wrapper block w-full no-underline"
                                style={{ background: 'linear-gradient(45deg, #27ae60, #f1c40f, #e91e63, #27ae60)' }}
                            >
                                <button className="btn-high-vis py-4 rounded-full uppercase tracking-widest text-xs hover:shadow-green-500/50 transition-all">
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
