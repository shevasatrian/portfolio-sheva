/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            colors: {
                primary: '#155e75',
                secondary: '#64748b',
                dark: '#1e293b'
            },
            screens: {
                '2xl': '1280px',
            }
        },
    },
    plugins: [],
}