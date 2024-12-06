module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 0px 40px 0px #0000000F', 
        'numbershadow': '0 -3px 5px #8080800f', 
      },
      backgroundColor: {
        'inputbg': 'rgba(0, 0, 0, .05)', 
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2rem',
          lg: '3rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}

