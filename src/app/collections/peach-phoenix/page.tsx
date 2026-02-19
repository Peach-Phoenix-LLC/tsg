"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PHOENIX_COLLECTION_DATA } from '@/data/peachPhoenixData';

export default function PeachPhoenixPage() {
    const [scrolled, setScrolled] = useState(false);
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
    const [embers, setEmbers] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);

        // Generate embers
        const newEmbers = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${2 + Math.random() * 2}s`
        }));
        setEmbers(newEmbers);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { hero, hotspots, infoPanel } = PHOENIX_COLLECTION_DATA;

    return (
        <main className="min-h-screen bg-[#100808] text-white selection:bg-orange-500/30 overflow-x-hidden">
            {/* Immersive Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with warm overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={hero.mainImage}
                        alt={hero.title}
                        fill
                        className="object-cover opacity-60 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#200a05]/40 to-[#100808]" />
                </div>

                {/* Ember Particles */}
                <div className="absolute inset-0 pointer-events-none z-10">
                    {embers.map((ember) => (
                        <div
                            key={ember.id}
                            className="ember"
                            style={{
                                left: ember.left,
                                bottom: '-20px',
                                animationDelay: ember.delay,
                                animationDuration: ember.duration
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-20 text-center px-6 max-w-5xl">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in-up [animation-fill-mode:forwards] italic">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7043] via-[#FFAB91] to-[#FFD54F]">
                            {hero.title}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-8 opacity-0 animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:forwards] text-orange-200/80">
                        {hero.subtitle}
                    </p>
                    <p className="max-w-xl mx-auto text-lg text-white/60 font-light leading-relaxed mb-12 opacity-0 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:forwards]">
                        {hero.description}
                    </p>

                    {/* Interactive Hotspots */}
                    <div className="absolute inset-0 pointer-events-none">
                        {hotspots.map((spot) => (
                            <div
                                key={spot.id}
                                className="absolute pointer-events-auto group"
                                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                                onMouseEnter={() => setActiveHotspot(spot.id)}
                                onMouseLeave={() => setActiveHotspot(null)}
                            >
                                <div className="hotspot-point phoenix-glow" />
                                <div className={`absolute left-6 top-1/2 -translate-y-1/2 w-64 p-4 rounded-xl border border-orange-500/20 bg-black/80 backdrop-blur-xl transition-all duration-500 ${activeHotspot === spot.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                                    <h4 className="text-[#FF7043] font-bold text-sm tracking-widest uppercase mb-1">{spot.title}</h4>
                                    <p className="text-xs text-white/70 leading-relaxed font-light">{spot.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60 animate-bounce">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-orange-200">The Descent</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-orange-400 to-transparent" />
                </div>
            </section>

            {/* Narrative Content Section */}
            <section className="relative py-32 px-6">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-24">
                        {infoPanel.sections.map((section, idx) => (
                            <div key={idx} className="group">
                                <span className="text-orange-500/40 font-mono text-sm mb-4 block">0{idx + 1} // ARCHIVE</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 group-hover:text-orange-400 transition-colors duration-500">{section.heading}</h2>
                                <p className="text-xl text-white/50 leading-loose font-light max-w-2xl">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sticky Control Panel */}
                    <aside className="lg:w-96 lg:sticky lg:top-32 h-fit">
                        <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl phoenix-glow relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <h3 className="text-2xl font-bold mb-2">{infoPanel.title}</h3>
                            <p className="text-white/40 text-sm mb-8">{infoPanel.footer}</p>

                            <div className="space-y-6 relative z-10">
                                <Link
                                    href="/cart"
                                    className="btn-high-vis-wrapper block w-full no-underline"
                                    style={{ background: 'linear-gradient(45deg, #FF7043, #FFD54F, #FFAB91, #FF7043)' }}
                                >
                                    <button className="btn-high-vis py-4 rounded-full uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all">
                                        {infoPanel.cta}
                                    </button>
                                </Link>

                                <Link
                                    href="/collections"
                                    className="w-full py-4 border border-white/10 rounded-full text-center block text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
                                >
                                    View Archive
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
