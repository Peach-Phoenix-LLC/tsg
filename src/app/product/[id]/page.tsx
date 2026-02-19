"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Recommendations from '@/components/Product/Recommendations';
import styles from './ProductPage.module.css';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

// Mock data fetcher - in real app would use params.id to fetch from Supabase
const PRODUCT = {
    id: "tsg-acc-001",
    title: "Holographic Silk Scarf",
    price: "$250.00",
    description: "Woven from bio-engineered silk strands infused with micro-prisms. This scarf changes color based on the viewing angle and ambient light temperature.",
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCn7d33aUR8mKHtpFidHn9nS5ApaGDapJ6dXVPRVyuKhuw9xgEbe51TUmGuQBvVOASjYf3FaGvH2J22yNN3PKLwxRkTJkJhJspQE7PlQc7KP6OD4o0v397Yb1ktF21xlJhwvbrjpHA9DHoQQOwKWAF01-TTXzJgcLPOD9XxNn3qWA-vNlJtibJFXNigcSQNscxeHq4JE5-_gs1QtVkWt7Ocixhaj9JkZxDe6PyU7VumiuuF3MIaULzZQVBSzLp6J6ER8hhdawFDs2X4",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDt8-9yL0w2j3k4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f", // Placeholder
        "https://lh3.googleusercontent.com/aida-public/AB6AXuE9-0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef" // Placeholder
    ],
    variants: ["Prism White", "Void Black", "Cyber Silver"],
    details: [
        "100% Bio-Silk",
        "Hand-finished in Paris",
        "Hydro-phobic coating"
    ]
};

export default function ProductPage({ params }: { params: { id: string } }) {
    const { addToCart } = useCart();
    const router = useRouter();
    const [selectedVariant, setSelectedVariant] = useState(PRODUCT.variants[0]);
    const [activeImage, setActiveImage] = useState(0);

    const handleAddToCart = () => {
        addToCart({
            id: PRODUCT.id,
            name: PRODUCT.title,
            price: parseFloat(PRODUCT.price.replace('$', '')),
            quantity: 1,
            imageUrl: PRODUCT.images[0]
        });
        router.push('/cart');
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.gallery}>
                <div className={styles.mainImageWrapper}>
                    <Image
                        src={PRODUCT.images[activeImage] || PRODUCT.images[0]}
                        alt={PRODUCT.title}
                        fill
                        className={styles.mainImage}
                        priority
                    />
                </div>
                <div className={styles.thumbnails}>
                    {PRODUCT.images.slice(0, 3).map((img, idx) => (
                        <div
                            key={idx}
                            className={`${styles.thumbnail} ${activeImage === idx ? styles.activeThumb : ''}`}
                            onClick={() => setActiveImage(idx)}
                        >
                            <Image src={img} alt={`View ${idx}`} fill className={styles.thumbImage} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.sheet}>
                <div className={styles.handle}></div>

                <div className={styles.header}>
                    <h1 className={styles.title}>{PRODUCT.title}</h1>
                    <div className="flex flex-col items-end">
                        <span className={styles.price}>{PRODUCT.price}</span>
                        <div className="flex items-center gap-1.5 mt-1 text-[10px] font-bold text-primary uppercase tracking-tighter animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(171,47,193,0.8)]"></span>
                            Low Stock: Only 3 remaining
                        </div>
                    </div>
                </div>

                <div className={styles.variants}>
                    <span className={styles.label}>Select Variant</span>
                    <div className={styles.variantGrid}>
                        {PRODUCT.variants.map(v => (
                            <button
                                key={v}
                                className={`${styles.variantBtn} ${selectedVariant === v ? styles.variantActive : ''}`}
                                onClick={() => setSelectedVariant(v)}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                <p className={styles.description}>
                    {PRODUCT.description}
                </p>

                <div className={styles.details}>
                    <span className={styles.label}>Details</span>
                    <ul className={styles.detailList}>
                        {PRODUCT.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                </div>

                <div className={styles.stickyAction}>
                    <button
                        className={styles.addToBagBtn}
                        onClick={handleAddToCart}
                    >
                        Add to Bag — {PRODUCT.price}
                    </button>
                </div>
            </div>

            <Recommendations />
        </main>
    );
}
