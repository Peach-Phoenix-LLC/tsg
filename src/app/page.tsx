"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ModernNavbar from '@/components/Home/ModernNavbar';
import Reviews from '@/components/Home/Reviews';
import ModernFooter from '@/components/Home/ModernFooter';
import HoloHero from '@/components/Stitch/HoloHero';
import HoloCategories from '@/components/Stitch/HoloCategories';
import HoloPhilosophy from '@/components/Stitch/HoloPhilosophy';
import HoloCollections from '@/components/Stitch/HoloCollections';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light selection:bg-accent-purple/30 selection:text-white">
      <ModernNavbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HoloHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HoloCategories />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HoloPhilosophy />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HoloCollections />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Reviews />
      </motion.div>

      <ModernFooter />
    </main>
  );
}
