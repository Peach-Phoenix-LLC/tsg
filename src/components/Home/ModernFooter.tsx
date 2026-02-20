import React from 'react';

const ModernFooter = () => {
    return (
        <footer className="bg-primary text-white pt-24 pb-12">
            <div className="max-w-[1400px] mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl font-serif tracking-[0.2em] uppercase">tsgabrielle</h2>
                        <p className="text-white/50 font-light text-sm leading-relaxed tracking-wide max-w-xs">
                            Redefining luxury through the lens of identity and artistic expression. Parisian roots, global vision.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity">
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Links Column */}
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-accent">Collections</h3>
                        <ul className="flex flex-col gap-4">
                            <li><a href="/collections/dresses" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Dresses</a></li>
                            <li><a href="/collections/accessories" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Accessories</a></li>
                            <li><a href="/collections/new-arrivals" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">New Arrivals</a></li>
                        </ul>
                    </div>
                    {/* Links Column */}
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-accent">Maison</h3>
                        <ul className="flex flex-col gap-4">
                            <li><a href="/about" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="/contact" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Contact</a></li>
                            <li><a href="/shipping" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors">Shipping</a></li>
                        </ul>
                    </div>
                    {/* Newsletter Column */}
                    <div className="lg:pl-8">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] mb-8 text-accent">Newsletter</h3>
                        <p className="text-xs text-white/40 mb-6 leading-relaxed">Subscribe to receive exclusive drops and private invitations.</p>
                        <form className="flex border-b border-white/20 pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent text-white placeholder-white/20 focus:outline-none text-xs w-full uppercase tracking-widest"
                            />
                            <button type="button" className="text-[10px] uppercase tracking-[0.2em] font-medium ml-4">Join</button>
                        </form>
                    </div>
                </div>
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">© 2026 tsgabrielle. All Rights Reserved.</p>
                    <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-white/20">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;
