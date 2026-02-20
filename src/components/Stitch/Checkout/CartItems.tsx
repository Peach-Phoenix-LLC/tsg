"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cartMockData } from '@/data/cartMockData';
import Link from 'next/link';

export default function CartItems() {
    return (
        <div className="flex-1">
            <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Shopping Bag</h1>
                    <p className="text-gray-500 mt-2 font-medium">Curating your personal selection (3 items)</p>
                </div>
            </div>

            {/* Item List */}
            <div className="divide-y divide-gray-100">
                {cartMockData.items.map((item, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        key={item.id}
                        className="py-8 flex flex-col sm:flex-row gap-6"
                    >

                        {/* Image */}
                        <div className="w-full sm:w-32 md:w-40 h-40 md:h-48 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 hover:scale-105" />
                        </div>

                        {/* Information */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start gap-4">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                                    <p className="font-semibold text-gray-900 text-right">{item.price}</p>
                                </div>
                                <p className="text-gray-500 font-medium text-sm mt-1">{item.details}</p>

                                <button className="text-gray-400 hover:text-red-500 text-sm font-medium mt-4 transition-colors flex items-center gap-1 group">
                                    <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">delete</span>
                                    Remove
                                </button>
                            </div>

                            {/* Quantity Control */}
                            <div className="mt-6 flex justify-between items-center sm:hidden">
                                <label className="text-sm font-medium text-gray-600">Quantity</label>
                                <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                                    <button className="text-gray-500 hover:text-accent-blue transition-colors focus:outline-none"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                                    <span className="font-semibold text-gray-900 min-w-[20px] text-center">{item.quantity}</span>
                                    <button className="text-gray-500 hover:text-accent-blue transition-colors focus:outline-none"><span className="material-symbols-outlined text-[18px]">add</span></button>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Quantity Control */}
                        <div className="hidden sm:flex flex-col items-end justify-between ml-4">
                            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
                                <button className="text-gray-400 hover:text-accent-blue transition-colors focus:outline-none p-1"><span className="material-symbols-outlined text-[16px]">remove</span></button>
                                <span className="font-semibold text-gray-900 text-sm min-w-[20px] text-center">{item.quantity}</span>
                                <button className="text-gray-400 hover:text-accent-blue transition-colors focus:outline-none p-1"><span className="material-symbols-outlined text-[16px]">add</span></button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center sm:text-left">
                <Link href="/collections/all" className="inline-block text-accent-blue font-bold uppercase tracking-widest text-sm hover:text-blue-900 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-900">
                    ← Continue Shopping
                </Link>
            </div>
        </div>
    );
}
