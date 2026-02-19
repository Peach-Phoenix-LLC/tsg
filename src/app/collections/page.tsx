import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CollectionsGrid from '@/components/CollectionsGrid/CollectionsGrid';

export const metadata = {
    title: 'Collections | tsgabrielle®',
    description: 'Archive of all tsgabrielle® thematic drops and curated collections.',
};

export default function CollectionsPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '80px', background: '#fff' }}>
                <CollectionsGrid />
            </div>
            <Footer />
        </main>
    );
}
