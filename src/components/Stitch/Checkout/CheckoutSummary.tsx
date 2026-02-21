"use client";
import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/lib/store';

export default function CheckoutSummary() {
    const { items, getSubtotal } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
                <div className="bg-[#111] rounded-none p-6 md:p-8 sticky top-24 border border-white/5">
                    <h2 className="text-xl font-light text-white mb-6 uppercase tracking-[0.2em]">In Your Bag</h2>
                    <div className="text-slate-400 font-light py-4 text-center tracking-widest uppercase text-[11px]">Loading your bag...</div>
                </div>
            </div>
        );
    }

    const subtotal = getSubtotal();
    const shipping = subtotal > 0 ? 35.00 : 0;
    const taxes = subtotal * 0.08875;
    const total = subtotal + shipping + taxes;

    return (
        <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
            <div className="bg-[#121212] rounded-none p-8 sticky top-32 border border-white/5 shadow-2xl">
                <h2 className="text-xl font-light text-white mb-8 uppercase tracking-[0.25em] flex items-center gap-4">
                    Bag
                    <span className="w-px h-6 bg-white/10"></span>
                    <span className="text-[10px] text-white/40 tracking-[0.4em] font-light">{items.reduce((acc, item) => acc + item.quantity, 0)} PIECES</span>
                </h2>

                {/* Condensed Items */}
                <div className="space-y-8 mb-10 pb-10 border-b border-white/10">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-6 items-center">
                            <div className="relative w-20 h-24 bg-[#0a0a0a] rounded-none overflow-hidden flex-shrink-0 group">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <span className="absolute top-2 left-2 w-5 h-5 bg-[#a932bd] text-white text-[9px] font-bold rounded-none flex items-center justify-center shadow-lg">
                                    {item.quantity}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[11px] font-light text-white tracking-[0.15em] leading-relaxed mb-1 uppercase">{item.name}</h3>
                                <p className="text-[9px] text-white/30 mb-2 uppercase tracking-[0.2em] font-light">{item.color} // {item.size}</p>
                                <p className="text-[11px] font-light text-[#a932bd] tracking-[0.2em]">${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <p className="text-[11px] text-white/20 italic tracking-widest uppercase font-light">BAG IS CURRENTLY EMPTY / NULL</p>
                    )}
                </div>

                <div className="space-y-4 text-white/40 font-light text-[10px] pb-10 border-b border-white/10 tracking-[0.2em] uppercase">
                    <div className="flex justify-between">
                        <span>Original Value</span>
                        <span className="text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Physical Transfer</span>
                        <span className="text-white">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Regulatory Fee</span>
                        <span className="text-white">${taxes.toFixed(2)}</span>
                    </div>
                </div>

                <div className="py-8 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase">
                    <span className="font-light text-white/40">Total Acquisition</span>
                    <span className="text-2xl font-light text-white tracking-widest">${total.toFixed(2)}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-[8px] text-white/20 tracking-[0.3em] uppercase leading-relaxed text-center font-light">
                        AUTHENTIC // IDENTITY-FORWARD // TSGABRIELLE®
                    </p>
                </div>

            </div>
        </div>
    );
}
