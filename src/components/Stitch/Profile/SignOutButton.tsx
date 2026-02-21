"use client";

import React from 'react';
import { signOut } from 'next-auth/react';

export default function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="w-full flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
        >
            <span className="material-symbols-outlined text-xl">logout</span>
            Sign Out
        </button>
    );
}
