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
                <div className="bg-white rounded-sm p-6 md:p-8 sticky top-24 border border-primary/5">
                    <h2 className="text-xl font-light text-text-dark mb-6">In your bag</h2>
                    <div className="text-text-dark/30 font-light py-4 text-center text-[12px]">Loading your bag...</div>
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
            <div className="bg-white rounded-sm p-8 sticky top-32 border border-primary/5 shadow-sm">
                <h2 className="text-xl font-light text-text-dark mb-8 flex items-center gap-4">
                    Bag
                    <span className="w-px h-6 bg-primary/10"></span>
                    <span className="text-[12px] text-text-dark/40 font-light">{items.reduce((acc, item) => acc + item.quantity, 0)} pieces</span>
                </h2>

                {/* Condensed Items */}
                <div className="space-y-8 mb-10 pb-10 border-b border-primary/10">
                    {items.map((item) => (
                        <div key={item.id} className="flex gap-6 items-center">
                            <div className="relative w-20 h-24 bg-bg-light rounded-sm overflow-hidden flex-shrink-0 group border border-primary/5">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <span className="absolute top-2 left-2 w-5 h-5 bg-primary text-white text-[10px] font-light rounded-full flex items-center justify-center shadow-sm">
                                    {item.quantity}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-[13px] font-light text-text-dark leading-relaxed mb-1">{item.name}</h3>
                                <p className="text-[11px] text-text-dark/30 mb-2 font-light">{item.color} // {item.size}</p>
                                <p className="text-[12px] font-light text-primary">${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    {items.length === 0 && (
                        <p className="text-[12px] text-text-dark/20 font-light">Bag is currently empty</p>
                    )}
                </div>

                <div className="space-y-4 text-text-dark/40 font-light text-[12px] pb-10 border-b border-primary/10">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-text-dark">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-text-dark">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Taxes</span>
                        <span className="text-text-dark">${taxes.toFixed(2)}</span>
                    </div>
                </div>

                <div className="py-8 flex justify-between items-center text-[12px]">
                    <span className="font-light text-text-dark/40">Total</span>
                    <span className="text-2xl font-light text-text-dark tracking-tight">${total.toFixed(2)}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-primary/5">
                    <p className="text-[10px] text-text-dark/20 leading-relaxed text-center font-light">
                        Authentic // Identity-forward // tsgabrielle®
                    </p>
                </div>

            </div>
        </div>
    );
}
