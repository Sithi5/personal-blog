/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{html,js,ts,jsx,tsx}',
        './components/**/*.{html,js,ts,jsx,tsx}',
        './pages/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                lightgrey: '#D3D3D3',
                grey: '#808080',
                primary: '#6366F1',
                darkGreenDirectBricoColor: '#244503',
                pastelGreenDirectBricoColor: '#b5ffb0',
                redDirectBricoColor: '#C51B40',
                blueParsecColor: '#006EFF',
                orangeMangalib: '#ff7400',
                blueDirectBricoColor: '#5ed1ff',
            },
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '100',
                    },
                },
            },
            animation: {
                'waving-hand': 'wave 2s linear infinite ',
                'fade-in': 'fadeIn 1s linear',
                'bounce-slow': 'bounce 2s infinite',
            },
        },
    },
    plugins: [],
};
