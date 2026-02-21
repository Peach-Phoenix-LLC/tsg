"use client";
import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function OrderSummary() {
    const { getSubtotal } = useCartStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const subtotal = getSubtotal();
    const shipping = subtotal > 0 ? 35.00 : 0; // Flat rate shipping for demo
    const estimatedTax = subtotal * 0.08875; // NY Tax rate for demo
    const total = subtotal + shipping + estimatedTax;

    if (!mounted) {
        return (
            <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
                <div className="bg-[#111] rounded-none p-6 md:p-8 sticky top-24 border border-white/5">
                    <h2 className="text-2xl font-light text-white mb-6 uppercase tracking-[0.2em]">Order Summary</h2>
                    <div className="text-slate-400 font-light py-4 text-center tracking-widest uppercase text-sm">Loading totals...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
            <div className="bg-[#111] rounded-none p-6 md:p-8 sticky top-24 border border-white/5">
                <h2 className="text-2xl font-light text-white mb-6 uppercase tracking-[0.2em]">Order Summary</h2>

                <div className="space-y-4 text-slate-400 font-light pb-6 border-b border-white/10 uppercase tracking-widest text-[11px]">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-white">{shipping === 0 ? '$0.00' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Estimated Tax</span>
                        <span className="text-white">${estimatedTax.toFixed(2)}</span>
                    </div>
                </div>

                <div className="py-6 flex justify-between items-center text-[11px] uppercase tracking-widest">
                    <span className="font-bold text-white tracking-[0.3em]">Total</span>
                    <span className="text-xl font-light text-white">${total.toFixed(2)}</span>
                </div>

                <Link href="/checkout" className="w-full block text-center bg-[#a932bd] hover:brightness-110 text-white py-4 md:py-5 rounded-none font-bold uppercase tracking-[0.3em] text-[11px] transition-all shadow-[0_4px_15px_rgba(169,50,189,0.3)] hover:shadow-[0_6px_20px_rgba(169,50,189,0.4)]">
                    Checkout
                </Link>

                <div className="mt-6 flex flex-col items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined font-light text-[16px]">lock</span>
                        Secure Payment
                    </div>
                </div>
            </div>
        </div>
    );
}
