import React from 'react';

export default function HoloCategories() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-5xl md:text-6xl font-black mb-4 font-sans uppercase tracking-tight"
                        style={{
                            backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuACgX6FghISzJkcOqSIr9C_55Nn9QnRpLpvJVwXlvsMzwrlHa16FgxDfbHrD6Gh3OsRPx6yfx7SKv3UxZEmTIU3EfCMHJpKnU2fmLrcmtxMPqmCZ_sW9TgTOzXTSra8pni6X3Gtjmi9pvfWPYp-FlI4xv64s_2-IIAhmH9dsBJoKIlEapm-vStt1KZ9tFRzxi3qcHvKl4YmbXHwpVPLKFh5h6CFdJPb1ZI42SB8rwrZtjFMcxceVIaoatuiHnvL-B8gJbAQDuX1XzKS)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        SHOP BY CATEGORY
                    </h2>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mb-6 shadow-[0_0_10px_rgba(254,240,138,0.8)]"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    {/* Category 1 */}
                    <div className="flex flex-col items-center p-6 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                        <div className="mb-6 relative">
                            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="material-symbols-outlined text-6xl text-primary font-light relative z-10">diamond</span>
                        </div>
                        <h3 className="text-3xl font-normal text-gray-900 mb-4 font-serif bg-[linear-gradient(to_right,#333_0%,#a932bd_20%,#00b4d8_40%,#a932bd_60%,#333_100%)] bg-[length:200%_auto] bg-clip-text [-webkit-background-clip:text] group-hover:text-transparent group-hover:animate-[foil-shine_3s_linear_infinite] transition-colors duration-300">
                            Luxury Quality
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                            We source the finest materials to ensure every piece embodies the premium standard of tsgabrielle®.
                        </p>
                    </div>

                    {/* Category 2 */}
                    <div className="flex flex-col items-center p-6 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                        <div className="mb-6 relative">
                            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="material-symbols-outlined text-6xl text-primary font-light relative z-10">auto_awesome</span>
                        </div>
                        <h3 className="text-3xl font-normal text-gray-900 mb-4 font-serif bg-[linear-gradient(to_right,#333_0%,#a932bd_20%,#00b4d8_40%,#a932bd_60%,#333_100%)] bg-[length:200%_auto] bg-clip-text [-webkit-background-clip:text] group-hover:text-transparent group-hover:animate-[foil-shine_3s_linear_infinite] transition-colors duration-300">
                            Unique Style
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                            Our designs are curated to celebrate individuality with that special French Trans Touch.
                        </p>
                    </div>

                    {/* Category 3 */}
                    <div className="flex flex-col items-center p-6 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                        <div className="mb-6 relative">
                            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="material-symbols-outlined text-6xl text-primary font-light relative z-10">local_shipping</span>
                        </div>
                        <h3 className="text-3xl font-normal text-gray-900 mb-4 font-serif bg-[linear-gradient(to_right,#333_0%,#a932bd_20%,#00b4d8_40%,#a932bd_60%,#333_100%)] bg-[length:200%_auto] bg-clip-text [-webkit-background-clip:text] group-hover:text-transparent group-hover:animate-[foil-shine_3s_linear_infinite] transition-colors duration-300">
                            Global Delivery
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                            From Paris to the world, we ensure your fashion arrives safely and swiftly at your doorstep.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
