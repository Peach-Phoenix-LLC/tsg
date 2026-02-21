import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import CheckoutForm from '@/components/Stitch/Checkout/CheckoutForm';
import CheckoutSummary from '@/components/Stitch/Checkout/CheckoutSummary';

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

                    {/* Right Column: Order Summary */}
                    <CheckoutSummary />

                </div>

            </div>

            {/* Global Footer */}
            <ModernFooter />
        </main>
    );
}
