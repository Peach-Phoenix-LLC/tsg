"use client";

import React from 'react';
import Image from 'next/image';
import { COSMIC_EDITION_DATA } from '@/data/cosmicData';

export default function CosmicLandingPage() {
    return (
        <main className="relative min-h-screen nebula-gradient text-white overflow-hidden selection:bg-cyan-500/30">
            {/* Immersive Space Hero */}
            <section className="relative h-screen flex flex-col items-center justify-center">
                <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

                {/* Floating Orbital Title */}
                <div className="relative z-10 text-center space-y-2 mb-12 orbital-animation">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter liquid-text" style={{ '--liquid-bg': 'linear-gradient(135deg, #00d4ff, #6a0dad, #ff00cc)' } as any}>
                        {COSMIC_EDITION_DATA.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.5em] uppercase text-cyan-400">
                        {COSMIC_EDITION_DATA.subtitle}
                    </p>
                </div>

                {/* Main Product Feature - Orbital Floating */}
                <div className="relative z-20 w-auto h-[50vh] orbital-animation" style={{ animationDelay: '-2s' }}>
                    <Image
                        src={COSMIC_EDITION_DATA.heroImage}
                        alt={COSMIC_EDITION_DATA.title}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(106,13,173,0.5)]"
                    />

                    {/* Cosmic Hotspots */}
                    {COSMIC_EDITION_DATA.hotspots.map((spot, idx) => (
                        <div
                            key={idx}
                            className="absolute group/hotspot"
                            style={{
                                top: spot.top,
                                left: spot.left,
                                right: spot.right,
                                bottom: spot.bottom
                            }}
                        >
                            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse border border-white/50 shadow-[0_0_15px_rgba(0,212,255,0.8)]"></div>
                            <div className="absolute opacity-0 group-hover/hotspot:opacity-100 transition-all duration-500 translate-y-4 group-hover/hotspot:translate-y-0 px-4 py-2 bg-black/80 backdrop-blur-xl rounded-lg text-xs font-bold tracking-widest uppercase text-cyan-200 border border-cyan-500/30 -translate-x-1/2 left-1/2 mt-4 whitespace-nowrap">
                                {spot.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cosmic CTA */}
                <div className="absolute bottom-16 z-30 flex flex-col items-center gap-8 w-full max-w-sm">
                    <div className="flex gap-4">
                        {COSMIC_EDITION_DATA.materials.map((m, i) => (
                            <span key={i} className="px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-300">
                                {m}
                            </span>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-center gap-4">
                        <span className="text-4xl font-bold tracking-tighter text-white">{COSMIC_EDITION_DATA.price}</span>
                        <div className="btn-high-vis-wrapper w-full" style={{ padding: '2px', background: 'linear-gradient(135deg, #00d4ff, #6a0dad, #ff00cc, #00d4ff)' }}>
                            <button className="btn-high-vis py-4 px-12 rounded-full uppercase tracking-widest text-sm bg-[#100811] hover:bg-transparent transition-all">
                                Reserve for orbit
                            </button>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Launch Q4 2026</p>
                    </div>
                </div>
            </section>

            {/* Description Scroller */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-4xl mx-auto space-y-16 text-center">
                    <div className="w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent mx-auto"></div>
                    {COSMIC_EDITION_DATA.description.map((p, i) => (
                        <p key={i} className="text-xl md:text-3xl font-light leading-relaxed text-cyan-50/80">
                            {p}
                        </p>
                    ))}
                </div>
            </section>

            {/* Complete the Orbit */}
            <section className="py-32 px-6 relative z-10">
                <h3 className="text-center text-4xl font-bold mb-20 tracking-tighter uppercase">Complete the orbit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
                    {COSMIC_EDITION_DATA.upsell.map((item, idx) => (
                        <div key={idx} className="group cursor-pointer text-center space-y-8">
                            <div className="relative aspect-square rounded-full overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-all duration-700 p-8 bg-white/5 backdrop-blur-sm">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,212,255,0.2)] group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold tracking-tight">{item.name}</h4>
                                <p className="text-cyan-400 font-bold tracking-widest mt-2">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Padding */}
            <div className="h-64"></div>
        </main>
    );
}
