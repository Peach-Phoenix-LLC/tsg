"use client";

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2 className={styles.logoText}>tsgabrielle.net</h2>
                    <div className={styles.dividerShort}></div>
                    <div className={styles.glow}></div>
                </div>

                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h4>tsgabrielle® Academy</h4>
                        <p>123 Fashion Street</p>
                        <p>Paris, FR 75001</p>
                        <p style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            Made with Love & Style
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Info</h4>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Discover</h4>
                        <ul>
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Collections</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.payment}>
                            <h5 style={{ fontSize: '0.625rem', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.8, letterSpacing: '0.1em' }}>
                                We Accept
                            </h5>
                            <div className={styles.paymentGrid}>
                                <span>credit_card</span>
                                <span>payments</span>
                                <span>account_balance_wallet</span>
                                <span>account_balance</span>
                                <span>phone_iphone</span>
                                <span>language</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}>IG</a>
                        <a href="#" className={styles.socialLink}>FB</a>
                        <a href="#" className={styles.socialLink}>TW</a>
                    </div>
                    <div>
                        <p>© 2023 tsgabrielle®. Designed in France with Love.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                            <a href="#" style={{ color: 'white' }}>Privacy</a>
                            <a href="#" style={{ color: 'white' }}>Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
