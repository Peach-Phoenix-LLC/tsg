import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import CheckoutForm from '@/components/Stitch/Checkout/CheckoutForm';
import CheckoutSummary from '@/components/Stitch/Checkout/CheckoutSummary';

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-bg-light text-text-dark font-light">
            {/* Global Navbar */}
            <ModernNavbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">

                <div className="flex flex-col-reverse lg:flex-row gap-20 lg:gap-32">

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
