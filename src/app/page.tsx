"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ModernNavbar from '@/components/Home/ModernNavbar';
import NewHero from '@/components/Home/NewHero';
import Narrative from '@/components/Home/Narrative';
import HotspotCampaign from '@/components/Home/HotspotCampaign';
import CuratedCollections from '@/components/Home/CuratedCollections';
import Reviews from '@/components/Home/Reviews';
import ModernFooter from '@/components/Home/ModernFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-accent/30 selection:text-white">
      <ModernNavbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <NewHero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Narrative />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <HotspotCampaign />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <CuratedCollections />
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
