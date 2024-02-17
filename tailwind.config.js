/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: { boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    }, colors: {
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
    }},
  },
  plugins: [],
}

