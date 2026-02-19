"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar/Navbar';
import styles from './Checkout.module.css';

export default function CheckoutPage() {
    const { cart, totalPrice } = useCart();
    const router = useRouter();

    // State
    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        zipCode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    console.log('Checkout Form Data:', formData);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('handleSubmit called. Current Step:', step);
        console.log('Validation Check:', {
            email: !formData.email,
            first: !formData.firstName,
            last: !formData.lastName,
            addr: !formData.address,
            city: !formData.city,
            zip: !formData.zipCode
        });

        if (step === 1) {
            // Validate shipping step
            if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.zipCode) {
                console.error("VALIDATION FAILED", formData);
                setError("Please fill in all required fields.");
                return;
            }
            console.log("Validation Passed. Setting step 2.");
            setStep(2);
        } else {
            // Payment Step
            setIsProcessing(true);
            try {
                const response = await fetch('/api/orders', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        items: cart,
                        total: totalPrice,
                        shipping: formData
                    })
                });

                if (response.ok) {
                    window.location.href = '/thank-you';
                } else {
                    const data = await response.json();
                    console.error("API ERROR DETAILS:", data);
                    setError(data.error || 'Order failed. Please try again.');
                    setIsProcessing(false);
                }
            } catch (error) {
                console.error('Checkout error:', error);
                setError('Connection error. Please try again.');
                setIsProcessing(false);
            }
        }
    };

    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.background}>
                <div className={styles.orb}></div>
                <div className={styles.grid}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.glassperspective}>
                    <div className={`${styles.glassCard} ${step === 2 ? styles.flipped : ''}`}>

                        {/* Front Face: Shipping */}
                        <div className={styles.faceFront}>
                            <h1 className={styles.title}>Shipping</h1>
                            <form onSubmit={handleSubmit} className={styles.form} noValidate>
                                <div className={styles.inputGroup}>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>
                                <div className={styles.row}>
                                    <input
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        required
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.firstName}
                                    />
                                    <input
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        required
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.lastName}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input
                                        name="address"
                                        type="text"
                                        placeholder="Address"
                                        required
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.address}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input
                                        name="apartment"
                                        type="text"
                                        placeholder="Apartment, suite, etc."
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.apartment}
                                    />
                                </div>
                                <div className={styles.row}>
                                    <input
                                        name="city"
                                        type="text"
                                        placeholder="City"
                                        required
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.city}
                                    />
                                    <input
                                        name="zipCode"
                                        type="text"
                                        placeholder="Zip Code"
                                        required
                                        className={styles.input}
                                        onChange={handleChange}
                                        value={formData.zipCode}
                                    />
                                </div>
                                {error && <div style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
                                <button type="submit" className={styles.primaryBtn}>
                                    Continue to Payment
                                </button>
                            </form>
                            <div className={styles.steps}>
                                <span className={`${styles.step} ${styles.active}`}>1</span>
                                <span className={styles.line}></span>
                                <span className={styles.step}>2</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Overlay */}
                    {step === 2 && (
                        <div className={styles.paymentOverlay}>
                            <div className={styles.paymentGlass}>
                                <h1 className={styles.title}>Payment</h1>
                                <div className={styles.creditCard}>
                                    <div className={styles.cardChip}></div>
                                    <input type="text" placeholder="0000 0000 0000 0000" className={styles.cardInput} readOnly />
                                    <div className={styles.cardRow}>
                                        <input type="text" placeholder="MM/YY" className={styles.cardInputSmall} readOnly />
                                        <input type="text" placeholder="CVC" className={styles.cardInputSmall} readOnly />
                                    </div>
                                </div>
                                {error && <div style={{ color: '#ff4d4d', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>{error}</div>}
                                <button onClick={handleSubmit} className={styles.payBtn} disabled={isProcessing}>
                                    {isProcessing ? 'Processing...' : `Pay $${totalPrice.toFixed(2)}`}
                                </button>
                                <button onClick={() => setStep(1)} className={styles.backBtn}>Back</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Order Summary */}
                <div className={styles.summary}>
                    <h3>Order Summary</h3>
                    {cart.map(item => (
                        <div key={item.id} className={styles.summaryItem}>
                            <span>{item.name} x{item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
