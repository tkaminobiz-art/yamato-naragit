import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "y-off-white": "#F9F9F9",
                "y-charcoal": "#333333",
                "y-gold": "#C0A062",
                "y-brown": "#4A3B32",
                // Alias for existing components using 'nara-' prefix
                "nara-charcoal": "#333333",
                "nara-gold": "#C0A062",
                "nara-paper": "#F9F9F9",
            },
            fontFamily: {
                serif: ["var(--font-zen-old-mincho)", "serif"],
                sans: ["var(--font-manrope)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
