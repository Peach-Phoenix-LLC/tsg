"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Hotspot {
    id: string;
    x: number; // percentage
    y: number; // percentage
    productId: string;
    productName: string;
    price: string;
}

const hotspots: Hotspot[] = [
    {
        id: 'hp1',
        x: 45,
        y: 35,
        productId: '1',
        productName: 'Iridescent Mesh Bodysuit',
        price: '$129.00'
    },
    {
        id: 'hp2',
        x: 65,
        y: 60,
        productId: '3',
        productName: 'Cyberpunk Pleated Skirt',
        price: '$89.00'
    }
];

const HotspotCampaign = () => {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">Discover the Look</h2>
                    <p className="text-slate-500 mt-2">Tap the points to explore our signature silhouettes.</p>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden group shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                        alt="High-fashion campaign image"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-black/20"></div>

                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            <button
                                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                                className={`hotspot-point ${activeHotspot === spot.id ? 'scale-125' : ''}`}
                                aria-label={`View ${spot.productName}`}
                            />

                            {activeHotspot === spot.id && (
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 animate-in fade-in zoom-in duration-300">
                                    <div className="glass-card p-4 rounded-2xl min-w-[200px] shadow-xl border border-white/40">
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Featured</p>
                                        <h3 className="text-sm font-bold text-slate-900 leading-tight">{spot.productName}</h3>
                                        <p className="text-sm font-medium text-slate-500 mt-1">{spot.price}</p>
                                        <Link
                                            href={`/product/${spot.productId}`}
                                            className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                                        >
                                            Shop Now
                                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotspotCampaign;
