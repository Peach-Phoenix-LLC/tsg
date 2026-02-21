import React from 'react';
import Link from 'next/link';

const ModernFooter = () => {
    return (
        <footer className="bg-[#0a0a0a] text-[#e7e7e7] pt-32 pb-16 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-10">
                        <h2 className="text-3xl font-light tracking-[0.25em] uppercase text-white">tsgabrielle</h2>
                        <p className="text-white/40 font-light text-[11px] leading-relaxed tracking-[0.05em] max-w-xs uppercase">
                            Redefining luxury through the lens of identity and artistic expression. Parisian roots. Global vision. Amethyst Era.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a href="https://www.instagram.com/tsgabrielle3" target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100 transition-opacity hover:text-[#a932bd]">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Collections Column */}
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.45em] mb-10 text-[#a932bd] font-light">Ecosystem</h3>
                        <ul className="flex flex-col gap-5">
                            <li><Link href="/shop" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-light">Shop All</Link></li>
                            <li><Link href="/collections" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-light">Collections</Link></li>
                            <li><Link href="/exclusive" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-light">Exclusive Access</Link></li>
                        </ul>
                    </div>
                    {/* Support Column */}
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.45em] mb-10 text-[#a932bd] font-light">Protocols</h3>
                        <ul className="flex flex-col gap-5">
                            <li><Link href="/about" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-light">The Vision</Link></li>
                            <li><Link href="/contact" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-light">Transfer Status</Link></li>
                            <li><Link href="/shipping-returns" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors font-light">Logistics</Link></li>
                        </ul>
                    </div>
                    {/* Newsletter Column */}
                    <div className="lg:pl-8">
                        <h3 className="text-[10px] uppercase tracking-[0.45em] mb-10 text-[#a932bd] font-light">Transmissions</h3>
                        <p className="text-[10px] text-white/30 mb-8 leading-relaxed uppercase tracking-widest font-light">Acknowledge updates and private invitations.</p>
                        <form className="flex border-b border-white/10 pb-4">
                            <input
                                type="email"
                                placeholder="IDENTITY@DOMAIN.COM"
                                className="bg-transparent text-white placeholder-white/10 focus:outline-none text-[10px] w-full uppercase tracking-[0.2em] font-light"
                            />
                            <button type="button" className="text-[10px] uppercase tracking-[0.3em] font-light text-[#a932bd] hover:text-white transition-colors ml-4">Sync</button>
                        </form>
                    </div>
                </div>
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-light">© 2026 TSGABRIELLE®. ALL IDENTITY RESERVED.</p>
                    <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] text-white/20 font-light">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Priority</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Usage Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;
