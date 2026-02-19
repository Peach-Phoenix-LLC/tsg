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
                primary: '#ab2fc1',
                secondary: '#a932bd',
                'background-light': '#ffffff',
                'background-dark': '#1d131f',
            },
            fontFamily: {
                display: ['Plus Jakarta Sans', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '1rem',
                lg: '2rem',
                xl: '3rem',
                full: '9999px',
            },
            backgroundImage: {
                holographic:
                    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 20%, #a18cd1 40%, #fbc2eb 60%, #e0c3fc 80%, #8ec5fc 100%)',
                'liquid-text':
                    'url("https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop")',
            },
            animation: {
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
