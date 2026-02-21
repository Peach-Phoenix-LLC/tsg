import React from 'react';
import { prisma } from '@/lib/prisma';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function ShopPage() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <main className="min-h-screen bg-[#050406] text-white font-sans">
            <ModernNavbar />

            {/* Page Header */}
            <header className="pt-40 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-8">
                    <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-8">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-white">Shop All</span>
                    </nav>
                    <h1 className="text-6xl font-serif tracking-tight mb-4">The Atelier</h1>
                    <p className="text-sm text-slate-400 font-light max-w-xl leading-relaxed uppercase tracking-widest">
                        A curated collection of Parisian luxury, redefined for the modern identity.
                    </p>
                </div>
            </header>

            {/* Filter Bar Placeholder */}
            <div className="sticky top-20 z-40 bg-[#050406]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
                    <div className="flex gap-12">
                        <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-white border-b border-white pb-1">All Pieces</button>
                        <button className="text-[10px] uppercase tracking-[0.2em] font-normal text-slate-500 hover:text-white transition-colors">Dresses</button>
                        <button className="text-[10px] uppercase tracking-[0.2em] font-normal text-slate-500 hover:text-white transition-colors">Accessories</button>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        <span>Sort By:</span>
                        <select className="bg-transparent text-white font-bold outline-none cursor-pointer">
                            <option className="bg-[#050406]">Featured</option>
                            <option className="bg-[#050406]">Newest</option>
                            <option className="bg-[#050406]">Price Low-High</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((product) => (
                        <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col">
                            <div className="aspect-[3/4] overflow-hidden bg-white/5 rounded-sm mb-6 relative hover-glow">
                                <img
                                    alt={product.name}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    src={product.image_url || (product.images && product.images[0]) || "https://placehold.co/600x800"}
                                />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-white text-xl font-light">favorite</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold tracking-[0.3em] text-[#a932bd] uppercase">tsgabrielle®</p>
                                <h3 className="text-sm text-white font-light tracking-wide group-hover:text-white/80 transition-colors uppercase">
                                    {product.name}
                                </h3>
                                <p className="text-[11px] text-slate-400 font-normal">
                                    ${Number(product.price).toFixed(2)}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {products.length === 0 && (
                    <div className="py-40 text-center">
                        <p className="text-slate-500 uppercase tracking-widest">No products found in the atelier.</p>
                    </div>
                )}
            </section>

            <ModernFooter />
        </main>
    );
}
