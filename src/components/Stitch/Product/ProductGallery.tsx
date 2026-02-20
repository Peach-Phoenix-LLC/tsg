"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGallery({ images }: { images: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 h-full">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto max-h-[700px] scrollbar-hide py-1">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeIndex === idx ? 'border-accent-blue shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                        {activeIndex === idx && <div className="absolute inset-0 bg-accent-blue/5"></div>}
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-50 rounded-2xl overflow-hidden relative shadow-sm h-[500px] md:h-[700px] group cursor-zoom-in">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        src={images[activeIndex]}
                        alt="Main Product"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                </AnimatePresence>

                {/* Subtle Image Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>

                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm uppercase tracking-widest border border-white/50">New Arrival</span>
                </div>
            </div>
        </div>
    );
}
