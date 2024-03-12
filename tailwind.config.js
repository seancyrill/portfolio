/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                XS: { raw: '(min-width: 450px)' },
            },
            colors: {
                primary: '#ffd500',
                'primary-darker': '#fdc500',
                'primary-neutral': '#fff',
                'secondary-neutral': '#000',
            },
            fontFamily: {
                main: ['alata', 'sans-serif'],
                header: ['jose', 'sans-serif'],
            },
            backgroundImage: {
                'section-border-a-b':
                    'linear-gradient(to top right, #8367C7, #8367C7 50%, #FFF 51%, #FFF 100%)',
                'section-border-b-a':
                    'linear-gradient(to top right, #FFF, #FFF 50%, #8367C7 51%, #8367C7 100%)',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                'infinite-scroll-reverse': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(100%)' },
                },
                'grow-in-out': {
                    '0%': { transform: 'scaleY(0)' },
                    '35%': { transform: 'scaleY(100%)' },
                    '100%': { transform: 'scaleY(0)' },
                },
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 12s linear infinite',
                'infinite-scroll-reverse':
                    'infinite-scroll-reverse 12s linear infinite',
                'infinite-scroll-slower': 'infinite-scroll 20s linear infinite',
                'infinite-scroll-slower-reverse':
                    'infinite-scroll-reverse 20s linear infinite',
                'grow-in-out': 'grow-in-out 1s linear',
            },
            fontSize: {
                titleWall: 'clamp(4rem, 20vw, 20rem)',
                byvw: 'clamp(2.5rem, 13vw, 8rem)',
            },
        },
    },
    plugins: [],
}
