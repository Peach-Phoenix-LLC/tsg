import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import ProductGallery from '@/components/Stitch/Product/ProductGallery';
import ProductInfo from '@/components/Stitch/Product/ProductInfo';
import CompleteTheLook from '@/components/Stitch/Product/CompleteTheLook';
import { pdpMockData } from '@/data/pdpMockData';

export default function ProductDetailPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-accent-blue/30 selection:text-white font-manrope">
            {/* Global Navbar */}
            <div className="bg-white shadow-sm pb-1 relative z-50">
                <ModernNavbar />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                {/* Main Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                    {/* Left: Interactive Gallery */}
                    <div className="lg:pr-8 border-r-0 lg:border-r border-gray-100">
                        <ProductGallery images={pdpMockData.images} />
                    </div>

                    {/* Right: Product Details, Selection, Actions, Specs */}
                    <div>
                        <ProductInfo />
                    </div>
                </div>

                {/* Cross-Sell Section */}
                <CompleteTheLook />

            </div>

            {/* Global Footer */}
            <ModernFooter />
        </main>
    );
}
