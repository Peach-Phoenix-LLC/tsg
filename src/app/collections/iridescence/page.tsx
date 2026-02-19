"use client";

import React from 'react';
import Image from 'next/image';
import { LunaHero } from '@/components/Iridescence/LunaHero/LunaHero';
import { LunaInfoPanel } from '@/components/Iridescence/LunaInfoPanel/LunaInfoPanel';
import { LUNA_CLUTCH_DATA } from '@/data/iridescenceData';

export default function IridescenceLandingPage() {
    return (
        <main className="relative bg-white selection:bg-purple-100 selection:text-purple-600">
            {/* Immersive Hero Section */}
            <LunaHero />

            {/* Sticky Interaction Panel (appears on scroll) */}
            <LunaInfoPanel />

            {/* Product Details & Flow */}
            <div className="bg-white relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
                <div className="max-w-5xl mx-auto py-24 px-6">
                    <div className="flex justify-center border-b border-slate-200 mb-16">
                        <button className="px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-purple border-b-2 border-brand-purple bg-gradient-to-t from-purple-50/50 to-transparent">Description</button>
                        <button className="px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#000000] transition-colors">Details</button>
                        <button className="px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#000000] transition-colors">Shipping</button>
                    </div>

                    <div className="text-center font-body text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-relaxed space-y-8 max-w-4xl mx-auto">
                        {LUNA_CLUTCH_DATA.description.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>

                {/* Complete The Look Section */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col items-center mb-20">
                            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4 font-display">Complete the look</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-blue-400 to-brand-purple rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 max-w-4xl mx-auto">
                            {LUNA_CLUTCH_DATA.upsell.map((item, idx) => (
                                <div key={idx} className="group cursor-pointer text-center">
                                    <div className={`holo-circle aspect-square p-1 mb-8 transition-transform duration-700 group-hover:scale-105 shadow-2xl ${idx === 0 ? 'shadow-purple-100' : 'shadow-blue-100'}`}>
                                        <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={600}
                                                height={600}
                                                className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                        </div>
                                    </div>
                                    <h4 className="font-body font-medium text-2xl text-[#1a1a1a] group-hover:text-brand-purple transition-colors">{item.name}</h4>
                                    <p className="text-base font-bold text-[#333333] mt-2 tracking-widest">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
