import React from 'react';

const Narrative = () => {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkmsUHksGPcOMd1Lfrpq-HrpDj-fsunxXzvduRcWo2ygdGuMtV_Y5O1dP-1nZklneeJuLMiumoqGoE7nKZg-h83pvzGUERrO1yF1sMBoHNjurfXmrQ6YkB2USUACtj4m953j4_vh8Sbzo_8U0GzdACYdP0beVUXIFLSmGUU39m3vFKew3_i8_G_UXqUUBHhavaKB0WOVGexdLjdbppQhL9rbm2RGBzOVwLgO9TRHQyLJcL1Jd9Wy7m2OprFOOknvke4rHFQyTArHOJ"
                            alt="Model posing in artistic fashion wear"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
                        <p className="text-sm font-bold text-primary">Est. 2023</p>
                        <p className="text-xs text-slate-500 mt-1">Parisian Design Studio</p>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Our Narrative
                    </h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        Gabrielle's vision goes beyond fabric and thread. It is a dialogue between identity and form.
                        Each piece is crafted to celebrate the fluidity of the human experience, offering silhouettes that
                        don't just fit the body, but empower the soul.
                    </p>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        From the streets of Paris to the digital runway, tsgabrielle® stands as a beacon for those who
                        dare to define themselves.
                    </p>
                    <div className="pt-4">
                        <a href="#" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 inline-flex items-center gap-1">
                            Read the full story
                            <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Narrative;
