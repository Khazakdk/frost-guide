const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  images: {
    unoptimized: true
  }
})
 
module.exports = withNextra()