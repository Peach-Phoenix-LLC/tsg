"use client";
import React, { useState } from 'react';
import { pdpMockData } from '@/data/pdpMockData';

export default function ProductSpecs() {
    const [openPanel, setOpenPanel] = useState<string | null>('details');

    const togglePanel = (panel: string) => {
        setOpenPanel(openPanel === panel ? null : panel);
    };

    return (
        <div className="mt-12 border-t border-gray-100 pt-8 space-y-4">

            {/* Details Panel */}
            <div className="border-b border-gray-100 pb-4">
                <button
                    onClick={() => togglePanel('details')}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
                >
                    <span className="text-lg tracking-wide uppercase font-semibold">Product Details</span>
                    <span className="material-symbols-outlined text-gray-400 transition-transform duration-300" style={{ transform: openPanel === 'details' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        expand_more
                    </span>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openPanel === 'details' ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                    <ul className="list-disc pl-5 text-gray-600 font-light space-y-2 text-sm">
                        {pdpMockData.details.map((detail, idx) => (
                            <li key={idx} className="pl-2">{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Ethics Panel */}
            <div className="border-b border-gray-100 pb-4">
                <button
                    onClick={() => togglePanel('ethics')}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
                >
                    <span className="text-lg tracking-wide uppercase font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-[18px]">eco</span>
                        Sustainability
                    </span>
                    <span className="material-symbols-outlined text-gray-400 transition-transform duration-300" style={{ transform: openPanel === 'ethics' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        expand_more
                    </span>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openPanel === 'ethics' ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                        {pdpMockData.ethics}
                    </p>
                </div>
            </div>

            {/* Shipping Panel */}
            <div className="border-b border-gray-100 pb-4">
                <button
                    onClick={() => togglePanel('shipping')}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
                >
                    <span className="text-lg tracking-wide uppercase font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-gray-400 text-[18px]">local_shipping</span>
                        Shipping & Returns
                    </span>
                    <span className="material-symbols-outlined text-gray-400 transition-transform duration-300" style={{ transform: openPanel === 'shipping' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        expand_more
                    </span>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openPanel === 'shipping' ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                        {pdpMockData.shipping}
                    </p>
                </div>
            </div>

        </div>
    );
}
