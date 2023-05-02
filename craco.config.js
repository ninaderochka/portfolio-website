module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
    webpack: {
      optimization: {
        minimize: false
  },
  
}
  }
}