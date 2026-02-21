import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import CartItems from '@/components/Stitch/Checkout/CartItems';
import OrderSummary from '@/components/Stitch/Checkout/OrderSummary';

export default function ShoppingBagPage() {
    return (
        <main className="min-h-screen bg-[#050406] text-slate-100 font-sans selection:bg-[#a932bd]/30 selection:text-white">
            {/* Global Navbar */}
            <div className="bg-[#050406] shadow-sm pb-1 relative z-50">
                <ModernNavbar />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Left Column: Cart Items */}
                    <CartItems />

                    {/* Right Column: Order Summary (Sticky) */}
                    <OrderSummary />

                </div>

            </div>

            {/* Global Footer */}
            <ModernFooter />
        </main>
    );
}
