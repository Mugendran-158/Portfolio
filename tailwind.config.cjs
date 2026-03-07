/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background) / <alpha-value>)",
                primary: "hsl(var(--primary) / <alpha-value>)",
                accent: "hsl(var(--accent) / <alpha-value>)",
                card: "hsl(var(--card) / <alpha-value>)",
                border: "hsl(var(--border) / <alpha-value>)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
