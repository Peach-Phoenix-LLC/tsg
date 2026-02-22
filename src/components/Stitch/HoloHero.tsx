"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HoloHero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <img
                    alt="Hero Fashion Model"
                    className="w-full h-full object-cover brightness-[0.6] contrast-[0.9]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7d33aUR8mKHtpFidHn9nS5ApaGDapJ6dXVPRVyuKhuw9xgEbe51TUmGuQBvVOASjYf3FaGvH2J22yNN3PKLwxRkTJkJhJspQE7PlQc7KP6OD4o0v397Yb1ktF21xlJhwvbrjpHA9DHoQQOwKWAF01-TTXzJgcLPOD9XxNn3qWA-vNlJtibJFXNigcSQNscxeHq4JE5-_gs1QtVkWt7Ocixhaj9JkZxDe6PyU7VumiuuF3MIaULzZQVBSzLp6J6ER8hhdawFDs2X4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
            </motion.div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="relative px-8 py-6"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-primary/5 to-holo-cyan/5 bg-[length:400%_400%] animate-[subtle-shift_10s_ease_infinite_alternate] backdrop-blur-[2px] rounded-lg border border-white/10 -z-10"></div>
                    <h1 className="relative text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6 z-10 font-light text-white drop-shadow-lg">
                        Elegance is an<br />attitude
                    </h1>
                    <p className="relative text-white/90 text-xl md:text-2xl font-light mb-10 max-w-2xl drop-shadow-md z-10">
                        Discover the new era of fashion at tsgabrielle®.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Link
                        href="/shop"
                        className="group relative inline-flex items-center justify-center px-10 py-4 font-light text-sm border border-white/50 hover:border-white rounded-sm mt-4 text-white overflow-hidden transition-all duration-300 hover:bg-white/10"
                    >
                        <span className="relative z-10">Explore collection</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
