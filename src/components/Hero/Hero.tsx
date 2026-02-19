"use client";

import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.background}>
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7d33aUR8mKHtpFidHn9nS5ApaGDapJ6dXVPRVyuKhuw9xgEbe51TUmGuQBvVOASjYf3FaGvH2J22yNN3PKLwxRkTJkJhJspQE7PlQc7KP6OD4o0v397Yb1ktF21xlJhwvbrjpHA9DHoQQOwKWAF01-TTXzJgcLPOD9XxNn3qWA-vNlJtibJFXNigcSQNscxeHq4JE5-_gs1QtVkWt7Ocixhaj9JkZxDe6PyU7VumiuuF3MIaULzZQVBSzLp6J6ER8hhdawFDs2X4"
                    alt="Hero Fashion Model"
                    className={styles.backgroundImage}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.holoOverlay}></div>
                <h1 className={styles.title}>
                    ELEGANCE IS AN<br />ATTITUDE
                </h1>
                <p className={styles.subtitle}>
                    Discover the new era of fashion at tsgabrielle®.
                </p>
                <button className={styles.btn}>
                    Explore Collection
                </button>
            </div>
        </div>
    );
};

export default Hero;
