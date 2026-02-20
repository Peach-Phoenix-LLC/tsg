import React from 'react';
import Link from 'next/link';
import { philosophyData } from '@/data/mockData';

export default function HoloPhilosophy() {
    return (
        <section className="bg-background-light py-24">
            <div className="max-w-7xl mx-auto space-y-24 px-4 sm:px-6 lg:px-8">

                {/* Block 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 h-[450px] md:h-[650px] relative z-0">
                        <img
                            alt="Editorial Fashion"
                            className="w-full h-full object-cover"
                            src={philosophyData.heroImage}
                        />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10 md:-ml-20 mt-[-4rem] md:mt-0 px-4 md:px-0">
                        <div className="relative bg-white p-[3px] rounded-md shadow-[0_4px_25px_rgba(169,50,189,0.2)] max-w-xl mx-auto overflow-hidden">
                            {/* Animated Holographic Border Effect */}
                            <div className="absolute inset-0 rounded-md bg-[linear-gradient(135deg,rgba(255,255,255,0),rgba(169,50,189,0.7),rgba(255,255,255,0.9),rgba(0,255,255,0.6),rgba(255,0,255,0.5))] bg-[length:300%_300%] animate-spin-slow opacity-80 z-0"></div>

                            <div className="bg-white h-full w-full relative z-10 p-10 md:p-16">
                                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight font-lato">
                                    Grow your <span className="relative inline-block border-b-2 border-brand-yellow">style confidence</span>
                                </h2>
                                <p className="text-gray-500 font-light mb-8 leading-relaxed font-lato">
                                    Each piece in our collection is an opportunity to express your true self. Through fashion, we empower you to embrace your identity and build a wardrobe that speaks volumes without saying a word.
                                </p>
                                <Link
                                    href="/product"
                                    className="text-primary font-normal uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-primary-dark transition-colors"
                                >
                                    View Dresses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="relative flex flex-col md:flex-row-reverse items-center">
                    <div className="w-full md:w-1/2 h-[450px] md:h-[650px] relative z-0">
                        <img
                            alt="Editorial Coats"
                            className="w-full h-full object-cover"
                            src={philosophyData.secondaryImage}
                        />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10 md:-mr-20 mt-[-4rem] md:mt-0 px-4 md:px-0">
                        <div className="relative bg-white p-[3px] rounded-md shadow-[0_4px_25px_rgba(169,50,189,0.2)] max-w-xl mx-auto overflow-hidden">
                            {/* Animated Holographic Border Effect */}
                            <div className="absolute inset-0 rounded-md bg-[linear-gradient(135deg,rgba(255,255,255,0),rgba(169,50,189,0.7),rgba(255,255,255,0.9),rgba(0,255,255,0.6),rgba(255,0,255,0.5))] bg-[length:300%_300%] animate-spin-slow opacity-80 z-0 reverse"></div>

                            <div className="bg-white h-full w-full relative z-10 p-10 md:p-16">
                                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight font-lato">
                                    Timeless pieces you can wear <span className="relative inline-block"><span className="absolute inset-0 border-2 border-brand-yellow rounded-[50%_40%_40%_50%_/_40%_50%_50%_60%] transform -rotate-2 scale-110"></span><span className="relative z-10 px-2 italic">forever</span></span>
                                </h2>
                                <p className="text-gray-500 font-light mb-8 leading-relaxed font-lato">
                                    The French Trans Touch isn't just a tagline; it's a commitment to enduring style. Our coats are designed to be the staple of your winter wardrobe for years to come.
                                </p>
                                <Link
                                    href="/product"
                                    className="text-primary font-normal uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-primary-dark transition-colors"
                                >
                                    View Coats
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-center pt-24">
                <span className="material-symbols-outlined text-6xl text-primary -rotate-12 animate-pulse-slow">rocket_launch</span>
            </div>
        </section>
    );
}
