'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const handleAuth = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (session) {
                // User is logged in successfully
                router.push('/');
            } else if (error) {
                console.error('Error during auth callback:', error);
                router.push('/login');
            } else {
                // Wait for onAuthStateChange to fire
                const { data: { subscription } } = supabase.auth.onAuthStateChange(
                    (event, session) => {
                        if (event === 'SIGNED_IN' || session) {
                            router.push('/');
                        } else if (event === 'SIGNED_OUT') {
                            router.push('/login');
                        }
                    }
                );

                return () => subscription.unsubscribe();
            }
        };

        handleAuth();
    }, [router]);

    return (
        <div className="min-h-screen bg-[#050406] flex items-center justify-center text-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-[#a932bd] border-t-transparent flex rounded-full animate-spin"></div>
                <p className="text-slate-400 tracking-widest text-sm uppercase">Authenticating...</p>
            </div>
        </div>
    );
}
