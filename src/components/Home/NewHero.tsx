import React from 'react';

const NewHero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-white">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-8">
                <h1 className="liquid-text bg-liquid-text text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none pb-4">
                    Artistic<br />expression
                </h1>
                <p className="text-lg md:text-xl font-light text-slate-600 max-w-2xl leading-relaxed">
                    Fashion that empowers. Transcending boundaries through artistic expression and fluid design.
                </p>
                <div className="pt-8">
                    <a
                        href="#"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:shadow-lg hover:shadow-primary/40 overflow-hidden"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span className="relative flex items-center gap-2">
                            Explore now
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default NewHero;
