"use client";

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './Admin.module.css';

interface ProductVariant {
    sku: string;
    color?: string;
    size?: string;
    stock: number;
}

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    imageUrl?: string;
    variants: ProductVariant[];
}

const NAV_ITEMS = [
    { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
    { id: 'orders', label: 'Orders', icon: '🛍' },
    { id: 'products', label: 'Products', icon: '👗' },
    { id: 'collections', label: 'Collections', icon: '📁' },
    { id: 'customers', label: 'Customers', icon: '👤' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
];

const MOCK_ORDERS = [
    { id: '#ORD-7829', customer: 'Gabrielle S.', avatar: 'GS', product: 'Silk Evening Gown', date: 'Oct 24, 2023', total: '$340.00', status: 'Processing' },
    { id: '#ORD-7828', customer: 'Alex M.', avatar: 'AM', product: 'Leather Tote Bag', date: 'Oct 24, 2023', total: '$120.00', status: 'Shipped' },
    { id: '#ORD-7827', customer: 'Jordan K.', avatar: 'JK', product: "Pride '25 Bomber", date: 'Oct 23, 2023', total: '$850.00', status: 'Delivered' },
    { id: '#ORD-7826', customer: 'Maya T.', avatar: 'MT', product: 'Crystal Corset Top', date: 'Oct 23, 2023', total: '$1,200.00', status: 'Processing' },
    { id: '#ORD-7825', customer: 'Riley B.', avatar: 'RB', product: 'Paris Blazer', date: 'Oct 22, 2023', total: '$480.00', status: 'Shipped' },
];

const STATUS_BADGE: Record<string, string> = {
    Processing: styles.badgeProcessing,
    Shipped: styles.badgeShipped,
    Delivered: styles.badgeDelivered,
    Pending: styles.badgePending,
};

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [products, setProducts] = useState<Product[]>([]);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        if (activeTab === 'products') {
            setLoadingProducts(true);
            fetch('/api/products')
                .then(r => r.json())
                .then(data => { setProducts(data); setLoadingProducts(false); })
                .catch(() => setLoadingProducts(false));
        }
        if (activeTab === 'orders') {
            fetch('/api/orders')
                .then(r => r.json())
                .then(data => setOrders(data))
                .catch(err => console.error(err));
        }
    }, [activeTab]);

    if (status === 'loading') {
        return (
            <div className={styles.loadingScreen}>
                <div className={styles.loadingSpinner} />
                <p>Verifying credentials...</p>
            </div>
        );
    }

    if (!session || (session.user as { role?: string }).role !== 'ADMIN') {
        router.push('/');
        return null;
    }

    const userName = session.user?.name ?? 'Admin';
    const userInitials = userName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

    return (
        <div className={styles.shell}>

            {/* ── SIDEBAR ─────────────────────────── */}
            <aside className={styles.sidebar}>
                {/* Logo */}
                <div className={styles.sidebarLogo}>
                    <div className={styles.logoIcon}>◆</div>
                    <span className={styles.logoText}>tsgabrielle<sup>®</sup></span>
                </div>

                {/* Nav */}
                <nav className={styles.sidebarNav}>
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={`${styles.navItem} ${activeTab === item.id ? styles.navItemActive : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <span className={styles.navIcon}>{item.icon}</span>
                            <span className={styles.navLabel}>{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* User */}
                <div className={styles.sidebarUser}>
                    <div className={styles.userAvatar}>
                        {session.user?.image
                            ? <img src={session.user.image} alt="" />
                            : <span>{userInitials}</span>
                        }
                        <span className={styles.onlineDot} />
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{userName.split(' ')[0]} {userName.split(' ')[1]?.[0]}.</span>
                        <span className={styles.userRole}>Admin</span>
                    </div>
                </div>
            </aside>

            {/* ── MAIN CONTENT ─────────────────────── */}
            <div className={styles.mainArea}>

                {/* ── DASHBOARD ────────────────────── */}
                {activeTab === 'dashboard' && (
                    <>
                        {/* Top header */}
                        <header className={styles.pageHeader}>
                            <div className={styles.pageTitle}>
                                <h1>Business Overview</h1>
                                <p>Welcome back, here&apos;s what&apos;s happening today.</p>
                            </div>
                            <div className={styles.headerRight}>
                                <div className={styles.searchBox}>
                                    <span className={styles.searchIcon}>🔍</span>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        className={styles.searchInput}
                                    />
                                </div>
                                <button className={styles.notifBtn}>🔔<span className={styles.notifDot} /></button>
                            </div>
                        </header>

                        <div className={styles.dashboardLayout}>
                            <div className={styles.dashboardMain}>

                                {/* KPI Cards */}
                                <div className={styles.kpiRow}>
                                    <div className={styles.kpiCard}>
                                        <div className={styles.kpiTopRow}>
                                            <div className={`${styles.kpiIconBox} ${styles.kpiIconPurple}`}>💳</div>
                                            <span className={styles.kpiDelta}>+12.5%</span>
                                        </div>
                                        <div className={styles.kpiLabel}>Total Sales</div>
                                        <div className={`${styles.kpiValue} ${styles.kpiValuePurple}`}>$124,500</div>
                                    </div>
                                    <div className={styles.kpiCard}>
                                        <div className={styles.kpiTopRow}>
                                            <div className={`${styles.kpiIconBox} ${styles.kpiIconBlue}`}>👥</div>
                                            <span className={styles.kpiDelta}>+5.2%</span>
                                        </div>
                                        <div className={styles.kpiLabel}>New Customers</div>
                                        <div className={styles.kpiValue}>1,240</div>
                                    </div>
                                    <div className={styles.kpiCard}>
                                        <div className={styles.kpiTopRow}>
                                            <div className={`${styles.kpiIconBox} ${styles.kpiIconGreen}`}>📦</div>
                                            <span className={styles.kpiDelta}>+8.4%</span>
                                        </div>
                                        <div className={styles.kpiLabel}>Order Volume</div>
                                        <div className={styles.kpiValue}>856</div>
                                    </div>
                                </div>

                                {/* Recent Orders */}
                                <div className={styles.panel}>
                                    <div className={styles.panelHeader}>
                                        <h3>Recent Orders</h3>
                                        <button className={styles.viewAllBtn} onClick={() => setActiveTab('orders')}>View All</button>
                                    </div>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th>ORDER ID</th>
                                                <th>CUSTOMER</th>
                                                <th>PRODUCT</th>
                                                <th>DATE</th>
                                                <th>TOTAL</th>
                                                <th>STATUS</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {MOCK_ORDERS.map(order => (
                                                <tr key={order.id}>
                                                    <td className={styles.orderId}>{order.id}</td>
                                                    <td>
                                                        <div className={styles.customerCell}>
                                                            <span className={styles.miniAvatar}>{order.avatar}</span>
                                                            {order.customer}
                                                        </div>
                                                    </td>
                                                    <td>{order.product}</td>
                                                    <td className={styles.dateCell}>{order.date}</td>
                                                    <td className={styles.totalCell}>{order.total}</td>
                                                    <td>
                                                        <span className={`${styles.badge} ${STATUS_BADGE[order.status] ?? ''}`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td><button className={styles.menuBtn}>⋮</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* ── RIGHT PANEL ──────────────────── */}
                            <aside className={styles.rightPanel}>
                                {/* Quick Actions */}
                                <div className={styles.quickActions}>
                                    <h4>Quick Actions</h4>
                                    <button className={styles.addProductBtn} onClick={() => setActiveTab('products')}>
                                        <span>+</span> Add New Product
                                    </button>
                                    <button className={styles.exportBtn}>
                                        <span>↓</span> Export Report
                                    </button>
                                </div>

                                {/* Trending */}
                                <div className={styles.trendingCard}>
                                    <div className={styles.trendingHeader}>
                                        <span className={styles.trendingLabel}>TRENDING NOW</span>
                                        <span className={styles.trendingArrow}>↗</span>
                                    </div>
                                    <div className={styles.trendingImg}>
                                        <div className={styles.trendingOverlay}>
                                            <p className={styles.trendingTitle}>Summer Collection &apos;24</p>
                                            <p className={styles.trendingSub}>245 Sold this week</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </>
                )}

                {/* ── ORDERS TAB ─────────────────────── */}
                {activeTab === 'orders' && (
                    <div className={styles.tabContent}>
                        <header className={styles.pageHeader}>
                            <div className={styles.pageTitle}><h1>Orders</h1><p>Manage all customer orders.</p></div>
                        </header>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}><h3>All Orders</h3></div>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>ORDER ID</th><th>CUSTOMER</th><th>TOTAL</th>
                                        <th>DATE</th><th>STATUS</th><th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order: any) => (
                                        <tr key={order.id}>
                                            <td className={styles.orderId}>#{order.id.slice(-6).toUpperCase()}</td>
                                            <td>
                                                <div className={styles.customerCell}>
                                                    <span className={styles.miniAvatar}>{(order.firstName?.[0] || order.guestEmail?.[0] || '?').toUpperCase()}</span>
                                                    {order.firstName ? `${order.firstName} ${order.lastName}` : (order.guestEmail || 'Guest')}
                                                </div>
                                            </td>
                                            <td className={styles.totalCell}>${order.total.toFixed(2)}</td>
                                            <td className={styles.dateCell}>{new Date(order.createdAt).toLocaleDateString()}</td>
                                            <td><span className={`${styles.badge} ${STATUS_BADGE[order.status] ?? ''}`}>{order.status}</span></td>
                                            <td><button className={styles.menuBtn}>⋮</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ── PRODUCTS TAB ─────────────────────── */}
                {activeTab === 'products' && (
                    <div className={styles.tabContent}>
                        <header className={styles.pageHeader}>
                            <div className={styles.pageTitle}><h1>Products</h1><p>Manage your product catalog.</p></div>
                            <button className={styles.addProductBtn}>+ Add New Product</button>
                        </header>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}><h3>All Products <span className={styles.count}>{products.length}</span></h3></div>
                            {loadingProducts ? (
                                <div className={styles.tableLoading}>Loading from Supabase...</div>
                            ) : (
                                <table className={styles.table}>
                                    <thead>
                                        <tr><th>PRODUCT</th><th>CATEGORY</th><th>PRICE</th><th>STOCK</th><th>VARIANTS</th><th></th></tr>
                                    </thead>
                                    <tbody>
                                        {products.map(p => {
                                            const totalStock = p.variants.reduce((a, v) => a + v.stock, 0);
                                            return (
                                                <tr key={p.id}>
                                                    <td className={styles.productName}>{p.name}</td>
                                                    <td><span className={styles.categoryTag}>{p.category}</span></td>
                                                    <td>${p.price.toFixed(2)}</td>
                                                    <td><span className={totalStock < 30 ? styles.stockLow : styles.stockOk}>{totalStock}</span></td>
                                                    <td>{p.variants.length}</td>
                                                    <td><button className={styles.editBtn}>Edit</button></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                )}

                {/* ── COLLECTIONS, CUSTOMERS, ANALYTICS ─ */}
                {['collections', 'customers', 'analytics'].includes(activeTab) && (
                    <div className={styles.tabContent}>
                        <header className={styles.pageHeader}>
                            <div className={styles.pageTitle}>
                                <h1>{NAV_ITEMS.find(n => n.id === activeTab)?.label}</h1>
                                <p>Coming soon — live data synced from Supabase.</p>
                            </div>
                        </header>
                        <div className={styles.panel}>
                            <div className={styles.emptyState}>
                                <span>{NAV_ITEMS.find(n => n.id === activeTab)?.icon}</span>
                                <p>This section is ready for data.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
