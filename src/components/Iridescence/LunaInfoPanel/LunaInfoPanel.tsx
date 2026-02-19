"use client";

import React, { useEffect, useState } from 'react';
import { LUNA_CLUTCH_DATA } from '@/data/iridescenceData';

export const LunaInfoPanel = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Force visible for testing/UX - or lower threshold significantly
            // const threshold = window.innerHeight * 0.7;
            const threshold = 100; // Show almost immediately
            console.log(`[LunaPanel] Scroll: ${scrollY} / Threshold: ${threshold}`);
            setIsVisible(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount to check initial position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log("Rendering LunaInfoPanel, isVisible:", isVisible);

    return (
        <div className={`fixed right-8 bottom-8 z-[100] bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/50 w-full max-w-sm transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-2xl font-bold font-display text-[#1a1a1a] leading-none">{LUNA_CLUTCH_DATA.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{LUNA_CLUTCH_DATA.edition}</p>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#1a1a1a]">{LUNA_CLUTCH_DATA.price}</span>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">In stock</span>
                    </div>
                </div>

                <div className="btn-high-vis-wrapper w-full">
                    <button className="btn-high-vis py-3 px-6 rounded-full uppercase tracking-widest text-sm w-full">
                        Add to bag
                    </button>
                </div>
            </div>
        </div>
    );
};
