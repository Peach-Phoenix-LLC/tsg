import React from 'react';
import ModernNavbar from '@/components/Home/ModernNavbar';
import ModernFooter from '@/components/Home/ModernFooter';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#050406] text-white font-sans">
            <ModernNavbar />

            <header className="pt-48 pb-20 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#a932bd] font-bold mb-4">Confidentialité</p>
                    <h1 className="text-6xl font-serif tracking-tight mb-8">Privacy Policy</h1>
                    <p className="text-sm text-slate-400 font-light leading-relaxed uppercase tracking-[0.2em]">
                        Your trust is our most valuable asset. We are committed to protecting your digital identity.
                    </p>
                </div>
            </header>

            <section className="py-32 px-8">
                <div className="max-w-4xl mx-auto space-y-16 text-sm text-slate-400 font-light leading-relaxed">

                    <div className="space-y-6">
                        <h2 className="text-xl font-serif text-white">01. Data Collection</h2>
                        <p>
                            We collect information necessary to provide you with a seamless luxury experience. This includes identity data (name, email), transaction data (order history), and technical data (IP address, browser type) used for site optimization.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-serif text-white">02. Data Usage</h2>
                        <p>
                            Your information is used exclusively to process orders, manage your account, and with your consent, share updates from the atelier. We never sell your personal data to third parties.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-serif text-white">03. Secure Processing</h2>
                        <p>
                            All financial transactions are handled via secure, PCI-compliant gateways (Stripe, PayPal). We do not store sensitive payment details on our internal servers.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-serif text-white">04. Your Rights</h2>
                        <p>
                            In accordance with GDPR and global privacy standards, you have the right to access, rectify, or request the deletion of your personal data at any time. Please contact our data officer at atelier@tsgabrielle.us for such requests.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Last Updated: February 2026</p>
                    </div>

                </div>
            </section>

            <ModernFooter />
        </main>
    );
}
