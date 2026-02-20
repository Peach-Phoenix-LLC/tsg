"use client";
import React from 'react';

export default function CheckoutForm() {
    return (
        <div className="flex-1 lg:pr-12 xl:pr-16">

            <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-8">Secure Checkout</h1>

            <form className="space-y-12">

                {/* 1. Contact Information */}
                <div>
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
                </div>

                {/* 2. Shipping Address */}
                <div>
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
                </div>

                {/* 3. Shipping Method */}
                <div>
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
                </div>

                {/* 4. Payment */}
                <div>
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
                </div>
            </form>
        </div>
    );
}
