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
                "bg-primary": "#0a0a0a",
                "bg-surface": "#121212",
                "text-primary": "#e7e7e7",
                "text-muted": "#bdbdbd",
                "accent-primary": "#a932bd",
            },
            fontFamily: {
                sans: ["Lato", "sans-serif"],
                lato: ["Lato", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: '4px',
                sm: '2px',
            },
            backgroundImage: {
                'holo-border': 'linear-gradient(135deg, #a932bd, #667eea, #f093fb, #a932bd)',
            },
            animation: {
                "fade-in-up": "fade-in-up 0.35s ease-out forwards",
                "holographic": "holographic-motion 12s linear infinite",
            },
            keyframes: {
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "holographic-motion": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                }
            },
        },
    },
    plugins: [],
}
export default config

