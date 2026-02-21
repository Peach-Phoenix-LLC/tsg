import React from 'react';
import { notFound } from 'next/navigation';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import ProductGallery from '@/components/Stitch/Product/ProductGallery';
import ProductInfo from '@/components/Stitch/Product/ProductInfo';
import CompleteTheLook from '@/components/Stitch/Product/CompleteTheLook';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = await prisma.product.findUnique({
        where: { id: params.id }
    });

    if (!product) {
        notFound();
    }

    const serializedProduct = {
        ...product,
        price: Number(product.price)
    };

    const crossSellsData = await prisma.product.findMany({
        where: {
            NOT: { id: product.id }
        },
        take: 3
    });

    const serializedCrossSells = crossSellsData.map(item => ({
        ...item,
        price: Number(item.price)
    }));

    const p = product as any;
    const galleryImages = (p.images && p.images.length > 0)
        ? p.images
        : (p.image_url ? [p.image_url] : []);

    return (
        <main className="min-h-screen bg-white selection:bg-accent-blue/30 selection:text-white font-manrope">
            <div className="bg-white shadow-sm pb-1 relative z-50">
                <ModernNavbar />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                    <div className="lg:pr-8 border-r-0 lg:border-r border-gray-100">
                        <ProductGallery images={galleryImages} />
                    </div>
                    <div>
                        <ProductInfo product={serializedProduct as any} />
                    </div>
                </div>
                <CompleteTheLook crossSells={serializedCrossSells as any[]} />
            </div>

            <ModernFooter />
        </main>
    );
}
