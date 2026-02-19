"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import { useCart } from "@/context/CartContext";
import styles from './Navbar.module.css';

const Navbar = () => {
    const { data: session } = useSession();
    const { totalItems } = useCart();

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logoContainer}>
                        <Link href="/">
                            <div className={styles.logoWrapper}>
                                <Image
                                    src="/images/logo-white.png"
                                    alt="tsgabrielle® white logo"
                                    width={120}
                                    height={30}
                                    className={styles.logoWhite}
                                    priority
                                />
                                <Image
                                    src="/images/logo-purple.png"
                                    alt="tsgabrielle® purple logo"
                                    width={120}
                                    height={30}
                                    className={styles.logoPurple}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    <div className={styles.links}>
                        <Link href="/categories" className={styles.link}>Categories</Link>
                        <Link href="/clothing" className={styles.link}>Clothing</Link>
                        <Link href="/collections/iridescence" className={styles.link}>Iridescence</Link>
                        <Link href="/collections" className={styles.link}>Collections</Link>
                    </div>

                    <div className={styles.actions}>
                        <span className={`material-symbols-outlined ${styles.icon}`}>search</span>
                        <span className={`material-symbols-outlined ${styles.icon}`}>favorite</span>
                        <Link href="/cart" className={styles.cartBtn}>
                            <span className={`material-symbols-outlined ${styles.icon}`}>shopping_bag</span>
                            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                        </Link>
                        {session ? (
                            <button className={styles.iconBtn} onClick={() => signOut()}>
                                <span className={`material-symbols-outlined ${styles.icon}`}>logout</span>
                            </button>
                        ) : (
                            <button className={styles.iconBtn} onClick={() => signIn('google')}>
                                <span className={`material-symbols-outlined ${styles.icon}`}>person</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
