"use client";

import React from 'react';
import Link from 'next/link';
import styles from './CollectionsGrid.module.css';
import { collections } from '@/data/collectionsData';

const CollectionsGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>CURATED COLLECTIONS</h2>
                <div className={styles.divider}></div>

                <div className={styles.grid}>
                    {collections.map((collection, index) => {
                        const content = (
                            <div className={styles.card}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.innerImage}>
                                        <img src={collection.image} alt={collection.title} />
                                        <div className={styles.overlay}>
                                            <span className={styles.overlayText}>{collection.title}</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className={styles.cardTitle}>{collection.title}</h3>
                                <p className={styles.cardMeta}>{collection.count}</p>
                            </div>
                        );

                        return collection.path ? (
                            <Link key={index} href={collection.path}>
                                {content}
                            </Link>
                        ) : (
                            <div key={index}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CollectionsGrid;
