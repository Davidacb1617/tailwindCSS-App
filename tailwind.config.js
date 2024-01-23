/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontSize:{
      size0: '18px',
      size1: '20px',
      size2: '30px',
      size3: '40px',
      size4: '50px',
      size5: '60px'

    },
    extend: {},
    colors:{
    turquesa: '#04acb4',
    blanco: '#fff',
    gris: '#6c757d',
    negro: '#000000'
  },
   
  },
  plugins: [],
}

