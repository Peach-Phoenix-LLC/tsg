import React from 'react';

export default function ProfileHeader() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center md:text-left flex flex-col md:flex-row items-center gap-4">
            <div className="relative">
                <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue text-2xl font-bold border-2 border-accent-blue/20">
                    JV
                </div>
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-full border-2 border-white flex items-center justify-center animate-pulse-slow">
                    <span className="material-symbols-outlined text-[10px] text-yellow-800">star</span>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Julian Vane</h1>
                <p className="text-sm font-medium text-yellow-600 flex items-center justify-center md:justify-start gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    Gold Member
                </p>
                <p className="text-xs text-gray-400 mt-2">Member since 2021</p>
            </div>
        </div>
    );
}
