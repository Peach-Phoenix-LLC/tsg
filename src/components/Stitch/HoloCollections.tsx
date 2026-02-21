"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface CollectionProduct {
    id: string;
    name: string;
    image_url: string | null;
    seo_description: string | null;
    category: string;
}

interface HoloCollectionsProps {
    products: CollectionProduct[];
}

export default function HoloCollections({ products }: HoloCollectionsProps) {
    return (
        <section className="relative w-full overflow-hidden bg-white py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2
                        className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight font-sans"
                        style={{
                            backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuACgX6FghISzJkcOqSIr9C_55Nn9QnRpLpvJVwXlvsMzwrlHa16FgxDfbHrD6Gh3OsRPx6yfx7SKv3UxZEmTIU3EfCMHJpKnU2fmLrcmtxMPqmCZ_sW9TgTOzXTSra8pni6X3Gtjmi9pvfWPYp-FlI4xv64s_2-IIAhmH9dsBJoKIlEapm-vStt1KZ9tFRzxi3qcHvKl4YmbXHwpVPLKFh5h6CFdJPb1ZI42SB8rwrZtjFMcxceVIaoatuiHnvL-B8gJbAQDuX1XzKS)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        CURATED COLLECTIONS
                    </h2>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6 shadow-[0_0_10px_rgba(254,240,138,0.8)]"></div>
                    <p className="text-xl text-gray-500 font-light font-lato">
                        Discover our most beautiful selections by <span className="text-primary font-normal">tsgabrielle® USA</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
                    {products.slice(0, 4).map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Link href={`/product/${product.id}`} className="flex flex-col items-center group cursor-pointer">
                                {/* Holographic Border Container */}
                                <div className="relative p-[3px] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.4),rgba(169,50,189,0.4),rgba(255,255,255,0.8),rgba(0,255,255,0.25),rgba(255,0,255,0.3))] bg-[length:300%_300%] animate-[holo-border-shimmer_4s_ease_infinite] shadow-[0_0_20px_rgba(169,50,189,0.25)] w-60 h-60 md:w-64 md:h-64 transition-transform duration-500 group-hover:-translate-y-2">
                                    {/* Inner Rotating Glow */}
                                    <div className="absolute inset-[-2px] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.8),rgba(169,50,189,0.6),rgba(0,255,255,0.5),transparent)] opacity-0 group-hover:opacity-80 transition-opacity duration-500 animate-spin-slow z-0"></div>

                                    {/* Image Circle */}
                                    <div className="w-full h-full bg-white relative z-10 rounded-full overflow-hidden">

                                        {/* Optional Floating Badge logic */}
                                        {index === 0 && (
                                            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.4)_100%)] shadow-[0_0_10px_rgba(169,50,189,0.2),inset_0_0_5px_rgba(255,255,255,0.3)] border border-white/60 backdrop-blur-sm text-primary-dark font-semibold text-[10px] px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest text-center min-w-[120px] justify-center">
                                                ★ TRANSCENDENT
                                            </div>
                                        )}
                                        {index === 2 && (
                                            <div className="absolute top-10 w-full text-center z-20">
                                                <span className="text-purple-600 font-light text-xl tracking-[0.2em] uppercase drop-shadow-sm bg-white/60 px-4 py-1 rounded-full backdrop-blur-sm">Exclusive</span>
                                            </div>
                                        )}

                                        {product.image_url ? (
                                            <img
                                                alt={product.name}
                                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 0 ? 'brightness-75' : ''} ${index === 2 ? 'opacity-90' : ''}`}
                                                src={product.image_url}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">No Image</div>
                                        )}

                                        {/* Iridescent Overlay on Hover */}
                                        <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_30%,rgba(255,255,255,0.3)_45%,rgba(169,50,189,0.15)_50%,rgba(255,255,255,0.3)_55%,transparent_70%)] mix-blend-overlay opacity-30 group-hover:opacity-70 bg-[length:200%_200%] animate-[shimmer-diag_4s_ease-in-out_infinite] transition-opacity duration-500 pointer-events-none z-10"></div>

                                        <div className={`absolute inset-0 flex items-center justify-center transition-colors z-20 ${index === 1 ? 'bg-black/20 group-hover:bg-black/10' : ''}`}>
                                            {/* Center texts if applicable */}
                                            {index === 1 && <span className="text-white font-light text-2xl italic drop-shadow-lg opacity-90 tracking-wide text-center px-4">{product.seo_description || product.category}</span>}
                                            {index === 0 && (
                                                <div className="absolute bottom-10 w-full text-center px-4">
                                                    <span className="text-yellow-100 font-light italic text-xl drop-shadow-lg tracking-wide">Signature</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-8 text-xl font-normal text-gray-900 tracking-wide text-center bg-[linear-gradient(to_right,#333_0%,#a932bd_20%,#00b4d8_40%,#a932bd_60%,#333_100%)] bg-[length:200%_auto] bg-clip-text [-webkit-background-clip:text] group-hover:text-transparent group-hover:animate-[foil-shine_3s_linear_infinite] transition-colors duration-300 font-lato">
                                    {product.name}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-24 text-center"
                >
                    <Link
                        href="/collections"
                        className="group relative inline-flex items-center justify-center px-12 py-4 font-light text-sm tracking-[0.15em] uppercase shadow-[0_4px_15px_rgba(169,50,189,0.4)] hover:shadow-[0_0_30px_rgba(169,50,189,0.9),0_0_20px_rgba(168,192,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] border border-white/50 hover:border-white/90 rounded-sm text-white overflow-hidden transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #a932bd 0%, #8a209b 20%, #7a6fab 40%, #a8c0ff 60%, #a932bd 80%, #d8a6e6 100%)',
                            backgroundSize: '200% auto'
                        }}
                    >
                        <span className="relative z-10 drop-shadow-sm font-lato">View All Collections</span>
                    </Link>
                </motion.div>

            </div>

            {/* The separator line */}
            <div className="absolute top-0 w-full h-[1px] bg-[linear-gradient(90deg,transparent,rgba(169,50,189,0.2),rgba(0,255,255,0.5),rgba(255,255,255,0.8),rgba(255,0,255,0.5),rgba(169,50,189,0.2),transparent)] bg-[length:200%_100%] animate-[shimmer-h_3s_linear_infinite] mx-auto"></div>
        </section >
    );
}
