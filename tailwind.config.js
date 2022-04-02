module.exports = {
      purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
      darkMode: 'class', //ダークモードを有効化(ON/OFFの切り替え)
      theme: {
        extend: {
          backgroundImage: theme => ({
            'hero-pattern': "url('/BG.JPG')",
          }),
        },

        variants: {
          extend: {},
        },
        plugins: [],
      }}