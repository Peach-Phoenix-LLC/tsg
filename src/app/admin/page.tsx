"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './Admin.module.css';

const AdminDashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') return <div className={styles.loading}>Verifying Credentials...</div>;

    if (!session || (session.user as any).role !== 'ADMIN') {
        router.push('/');
        return null;
    }

    return (
        <div className={styles.adminPage}>
            <header className={styles.header}>
                <div className={styles.logo}>tsg® ADMIN</div>
                <div className={styles.user}>
                    <img src={session.user?.image || ''} alt="" className={styles.avatar} />
                    <span>{session.user?.name}</span>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <h4>Total Revenue</h4>
                        <p>$12,450.00</p>
                    </div>
                    <div className={styles.statCard}>
                        <h4>Active Orders</h4>
                        <p>24</p>
                    </div>
                    <div className={styles.statCard}>
                        <h4>Stock Alerts</h4>
                        <p>3 Items Low</p>
                    </div>
                </div>

                <div className={styles.managementSection}>
                    <div className={styles.sectionHeader}>
                        <h3>Product Management</h3>
                        <button className={styles.addBtn}>+ NEW PRODUCT</button>
                    </div>

                    <div className={styles.productTable}>
                        <div className={styles.tableHead}>
                            <span>SKU</span>
                            <span>Product</span>
                            <span>Stock</span>
                            <span>Price</span>
                            <span>Status</span>
                        </div>
                        {/* Placeholder rows */}
                        <div className={styles.tableRow}>
                            <span>TSG-IRID-01</span>
                            <span>Holographic Trench</span>
                            <span>12</span>
                            <span>$1,200</span>
                            <span className={styles.statusActive}>Active</span>
                        </div>
                        <div className={styles.tableRow}>
                            <span>TSG-ACCS-09</span>
                            <span>Prism Glass Chain</span>
                            <span>5</span>
                            <span>$450</span>
                            <span className={styles.statusLow}>Low Stock</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
