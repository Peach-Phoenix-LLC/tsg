"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ModernNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
                {/* Desktop Nav Links (Left) */}
                <nav className="hidden lg:flex items-center gap-12">
                    <Link href="/collections" className="luxury-link text-[11px] uppercase tracking-[0.2em] font-medium text-primary">Shop</Link>
                    <Link href="/collections" className="luxury-link text-[11px] uppercase tracking-[0.2em] font-medium text-primary">Collections</Link>
                    <Link href="/about" className="luxury-link text-[11px] uppercase tracking-[0.2em] font-medium text-primary">Our Story</Link>
                </nav>

                {/* Logo (Centered) */}
                <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
                    <h1 className="text-2xl tracking-[0.3em] font-serif text-primary group-hover:opacity-70 transition-opacity">
                        tsgabrielle
                    </h1>
                </Link>

                {/* Right Icons */}
                <div className="flex items-center gap-8">
                    <button className="p-2 text-primary hover:opacity-50 transition-opacity">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </button>
                    <Link href="/cart" className="p-2 text-primary hover:opacity-50 transition-opacity relative">
                        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                        <span className="absolute top-1 right-1 size-1 bg-accent rounded-full"></span>
                    </Link>
                    {/* Mobile Menu Trigger */}
                    <button className="lg:hidden p-2 text-primary">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default ModernNavbar;
