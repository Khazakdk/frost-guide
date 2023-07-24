const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: false  
})

const nextConfig = {
  output: 'export'
}
 
module.exports = withNextra(nextConfig)
