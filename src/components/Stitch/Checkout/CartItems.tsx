"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function CartItems() {
    const { items, removeItem, updateQuantity } = useCartStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex-1">
                <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-light text-white tracking-[0.2em] uppercase">Shopping Bag</h1>
                        <p className="text-slate-400 mt-2 font-light tracking-widest text-sm uppercase">Loading...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-light text-white tracking-[0.2em] uppercase">Shopping Bag</h1>
                    <p className="text-slate-400 mt-2 font-light tracking-widest text-sm uppercase">Curating your personal selection ({items.length} items)</p>
                </div>
            </div>

            {/* Item List */}
            <div className="divide-y divide-white/5">
                {items.length === 0 ? (
                    <div className="py-12 text-center text-slate-500 font-light tracking-widest text-sm uppercase">
                        <p>Your shopping bag is currently empty.</p>
                    </div>
                ) : (
                    items.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            key={`${item.id}-${item.size}-${item.color}`}
                            className="py-8 flex flex-col sm:flex-row gap-6"
                        >

                            {/* Image */}
                            <div className="w-full sm:w-32 md:w-40 h-40 md:h-48 bg-[#111] rounded-none border border-white/5 overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                            </div>

                            {/* Information */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="text-lg md:text-xl font-light text-white leading-tight uppercase tracking-widest">{item.name}</h3>
                                        <p className="font-light text-white text-right">${item.price.toFixed(2)}</p>
                                    </div>
                                    <p className="text-slate-500 font-light tracking-widest text-[11px] uppercase mt-1">
                                        {item.color && item.size ? `${item.color} | Size: ${item.size}` : (item.color || item.size || "")}
                                    </p>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-slate-500 hover:text-[#a932bd] text-[10px] font-bold tracking-[0.2em] uppercase mt-4 transition-colors flex items-center gap-1 group"
                                    >
                                        <span className="material-symbols-outlined text-[16px] font-light group-hover:scale-110 transition-transform">close</span>
                                        Remove
                                    </button>
                                </div>

                                {/* Quantity Control */}
                                <div className="mt-6 flex justify-between items-center sm:hidden">
                                    <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Quantity</label>
                                    <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-sm px-3 py-1.5">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-slate-400 hover:text-white transition-colors focus:outline-none"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                                        <span className="font-light text-white min-w-[20px] text-center">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-slate-400 hover:text-white transition-colors focus:outline-none"><span className="material-symbols-outlined text-[18px]">add</span></button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Quantity Control */}
                            <div className="hidden sm:flex flex-col items-end justify-between ml-4">
                                <div className="flex items-center gap-3 bg-[#111] border border-white/10 rounded-sm px-2 py-1">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-slate-400 hover:text-white transition-colors focus:outline-none p-1"><span className="material-symbols-outlined text-[16px]">remove</span></button>
                                    <span className="font-light text-white text-sm min-w-[20px] text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-slate-400 hover:text-white transition-colors focus:outline-none p-1"><span className="material-symbols-outlined text-[16px]">add</span></button>
                                </div>
                            </div>
                        </motion.div>
                    )))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 text-center sm:text-left">
                <Link href="/collections/all" className="inline-block text-[#a932bd] font-bold uppercase tracking-[0.3em] text-[10px] hover:brightness-125 transition-all pb-1 border-b border-transparent hover:border-[#a932bd]">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    );
}
