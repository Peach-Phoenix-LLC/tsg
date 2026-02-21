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
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                    <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">In Your Bag</h2>
                    <div className="text-gray-500 py-4 text-center">Loading your bag...</div>
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
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">In Your Bag</h2>

                {/* Condensed Items */}
                <div className="space-y-6 mb-8 pb-6 border-b border-gray-200">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                            <div className="relative w-16 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                                <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                    {item.quantity}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{item.name}</h3>
                                <p className="text-xs text-gray-500 mb-2">{item.color} {item.size}</p>
                                <p className="text-sm font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <p className="text-sm text-gray-500 italic">Your cart is currently empty.</p>
                    )}
                </div>

                <div className="space-y-3 text-gray-600 font-medium text-sm pb-6 border-b border-gray-200">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-gray-900">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Estimated Tax</span>
                        <span className="text-gray-900">${taxes.toFixed(2)}</span>
                    </div>
                </div>

                <div className="py-6 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">${total.toFixed(2)}</span>
                </div>

            </div>
        </div>
    );
}
