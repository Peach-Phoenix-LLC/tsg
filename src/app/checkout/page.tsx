import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import CheckoutForm from '@/components/Stitch/Checkout/CheckoutForm';
import { cartMockData } from '@/data/cartMockData';

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-accent-blue/30 selection:text-white font-manrope">
            {/* Global Navbar */}
            <div className="bg-white shadow-sm pb-1 relative z-50">
                <ModernNavbar />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">

                    {/* Left Column: Checkout Form */}
                    <CheckoutForm />

                    {/* Right Column: Order Summary (Condensed for Checkout) */}
                    <div className="w-full lg:w-[400px] xl:w-[450px] flex-shrink-0">
                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">In Your Bag</h2>

                            {/* Condensed Items */}
                            <div className="space-y-6 mb-8 pb-6 border-b border-gray-200">
                                {cartMockData.items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-16 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-500 mb-2">{item.details}</p>
                                            <p className="text-sm font-semibold text-gray-900">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 text-gray-600 font-medium text-sm pb-6 border-b border-gray-200">
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

                            <button className="w-full bg-accent-blue hover:bg-blue-800 text-white py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(17,17,212,0.3)] hover:shadow-[0_6px_20px_rgba(17,17,212,0.4)] hover:-translate-y-0.5">
                                Place Order
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {/* Global Footer */}
            <ModernFooter />
        </main>
    );
}
