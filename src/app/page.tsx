import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
// import Hero from '@/components/Hero/Hero'; // Deprecated for Mobile First design
import IridescenceHero from '@/components/IridescenceHero/IridescenceHero';
import { MobileCategories } from '@/components/MobileHome/MobileCategories';
import CollectionShowcase from '@/components/CollectionShowcase/CollectionShowcase';
import CollectionsGrid from '@/components/CollectionsGrid/CollectionsGrid';
import BrandPhilosophy from '@/components/BrandPhilosophy/BrandPhilosophy';
import Manifesto from '@/components/Manifesto/Manifesto';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <IridescenceHero />
      <MobileCategories />
      <CollectionShowcase />
      <CollectionsGrid />
      <BrandPhilosophy />
      <Manifesto />
      <ProductGrid />
      <Footer />
    </main>
  );
}
