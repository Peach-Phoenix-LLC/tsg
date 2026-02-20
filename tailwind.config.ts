import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#a932bd',
                "primary-dark": "#8a209b",
                "brand-yellow": "#fef08a",
                "brand-yellow-hover": "#fde047",
                secondary: '#5e6c84',
                'background-light': '#f7f6f8',
                'background-dark': '#1d131f',
                "brand-gray": "#e7e7e7",
                "accent-purple": "#a932bd",
                "holo-pink": "#ffb6ff",
                "holo-cyan": "#b3ffff",
                "holo-silver": "#f0f0f0",
                accent: {
                    cyan: '#00dbde',
                    pink: '#fc00ff',
                }
            },
            fontFamily: {
                sans: ["Lato", "sans-serif"],
                display: ["Lato", "sans-serif"],
                serif: ["Lato", "sans-serif"],
                body: ["Lato", "sans-serif"],
                lato: ["Lato", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: '0.25rem',
                lg: '0.5rem',
                xl: '1rem',
                full: '9999px',
            },
            backgroundImage: {
                'holo-gradient': 'linear-gradient(135deg, #a932bd 0%, #ffb6ff 50%, #b3ffff 100%)',
                'holo-gradient-intense': 'linear-gradient(45deg, #a932bd, #ff00ff, #00ffff, #a932bd)',
                'holo-border': 'linear-gradient(135deg, #a932bd, #b3ffff, #ffb6ff, #a932bd)',
                'holo-divider': 'linear-gradient(90deg, transparent, #ffb6ff, #b3ffff, #a932bd, transparent)',
                'holo-sheen': 'linear-gradient(115deg, transparent 40%, rgba(255, 255, 255, 0.6) 45%, rgba(255, 255, 255, 0.3) 50%, transparent 55%)',
                'holo-texture': 'linear-gradient(120deg, rgba(255,255,255,0.5), rgba(255,182,255,0.2) 20%, rgba(179,255,255,0.2) 40%, rgba(255,255,255,0.5))',
                holographic:
                    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 20%, #a18cd1 40%, #fbc2eb 60%, #e0c3fc 80%, #8ec5fc 100%)',
                'liquid-text':
                    'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop")',
            },
            boxShadow: {
                'holo': '0 4px 15px -3px rgba(169, 50, 189, 0.3), 0 0 20px -5px rgba(179, 255, 255, 0.4)',
                'holo-hover': '0 10px 25px -3px rgba(169, 50, 189, 0.5), 0 0 30px -5px rgba(179, 255, 255, 0.6)',
                'holo-pulse': '0 0 15px rgba(169, 50, 189, 0.6), 0 0 30px rgba(179, 255, 255, 0.4)',
            },
            animation: {
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "spin-slow": "spin 4s linear infinite",
                "shimmer-fast": "shimmer 2s infinite",
                shimmer: 'shimmer 3s linear infinite',
                float: 'float 6s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
export default config
