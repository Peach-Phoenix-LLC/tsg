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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-white/20 py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* Mobile Menu Trigger */}
                <button className="lg:hidden p-2 text-slate-900 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">menu</span>
                </button>

                {/* Desktop Nav Links (Left) */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">Shop</Link>
                    <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">Collections</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">About</Link>
                </nav>

                {/* Logo (Centered) */}
                <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
                    <img
                        src="/images/logo-purple.png"
                        alt="tsgabrielle logo"
                        className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </button>
                    <button className="p-2 hover:bg-slate-100 rounded-full transition-colors hidden sm:block">
                        <span className="material-symbols-outlined text-[20px]">person</span>
                    </button>
                    <Link href="/cart" className="p-2 hover:bg-slate-100 rounded-full transition-colors relative">
                        <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                        <span className="absolute top-1 right-1 size-2 bg-primary rounded-full"></span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default ModernNavbar;
