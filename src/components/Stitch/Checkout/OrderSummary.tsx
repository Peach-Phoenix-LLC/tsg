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
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Order Summary</h2>
                    <div className="text-gray-500 py-4 text-center">Loading totals...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Order Summary</h2>

                <div className="space-y-4 text-gray-600 font-medium pb-6 border-b border-gray-200">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-gray-900">{shipping === 0 ? '$0.00' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Estimated Tax</span>
                        <span className="text-gray-900">${estimatedTax.toFixed(2)}</span>
                    </div>
                </div>

                <div className="py-6 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">${total.toFixed(2)}</span>
                </div>

                <Link href="/checkout" className="w-full block text-center bg-accent-blue hover:bg-blue-800 text-white py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(17,17,212,0.3)] hover:shadow-[0_6px_20px_rgba(17,17,212,0.4)] hover:-translate-y-0.5">
                    Proceed to Checkout
                </Link>

                <div className="mt-6 flex flex-col items-center gap-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-[20px]">lock</span>
                        Secure Payment
                    </div>
                </div>
            </div>
        </div>
    );
}
