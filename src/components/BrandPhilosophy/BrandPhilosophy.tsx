"use client";

import React from 'react';
import styles from './BrandPhilosophy.module.css';

const BrandPhilosophy = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background}>
                <div className={styles.grain}></div>
                <div className={styles.light}></div>
            </div>

            <div className={styles.container}>
                <span className={styles.eyebrow}>THE MANIFESTO</span>
                <h2 className={styles.title}>
                    REDEFINING THE <br />
                    <span className={styles.accent}>DIGITAL ATELIER</span>
                </h2>

                <div className={styles.grid}>
                    <div className={styles.textBlock}>
                        <h3 className={styles.subTitle}>CRAFTSMANSHIP</h3>
                        <p className={styles.description}>
                            At tsgabrielle®, we blend traditional tailoring with computational design. Every piece is a dialogue between fabric and algorithm.
                        </p>
                    </div>

                    <div className={styles.textBlock}>
                        <h3 className={styles.subTitle}>INCLUSIVITY</h3>
                        <p className={styles.description}>
                            Gender is a spectrum, and style is its expression. We create garments for the soul, not the binary.
                        </p>
                    </div>

                    <div className={styles.textBlock}>
                        <h3 className={styles.subTitle}>SUSTAINABILITY</h3>
                        <p className={styles.description}>
                            On-demand production means zero waste. Luxury that respects the planet as much as the wearer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandPhilosophy;
