const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'  
})

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}
 
module.exports = withNextra(nextConfig)
