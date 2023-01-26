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
                lightgrey: '#f5f5f5',
                grey: '#808080',
                primary: '#6366F1',
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
                reveal: {
                    '0%': {
                        transform: 'translate(0,100%)',
                    },
                    '100%': {
                        transform: 'translate(0,0)',
                    },
                },
            },
            animation: {
                'waving-hand': 'wave 2s linear infinite ',
                'reveal-block': 'reveal 2s linear',
                'bounce-slow': 'bounce 2s infinite',
            },
        },
    },
    plugins: [],
};
