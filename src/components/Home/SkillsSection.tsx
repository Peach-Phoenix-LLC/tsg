"use client";
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        title: "Precision Craftsmanship",
        description: "Every stitch is a testament to our commitment to artisanal excellence and durability.",
        icon: "architecture",
        color: "from-purple-500 to-indigo-600"
    },
    {
        title: "Neo-Holographic Tech",
        description: "Integrating smart fabrics and light-reactive textures for a modern, fluid aesthetic.",
        icon: "deployed_code",
        color: "from-blue-400 to-cyan-500"
    },
    {
        title: "Identity-Forward Design",
        description: "Fashion designed to empower the self-expression of the modern individual.",
        icon: "fingerprint",
        color: "from-pink-500 to-rose-600"
    },
    {
        title: "Artisanal AI",
        description: "Leveraging advanced intelligence to optimize fit and minimize environmental impact.",
        icon: "auto_awesome",
        color: "from-amber-400 to-orange-500"
    }
];

export default function SkillsSection() {
    return (
        <section className="bg-bg-light py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-light text-[12px] mb-4"
                    >
                        The maison's core
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-dark text-5xl md:text-7xl font-light mb-8"
                    >
                        Synergetic <span className="italic text-primary">foundations</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="h-px bg-primary/20 mx-auto"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full bg-white border border-primary/10 rounded-sm p-8 hover:border-primary/40 transition-all duration-500">
                                <div className="mb-6 relative">
                                    <span className="material-symbols-outlined text-primary font-light text-3xl">
                                        {skill.icon}
                                    </span>
                                </div>

                                <h3 className="text-text-dark text-xl font-light mb-3 transition-colors">
                                    {skill.title}
                                </h3>
                                <p className="text-text-dark/50 text-sm font-light leading-relaxed">
                                    {skill.description}
                                </p>

                                <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-[12px] text-text-dark/30 font-light">Excellence</span>
                                    <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
