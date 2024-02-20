/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: { 
      boxShadow: {
        'marquee': '0 15px 65px 20px rgba(191, 215, 255, 0.4)',
        'item-card': '0 15px 30px -5px rgba(191, 215, 255, 0.8)',
      }, 
      colors: {
        "my-teal": {
          100: '#9dd9d2',
        },
        "my-blue": {
          100: '#E2FDFF',
          200: '#BFD7FF',
          300: '#9BB1FF',
          400: '#788BFF',
          500: '#5465FF',
        },
        "my-black": {
          100: '#202a25',
        },
        "my-brown": {
          100: '#d17a22',
        },
        "my-moss": {
          100: '#47624f',
        },
      },  
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        snackbar: 'fade-in 0.5s, fade-out 0.5s 2.5s',
      },  
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-in': {
          '0%': { bottom: 0, opacity: 0},
          '100%': { bottom: "1rem", opacity: 1},
        },
        'fade-out': {
          '0%': { bottom: "1rem", opacity: 1},
          '100%': { bottom: 0, opacity: 0},
        },
      },
      backgroundImage: {
        'cart-pattern': "url('../public/cartImage.jpg')",
      },
    },
  },
  plugins: [],
}

