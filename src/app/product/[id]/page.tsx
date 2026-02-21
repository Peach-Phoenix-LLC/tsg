import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import AddToCartButton from '@/components/Product/AddToCartButton';
import WishlistButton from '@/components/Product/WishlistButton';
import './pdp.css';

export const dynamic = 'force-dynamic';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
    // Simple UUID regex check to prevent Prisma from blowing up on malformed IDs
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(params.id)) {
        notFound();
    }

    const product = await prisma.product.findUnique({
        where: { id: params.id }
    });

    if (!product) {
        notFound();
    }

    const crossSellsData = await prisma.product.findMany({
        where: {
            NOT: { id: product.id }
        },
        take: 4
    });

    const p = product as any;
    const galleryImages = (p.images && p.images.length > 0)
        ? p.images
        : (p.image_url ? [p.image_url] : [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAlcy-ObziwhUk21hAeBp7qwb4LDDHzBTgAV1TJYFocUudHKPBpDTQadWGtZfSk0dvi5XBYQCefBLH3GJHoOTReNiKvzmbcacs25pfaQwWAtt9SGDPw3bRYLcJ2g_Fxx-y5TeAL168rQbgiiyLiHUTIUOKKNSBCCmLb6l9y4-lR9rnOCm1mRor8QJHOBA0kephN5zEVn7fLg_EZSQKcMMSlsA_atVC_BPkWTH6ySitjvBQP1eD1uSrcfx7i7LQrcP_Rr4ib2mYaDoDS"
        ]);

    return (
        <main className="min-h-screen bg-[#050406] text-slate-100 font-sans">
            <ModernNavbar />

            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Sticky Image Gallery */}
                    <div className="w-full lg:w-[62%] flex flex-col gap-6 custom-gallery-scroll">
                        {galleryImages.map((img: string, i: number) => (
                            <div key={i} className={`overflow-hidden bg-[#111] rounded-sm ${i > 1 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                                <img
                                    alt={`${product.name} View ${i + 1}`}
                                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                                    src={img}
                                />
                            </div>
                        ))}
                        {/* Fill empty spots if less than 3 images to match the stunning design grid */}
                        {galleryImages.length < 3 && (
                            <div className="grid grid-cols-2 gap-6">
                                <div className="aspect-[3/4] overflow-hidden bg-[#111] rounded-sm opacity-50">
                                    <div className="w-full h-full flex items-center justify-center border border-white/5">
                                        <span className="material-symbols-outlined text-white/20 text-4xl">inventory_2</span>
                                    </div>
                                </div>
                                <div className="aspect-[3/4] overflow-hidden bg-[#111] rounded-sm opacity-50">
                                    <div className="w-full h-full flex items-center justify-center border border-white/5">
                                        <span className="material-symbols-outlined text-white/20 text-4xl">inventory_2</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Product Details Sidebar */}
                    <div className="w-full lg:w-[38%] relative">
                        <div className="sticky top-32 flex flex-col gap-10">
                            <div className="space-y-4">
                                <nav className="flex items-center gap-2 text-[10px] font-normal tracking-[0.2em] text-slate-400 uppercase">
                                    <Link className="hover:text-[#a932bd]" href="/">Home</Link>
                                    <span className="text-[12px] opacity-30">/</span>
                                    <Link className="hover:text-[#a932bd]" href="/collections">{product.category}</Link>
                                    <span className="text-[12px] opacity-30">/</span>
                                    <span className="text-white truncate max-w-[120px]">{product.name}</span>
                                </nav>
                                <div>
                                    <p className="text-[11px] font-bold tracking-[0.3em] text-[#a932bd] uppercase mb-2">Exclusive</p>
                                    <h1 className="text-3xl font-light tracking-tight text-white leading-tight">{product.name}</h1>
                                    <div className="flex items-center gap-4 mt-4">
                                        <p className="text-lg font-normal text-slate-300">${Number(product.price).toFixed(2)}</p>
                                        <div className="h-4 w-px bg-white/10"></div>
                                        <p className="text-[9px] font-bold tracking-[0.2em] text-[#fef08a] uppercase animate-pulse">
                                            {product.stock && product.stock > 0 && product.stock <= 5
                                                ? `Only ${product.stock} remaining in the Amethyst Era`
                                                : product.stock && product.stock > 5 && product.stock <= 15
                                                    ? "Limited Edition - Amethyst Era Release"
                                                    : "Curated Archive Piece"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white">Color: Midnight</span>
                                </div>
                                <div className="flex gap-4">
                                    <button className="w-6 h-6 rounded-full bg-[#11112d] ring-1 ring-[#a932bd] ring-offset-4 ring-offset-[#050406]"></button>
                                    <button className="w-6 h-6 rounded-full bg-[#1a1a1a] hover:ring-1 hover:ring-slate-500 transition-all"></button>
                                    <button className="w-6 h-6 rounded-full bg-[#d2b48c] hover:ring-1 hover:ring-slate-500 transition-all"></button>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white">Select Size</span>
                                    <Link className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 underline underline-offset-4 hover:text-[#a932bd] transition-colors" href="/size-guide">Size Guide</Link>
                                </div>
                                <div className="grid grid-cols-5 gap-0 border-l border-t border-white/10 rounded-sm overflow-hidden">
                                    <button className="h-12 border-r border-b border-white/10 text-[11px] text-white tracking-widest hover:bg-white/5 transition-colors">XS</button>
                                    <button className="h-12 border-r border-b border-white/10 text-[11px] tracking-widest bg-white text-black font-bold">S</button>
                                    <button className="h-12 border-r border-b border-white/10 text-[11px] text-white tracking-widest hover:bg-white/5 transition-colors">M</button>
                                    <button className="h-12 border-r border-b border-white/10 text-[11px] text-white tracking-widest hover:bg-white/5 transition-colors">L</button>
                                    <button className="h-12 border-r border-b border-white/10 text-[11px] text-white/30 tracking-widest cursor-not-allowed">XL</button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <AddToCartButton product={{
                                    id: product.id,
                                    name: product.name,
                                    price: Number(product.price),
                                    image: galleryImages[0] || ""
                                }} />
                                <WishlistButton productId={product.id} />

                                <div className="grid grid-cols-3 gap-1 pt-2 opacity-50">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="material-symbols-outlined text-white font-light text-lg">verified</span>
                                        <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400">Authentic</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="material-symbols-outlined text-white font-light text-lg">public</span>
                                        <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400">Global</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="material-symbols-outlined text-white font-light text-lg">eco</span>
                                        <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400">Conscious</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/10 mt-4">
                                <details className="group py-5 border-b border-white/10" open>
                                    <summary className="flex items-center justify-between cursor-pointer list-none outline-none">
                                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white">Details & Fit</span>
                                        <span className="material-symbols-outlined text-sm font-light text-white group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="mt-6 text-[13px] leading-[1.8] text-slate-400 space-y-4">
                                        <p>{product.description}</p>
                                        <ul className="space-y-2 border-l border-[#a932bd] pl-4">
                                            {product.details?.map((detail: string, i: number) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                            {product.composition && <li>Composition: {product.composition}</li>}
                                        </ul>
                                    </div>
                                </details>

                                {product.sustainability && (
                                    <details className="group py-5 border-b border-white/10">
                                        <summary className="flex items-center justify-between cursor-pointer list-none outline-none">
                                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white">Sustainability</span>
                                            <span className="material-symbols-outlined text-sm font-light text-white group-open:rotate-180 transition-transform">expand_more</span>
                                        </summary>
                                        <div className="mt-6 text-[13px] leading-[1.8] text-slate-400">
                                            <p>{product.sustainability}</p>
                                        </div>
                                    </details>
                                )}

                                <details className="group py-5 border-b border-white/10">
                                    <summary className="flex items-center justify-between cursor-pointer list-none outline-none">
                                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white">Shipping & Returns</span>
                                        <span className="material-symbols-outlined text-sm font-light text-white group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="mt-6 text-[13px] leading-[1.8] text-slate-400">
                                        <p>Complimentary express shipping on all orders over $500. Free returns within 30 days of purchase.</p>
                                    </div>
                                </details>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Cross-Sells Section */}
                {crossSellsData.length > 0 && (
                    <section className="mt-40 border-t border-white/5 pt-16">
                        <div className="flex items-center justify-between mb-16">
                            <h2 className="text-[11px] font-bold tracking-[0.5em] uppercase text-white">Complete the Look</h2>
                            <div className="h-[1px] flex-grow mx-8 bg-white/5"></div>
                            <Link className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a932bd] hover:brightness-125 transition-all" href="/collections">Shop All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {crossSellsData.map((item) => {
                                const crossImage = item.image_url || ((item.images && item.images.length > 0) ? item.images[0] : '');
                                return (
                                    <Link href={`/product/${item.id}`} key={item.id} className="group cursor-pointer">
                                        <div className="aspect-[3/4] overflow-hidden mb-6 bg-white/5 rounded-sm hover-glow">
                                            {crossImage ? (
                                                <img
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3]"
                                                    src={crossImage}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-white/20 text-4xl">image</span>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-[10px] font-bold tracking-widest text-[#a932bd] uppercase">tsgabrielle®</p>
                                        <h3 className="text-[12px] text-white font-light mt-2 tracking-wide truncate">{item.name}</h3>
                                        <p className="text-[11px] text-slate-400 font-normal mt-2">${Number(item.price).toFixed(2)}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>

            <ModernFooter />
        </main>
    );
}
