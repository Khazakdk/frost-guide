const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'  
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/frost-guide" : "";

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: assetPrefix,
  output: 'export',
}
 
module.exports = withNextra(nextConfig)
