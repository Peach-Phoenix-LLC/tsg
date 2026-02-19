"use client";

import React from 'react';
import Image from 'next/image';
import { LUNA_CLUTCH_DATA } from '@/data/iridescenceData';

export const LunaHero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-purple-200/30 via-blue-100/20 to-pink-200/30 rounded-full blur-[120px]"></div>
            </div>

            {/* Product & Large Title */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="text-center z-20 relative w-full max-w-4xl mx-auto px-6 mb-8 mt-16">
                    <h1 className="liquid-text text-8xl md:text-[9rem] lg:text-[10rem] font-black tracking-tighter leading-none select-none pointer-events-none">
                        {LUNA_CLUTCH_DATA.title}
                    </h1>
                </div>

                {/* Primary Product Image with Hotspots */}
                <div className="relative group w-auto h-[55vh] lg:h-[65vh] transition-transform duration-700 ease-out hover:scale-105">
                    <Image
                        src={LUNA_CLUTCH_DATA.heroImage}
                        alt={LUNA_CLUTCH_DATA.title}
                        width={1200}
                        height={1200}
                        priority
                        className="w-full h-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.2)]"
                    />

                    {/* Hotspots */}
                    {LUNA_CLUTCH_DATA.hotspots.map((spot, idx) => (
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
                            <div className={`hotspot-point ${spot.color === 'blue' ? 'bg-blue-400 border-blue-200' : spot.color === 'purple' ? 'bg-purple-400 border-purple-200' : ''}`}></div>
                            <div className="absolute opacity-0 group-hover/hotspot:opacity-100 transition-all duration-300 translate-y-4 group-hover/hotspot:translate-y-0 px-4 py-2 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-bold tracking-widest uppercase text-[#1a1a1a] shadow-xl whitespace-nowrap border border-purple-100 -translate-x-1/2 left-1/2 mt-3">
                                {spot.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Initial CTA Section (Hidden on detailed scroll) */}
                <div className="absolute bottom-12 z-20 flex flex-col items-center gap-6 w-full max-w-sm transition-opacity duration-500" id="hero-cta">
                    <div className="flex items-center gap-4">
                        {LUNA_CLUTCH_DATA.materials.map((m, i) => (
                            <span key={i} className="px-4 py-1.5 bg-white/80 backdrop-blur border border-slate-200 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a1a1a]">
                                {m}
                            </span>
                        ))}
                    </div>
                    <div className="w-full flex flex-col items-center gap-4">
                        <span className="text-3xl font-bold tracking-tight text-[#1a1a1a]">{LUNA_CLUTCH_DATA.price}</span>
                        <div className="btn-high-vis-wrapper w-full">
                            <button className="btn-high-vis py-4 rounded-full uppercase tracking-widest text-sm">
                                Add to bag
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rotation indicator */}
                <div className="absolute bottom-[10%] z-10 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/50 shadow-sm text-[#1a1a1a]">
                    <span className="material-symbols-outlined text-base">360</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#666]">Drag to rotate</span>
                </div>
            </div>
        </section>
    );
};
