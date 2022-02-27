// tailwind.config.js
module.exports = {
  node:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundImage: {
        'bgm': "url('../images/home/background-home-mobile.jpg')",
        'bgt': "url('../images/home/background-home-tablet.jpg')",
        'bgd': "url('../images/home/background-home-desktop.jpg')",
        
      },
      fontFamily: {
        'bellefair': 'Bellefair',
        'BarlowCondensed':'BarlowCondensed',
        'Barlow':'Barlow'
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }