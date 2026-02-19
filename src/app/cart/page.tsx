"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from './Cart.module.css';

const CartPage = () => {
    const { cart, removeFromCart, totalPrice, clearCart } = useCart();

    const paypalOptions = {
        clientId: "test", // Replace with your real client ID
        currency: "USD",
        intent: "capture",
    };

    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <h1 className={styles.title}>YOUR SHOPPING BAG</h1>

                {cart.length === 0 ? (
                    <div className={styles.empty}>
                        <p>Your bag is empty.</p>
                        <a href="/" className={styles.continueBtn}>Continue Shopping</a>
                    </div>
                ) : (
                    <div className={styles.layout}>
                        <div className={styles.items}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <img src={item.imageUrl} alt={item.name} />
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <h3>{item.name}</h3>
                                        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                                        <p className={styles.itemQty}>Qty: {item.quantity}</p>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.summary}>
                            <h2>ORDER SUMMARY</h2>
                            <div className={styles.summaryRow}>
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <div className={`${styles.summaryRow} ${styles.total}`}>
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                            <div className={styles.paypalContainer}>
                                <PayPalScriptProvider options={paypalOptions}>
                                    <PayPalButtons
                                        style={{ layout: "vertical", color: "gold", shape: "rect", label: "checkout" }}
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                intent: "CAPTURE",
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            currency_code: "USD",
                                                            value: totalPrice.toFixed(2),
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={async (data, actions) => {
                                            const details = await actions.order?.capture();
                                            alert("Transaction completed by " + details?.payer?.name?.given_name || "customer");
                                            clearCart();
                                        }}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
};

export default CartPage;
