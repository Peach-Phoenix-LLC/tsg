"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import { createOrderAction } from '@/app/actions/order';

export default function CheckoutForm() {
    const { items, clearCart } = useCartStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [orderId, setOrderId] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (items.length === 0) {
            setError("Your cart is empty.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            // In a real app, you would pass the form data (shipping/billing) here as well
            const formData = new FormData(e.target as HTMLFormElement);
            const result = await createOrderAction(formData, items);

            if (result.success) {
                setSuccess(true);
                setOrderId(result.orderId || null);
                clearCart();
            } else {
                setError(result.error || "An error occurred during checkout.");
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="flex-1 lg:pr-12 xl:pr-16 text-center py-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-4">Order Confirmed!</h1>
                    <p className="text-gray-600 mb-8">Thank you for your purchase. Your order #{orderId?.substring(0, 8)} is being processed.</p>
                    <a href="/" className="inline-block bg-accent-blue hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-lg">
                        Return to Home
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex-1 lg:pr-12 xl:pr-16">

            <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-8">Secure Checkout</h1>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px]">error</span>
                    <p className="text-sm font-medium">{error}</p>
                </div>
            )}

            <form className="space-y-12" onSubmit={handleSubmit}>

                {/* 1. Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent-blue text-white flex items-center justify-center text-xs font-bold">1</span>
                        Contact
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div className="md:col-span-2 flex items-center gap-3 mt-2">
                            <input type="checkbox" id="newsletter" className="w-4 h-4 text-accent-blue border-gray-300 rounded focus:ring-accent-blue" defaultChecked />
                            <label htmlFor="newsletter" className="text-sm text-gray-600">Email me with news and offers</label>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Shipping Address */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent-blue text-white flex items-center justify-center text-xs font-bold">2</span>
                        Shipping
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors appearance-none" defaultValue="US">
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                                <option value="FR">France</option>
                                <option value="IT">Italy</option>
                            </select>
                        </div>
                        <div className="hidden md:block"></div>

                        <div>
                            <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div className="md:col-span-2">
                            <input type="text" placeholder="Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div className="md:col-span-2">
                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div>
                            <input type="text" placeholder="City" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors appearance-none" defaultValue="NY">
                                <option value="NY">New York</option>
                                <option value="CA">California</option>
                                <option value="TX">Texas</option>
                            </select>
                            <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                        <div className="md:col-span-2">
                            <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                        </div>
                    </div>
                </motion.div>

                {/* 3. Shipping Method */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent-blue text-white flex items-center justify-center text-xs font-bold">3</span>
                        Delivery Method
                    </h2>

                    <div className="space-y-3">
                        <label className="flex items-center justify-between p-4 border border-accent-blue bg-accent-blue/5 rounded-xl cursor-pointer">
                            <div className="flex items-center gap-3">
                                <input type="radio" name="shipping_method" className="w-4 h-4 text-accent-blue focus:ring-accent-blue border-gray-300" defaultChecked />
                                <div>
                                    <p className="font-bold text-sm text-gray-900">Complimentary Express</p>
                                    <p className="text-xs text-gray-500 mt-0.5">2 - 3 Business Days</p>
                                </div>
                            </div>
                            <span className="font-bold text-sm text-gray-900">Free</span>
                        </label>

                        <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
                            <div className="flex items-center gap-3">
                                <input type="radio" name="shipping_method" className="w-4 h-4 text-accent-blue focus:ring-accent-blue border-gray-300" />
                                <div>
                                    <p className="font-bold text-sm text-gray-900">Next Day Delivery</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Order before 2 PM PST</p>
                                </div>
                            </div>
                            <span className="font-bold text-sm text-gray-900">$35.00</span>
                        </label>
                    </div>
                </motion.div>

                {/* 4. Payment */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-accent-blue text-white flex items-center justify-center text-xs font-bold">4</span>
                        Payment
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">All transactions are secure and encrypted.</p>

                    <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
                            <label className="flex items-center gap-3 font-bold text-sm text-gray-900 cursor-pointer">
                                <input type="radio" name="payment_method" className="w-4 h-4 text-accent-blue focus:ring-accent-blue border-gray-300" defaultChecked />
                                Credit Card
                            </label>
                            <div className="flex gap-2">
                                <span className="material-symbols-outlined text-gray-600 text-[20px]">credit_card</span>
                            </div>
                        </div>
                        <div className="p-4 grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <input type="text" placeholder="Card Number" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors font-mono text-sm" />
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="Name on Card" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors" />
                            </div>
                            <div>
                                <input type="text" placeholder="Expiration (MM/YY)" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors font-mono text-sm" />
                            </div>
                            <div>
                                <input type="text" placeholder="Security Code" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent-blue focus:border-accent-blue transition-colors font-mono text-sm" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Submit Buttom block since we are managing it here now due to form context */}
                <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className={`w-full block text-center text-white py-4 md:py-5 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-[0_4px_15px_rgba(17,17,212,0.3)] ${isSubmitting || items.length === 0 ? 'bg-gray-400 cursor-not-allowed shadow-none' : 'bg-accent-blue hover:bg-blue-800 hover:shadow-[0_6px_20px_rgba(17,17,212,0.4)] hover:-translate-y-0.5'}`}
                >
                    {isSubmitting ? 'Processing...' : 'Place Order & Pay'}
                </button>
            </form>
        </div>
    );
}
