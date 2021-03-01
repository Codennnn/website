const path = require('path')
const config = require('./config/website')

module.exports = {
  pathPrefix: config.pathPrefix,

  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    favicon: config.siteIcon,
    language: config.lang,
    author: { name: config.author },
    keywords: ['官网'],
    image: config.siteLogo,
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': path.resolve(__dirname),
          '@': path.resolve(__dirname, 'src'),
        },
      },
    },

    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
