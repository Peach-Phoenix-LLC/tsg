"use client";

import React, { useEffect, useState } from 'react';
import styles from './CollectionShowcase.module.css';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
}

const CollectionShowcase = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                // Fetch only the Iridescence category
                const response = await fetch('/api/products?category=Iridescence');
                if (!response.ok) throw new Error('Failed to fetch collection');
                const data = await response.json();

                if (data && typeof data === 'object' && 'error' in data) {
                    throw new Error(data.error);
                }

                // If no results, fallback to all products for demo purposes
                if (Array.isArray(data) && data.length === 0) {
                    const fallbackRes = await fetch('/api/products');
                    const fallbackData = await fallbackRes.json();
                    setProducts(Array.isArray(fallbackData) ? fallbackData : []);
                } else {
                    setProducts(Array.isArray(data) ? data : []);
                }
            } catch (error) {
                console.error("Failed to fetch collection:", error);
                // Set empty array to avoid crash on map
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCollection();
    }, []);

    if (loading) return <div className={styles.loader}>INITIALIZING COLLECTION...</div>;

    return (
        <section className={styles.showcase}>
            <div className={styles.header}>
                <h2 className={styles.title}>THE DROPS</h2>
                <div className={styles.filterBar}>
                    <span className={styles.activeFilter}>ALL PIECES</span>
                    <span>OUTERWEAR</span>
                    <span>ACCESSORIES</span>
                </div>
            </div>

            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={product.imageUrl || '/placeholder.jpg'} alt={product.name} />
                            <div className={styles.cardOverlay}>
                                <button className={styles.quickAdd}>QUICK ADD</button>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.price}>${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollectionShowcase;
