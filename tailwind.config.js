/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                white: " hsl(0, 0%, 100%)",
                "rose-white": "hsl(330, 100%, 98%)",
                eggshell: "hsl(30, 54%, 90%)",
                "light-grey": "hsl(30, 18%, 87%)",
                "wenge-brown": "hsl(30, 10%, 34%)",
                "dark-charcoal": "hsl(24, 5%, 18%)",
            },
            fontFamily: {
                outfit: ["var(--font-outfit)"],
                "young-serif": ["var(--font-young-serif)"],
            },
        },
    },
    plugins: [],
};
