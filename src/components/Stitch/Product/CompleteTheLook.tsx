import React from 'react';
import { pdpMockData } from '@/data/pdpMockData';

export default function CompleteTheLook() {
    return (
        <section className="mt-24 md:mt-32 border-t border-gray-200 pt-16 md:pt-24 pb-12">

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">Complete the Look</h2>
                    <p className="text-gray-500 font-light text-lg">Curated essentials by Maison d'Artiste</p>
                </div>
                <button className="text-accent-blue font-bold uppercase tracking-widest text-sm pb-1 border-b-2 border-accent-blue hover:text-blue-900 hover:border-blue-900 transition-colors self-start md:self-auto">
                    Shop All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                {pdpMockData.crossSells.map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="w-full bg-gray-50 rounded-2xl overflow-hidden mb-6 relative shadow-sm h-80 lg:h-96">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Quick Add Floating Button */}
                            <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <button className="w-full bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-sm py-3 rounded-xl shadow-md uppercase tracking-wider hover:bg-accent-blue hover:text-white transition-colors">
                                    Quick Add
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{item.brand}</p>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-accent-blue transition-colors line-clamp-1">{item.title}</h3>
                            <p className="text-gray-600 font-medium">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
