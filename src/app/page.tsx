import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import NewHero from '@/components/Home/NewHero';
import Narrative from '@/components/Home/Narrative';
import CuratedCollections from '@/components/Home/CuratedCollections';
import Reviews from '@/components/Home/Reviews';
import ModernFooter from '@/components/Home/ModernFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light selection:bg-primary/30">
      <ModernNavbar />
      <NewHero />
      <Narrative />
      <CuratedCollections />
      <Reviews />
      <ModernFooter />
    </main>
  );
}
