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
                    <h1 className="relative text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6 z-10 font-black" style={{
                        backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuACgX6FghISzJkcOqSIr9C_55Nn9QnRpLpvJVwXlvsMzwrlHa16FgxDfbHrD6Gh3OsRPx6yfx7SKv3UxZEmTIU3EfCMHJpKnU2fmLrcmtxMPqmCZ_sW9TgTOzXTSra8pni6X3Gtjmi9pvfWPYp-FlI4xv64s_2-IIAhmH9dsBJoKIlEapm-vStt1KZ9tFRzxi3qcHvKl4YmbXHwpVPLKFh5h6CFdJPb1ZI42SB8rwrZtjFMcxceVIaoatuiHnvL-B8gJbAQDuX1XzKS)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        textShadow: '0 0 30px rgba(169, 50, 189, 0.5)'
                    }}>
                        ELEGANCE IS AN<br />ATTITUDE
                    </h1>
                    <p className="relative text-white/90 text-xl md:text-2xl font-light tracking-wider mb-10 max-w-2xl drop-shadow-md z-10">
                        Discover the new era of fashion at tsgabrielle®.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Link
                        href="/product"
                        className="group relative inline-flex items-center justify-center px-10 py-4 font-light text-sm tracking-[0.1em] uppercase shadow-[0_4px_15px_rgba(169,50,189,0.4)] hover:shadow-[0_0_30px_rgba(169,50,189,0.9),0_0_20px_rgba(168,192,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] border border-white/50 hover:border-white/90 rounded-sm mt-4 text-white overflow-hidden transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #a932bd 0%, #8a209b 20%, #7a6fab 40%, #a8c0ff 60%, #a932bd 80%, #d8a6e6 100%)',
                            backgroundSize: '200% auto'
                        }}
                    >
                        <span className="relative z-10 drop-shadow-sm">Explore Collection</span>
                        <div className="absolute top-0 -left-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 z-20 group-hover:animate-[light-streak_0.8s_ease-out_forwards]"></div>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
