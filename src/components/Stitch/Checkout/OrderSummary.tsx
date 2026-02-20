import React from 'react';
import { cartMockData } from '@/data/cartMockData';
import Link from 'next/link';

export default function OrderSummary() {
    return (
        <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Order Summary</h2>

                <div className="space-y-4 text-gray-600 font-medium pb-6 border-b border-gray-200">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="text-gray-900">{cartMockData.summary.subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-gray-900">{cartMockData.summary.shipping}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Estimated Tax</span>
                        <span className="text-gray-900">{cartMockData.summary.taxes}</span>
                    </div>
                </div>

                <div className="py-6 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">{cartMockData.summary.total}</span>
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
