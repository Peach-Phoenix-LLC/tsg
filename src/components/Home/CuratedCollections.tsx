import React from 'react';

const collections = [
    {
        title: 'Dresses',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCYOP12PEsUmMXn_NEkx3jJ1syX5BbuuQLH7axTuZ4DpjfaB791t0zOkFWC3H381orb166qJTI_aVhrJcQ9xdMpUlXstLPQyIuU2jhscNNpUXzfngPOsah9vKRub7423GqnOR9Vj466tcqXQm2OkxTy4en97Sdlm5HzwG8q9BeJILTrqIGw5c5fhQDiX2UeUscarqejrArIiQoIkHYMt6WHSgjUxAIZOPJq4KZhtLjQd99fALLFKloc1usBk1OKIIrZniljJPSCPWT'
    },
    {
        title: 'Accessories',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJVnNWN6tuHxIfeXEuPsIqoZUubkPstN-wRA7YLzW6jzhAgt_Y3-GKrb65SCyb4IrJ2PiwsUFowa-IMtGZxPrkZ707d_9onqpxL7D775ONsZXlbv7er5mF8X_c-nux-7wGyBpKAe1Mfw1Rj5XDj9TBmrR4OryezV8Xpk_EFJm-2YZKzZhH37e00tgYPUvgGOiuWvpVaszKNu6K74TY296We4kqfmHMbcClezLD0z8xNcQgyKX_6oxUl9htYjFmH1716yzEcZ2R2WPF'
    },
    {
        title: 'New Arrivals',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBJvaDay6hJiruNfcYwtgoheFXDSFfwhC1C7r16CIjgwnJtIbExdcxZxsbtBk97qGATvjXfrSDbFSd5eeuscVNiDT42QsMZbLbhIEokW0uWZn0Db5nKVJ8QoNf7n2bQCw-hwkPC4rwPqC_kznHJ9OV3_OSAvHuz54bM-cszqoSswMysI2JWlfJvERfirHychkf9XaadHYv6MSRfTzicWoi876TekSU4MuuZJM6RsqZGp9WTdffoiTpzMJuYsIMvDOpTJ5vWUuo0FF7'
    },
    {
        title: 'Best Sellers',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsqLCLG5N0f5IqMmX9YNX6EQ7Q9rZmk1vf-0vuRnPiWy6W7TQTMn182oXzszswYr4c8-kg-Q4xQHjyzoqQI-ouuQslbElBBxj-J7YzbvlmPx5hDhRO7RDik6b6DuE3TUB73IVtc3oP6s-NF8h6GqKqsr9VUMeOUpbdhsU7cA5zrHCKSf09AtrlhMd7Zp9lWOUFPRJqNx3qI4a25j9jvuYC2xIdHkh4-WNVCcSlYUJFHDL8WGQtBVR1XXfTicVbNCUbck1E_TbjwmbB'
    }
];

const CuratedCollections = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Curated Collections</h2>
                        <p className="text-slate-500">Discover the pieces that define the season.</p>
                    </div>
                    <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors">
                        View all collections
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {collections.map((item, index) => (
                        <a key={index} href="#" className="group flex flex-col items-center gap-6">
                            <div className="holographic-border p-1 transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                <span className="text-sm text-slate-500 font-medium mt-1 block">Shop Now</span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors">
                        View all collections
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CuratedCollections;
