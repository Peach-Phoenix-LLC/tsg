import React from 'react';
import Link from 'next/link';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';
import ProfileHeader from '@/components/Stitch/Profile/ProfileHeader';
import OrderHistory from '@/components/Stitch/Profile/OrderHistory';

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-gray-50 selection:bg-accent-blue/30 selection:text-white font-manrope">
            {/* Using the global navbar but we could customize it to light mode */}
            <div className="bg-white shadow-sm pb-1">
                <ModernNavbar />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row gap-8 lg:gap-16">

                {/* Sidebar */}
                <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
                    <ProfileHeader />

                    <nav className="mt-8 space-y-1">
                        <Link href="/profile" className="flex items-center gap-4 px-4 py-3 bg-accent-blue/10 text-accent-blue rounded-xl font-medium transition-colors">
                            <span className="material-symbols-outlined text-xl">inventory_2</span>
                            Order History
                        </Link>
                        <Link href="/wishlist" className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                            <span className="material-symbols-outlined text-xl">favorite</span>
                            My Wishlist
                        </Link>
                        <Link href="/addresses" className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                            <span className="material-symbols-outlined text-xl">location_on</span>
                            Saved Addresses
                        </Link>
                        <Link href="/settings" className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                            <span className="material-symbols-outlined text-xl">settings</span>
                            Account Settings
                        </Link>
                        <Link href="/support" className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors mt-8">
                            <span className="material-symbols-outlined text-xl">help_outline</span>
                            Support Center
                        </Link>
                        <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                            <span className="material-symbols-outlined text-xl">logout</span>
                            Sign Out
                        </button>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1">
                    <OrderHistory />
                </div>

            </div>

            <ModernFooter />
        </main>
    );
}
