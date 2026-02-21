import React from 'react';

interface ProfileHeaderProps {
    profile: {
        id: string;
        full_name: string | null;
        email: string;
        created_at: Date;
        role: string;
    };
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
    const displayName = profile.full_name || profile.email.split('@')[0] || 'Member';
    const init1 = profile.full_name ? profile.full_name.split(' ')[0]?.[0] : '?';
    const init2 = profile.full_name ? profile.full_name.split(' ')[1]?.[0] : '';
    const initials = (init1 + (init2 || '')).toUpperCase();

    const memberYear = new Date(profile.created_at).getFullYear();

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center md:text-left flex flex-col md:flex-row items-center gap-4">
            <div className="relative">
                <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue text-2xl font-bold border-2 border-accent-blue/20">
                    {initials}
                </div>
                {profile.role === 'ADMIN' && (
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-full border-2 border-white flex items-center justify-center animate-pulse-slow">
                        <span className="material-symbols-outlined text-[10px] text-yellow-800">star</span>
                    </div>
                )}
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{displayName}</h1>
                <p className="text-sm font-medium text-gray-500 flex items-center justify-center md:justify-start gap-1 mt-1">
                    <span className={`w-2 h-2 rounded-full ${profile.role === 'ADMIN' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
                    {profile.role === 'ADMIN' ? 'Admin Access' : 'Verified Member'}
                </p>
                <p className="text-xs text-gray-400 mt-2">Member since {memberYear}</p>
            </div>
        </div>
    );
}
