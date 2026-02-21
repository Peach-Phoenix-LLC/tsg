import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050406] text-white font-sans selection:bg-[#a932bd]/30">
            <ModernNavbar />

            {/* Hero Section - Immersive Image & Text */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzE8z0m0Z6qYfJ-3UjG2D7L8G2J2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2Z2"
                        alt="Parisian Atelier"
                        className="w-full h-full object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050406] via-transparent to-[#050406]"></div>
                </div>

                <div className="relative z-10 text-center px-8">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-[#a932bd] mb-6 animate-fade-in">L'Atelier des Rêves</p>
                    <h1 className="text-7xl md:text-9xl font-serif tracking-tighter mb-8 animate-slide-up">Our Story</h1>
                    <p className="text-sm md:text-base text-slate-400 font-light max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.2em]">
                        Founded in the heart of Paris, tsgabrielle® is a celebration of identity,
                        where traditional craftsmanship meets the visionary spirit of high-end avant-garde.
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                    <span className="material-symbols-outlined text-3xl font-light text-white">expand_more</span>
                </div>
            </section>

            {/* Content Section 1 - The Vision */}
            <section className="py-40 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <h2 className="text-5xl font-serif leading-tight">A Dialogue <br />Between <span className="text-[#a932bd]">Art</span> & Soul</h2>
                            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
                                <p>
                                    At tsgabrielle®, we believe that what you wear is the ultimate form of self-expression.
                                    Our journey began with a simple yet profound question:
                                    <i> How can we weave the complexity of the human spirit into the fabric of luxury?</i>
                                </p>
                                <p>
                                    Every piece we create is more than just a garment; it is a canvas.
                                    We source only the finest sustainable materials, ensuring that our commitment
                                    to the planet is as strong as our commitment to aesthetic excellence.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlcy-ObziwhUk21hAeBp7qwb4LDDHzBTgAV1TJYFocUudHKPBpDTQadWGtZfSk0dvi5XBYQCefBLH3GJHoOTReNiKvzmbcacs25pfaQwWAtt9SGDPw3bRYLcJ2g_Fxx-y5TeAL168rQbgiiyLiHUTIUOKKNSBCCmLb6l9y4-lR9rnOCm1mRor8QJHOBA0kephN5zEVn7fLg_EZSQKcMMSlsA_atVC_BPkWTH6ySitjvBQP1eD1uSrcfx7i7LQrcP_Rr4ib2mYaDoDS"
                                alt="Craftsmanship"
                                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="bg-white/5 py-40 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-[0.4em] text-[#a932bd] font-bold">Identity</h3>
                            <p className="text-xl font-light text-slate-300 leading-relaxed">
                                We celebrate the multifaceted nature of the modern individual. Our designs are gender-fluid, identity-affirming, and unapologetically bold.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-[0.4em] text-[#a932bd] font-bold">Provenance</h3>
                            <p className="text-xl font-light text-slate-300 leading-relaxed">
                                Designed in Paris, inspired by global culture. We maintain deep personal relationships with our artisans to ensure ethical production.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-[0.4em] text-[#a932bd] font-bold">Sustainability</h3>
                            <p className="text-xl font-light text-slate-300 leading-relaxed">
                                Zero-waste patterns, recycled luxury fabrics, and timeless silhouettes meant to last a lifetime, not a season.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-60 px-8 text-center bg-[#050406]">
                <div className="max-w-4xl mx-auto">
                    <span className="material-symbols-outlined text-6xl text-[#a932bd] mb-12 opacity-40">format_quote</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic leading-snug mb-12">
                        "Luxury is not about consumption. It is about the resonance between an object and the person who chooses it."
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500">— tsgabrielle® Creative Direction</p>
                </div>
            </section>

            <ModernFooter />
        </main>
    );
}
