'use client';

import React, { useState, useEffect } from 'react';
import { toggleWishlistItemAction, isItemInWishlistAction } from '@/app/actions/wishlist';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface WishlistButtonProps {
    productId: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkStatus = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                setUserId(session.user.id);
                const status = await isItemInWishlistAction(session.user.id, productId);
                setIsWishlisted(status);
            }
        };
        checkStatus();
    }, [productId]);

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!userId) {
            // Re-check session in case it changed
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/login');
                return;
            }
            setUserId(session.user.id);
        }

        setIsLoading(true);
        try {
            const result = await toggleWishlistItemAction(userId!, productId);
            if (result.success) {
                setIsWishlisted(result.action === 'added');
            }
        } catch (error) {
            console.error("Wishlist toggle error", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isLoading}
            className={`w-full h-14 font-bold text-[11px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 rounded-sm border ${isWishlisted
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-white/20 hover:border-white hover:bg-white/5'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <span className={`material-symbols-outlined text-lg ${isWishlisted ? 'fill-1' : 'font-light'}`}>
                {isWishlisted ? 'favorite' : 'favorite'}
            </span>
            <span>{isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>
        </button>
    );
};

export default WishlistButton;
