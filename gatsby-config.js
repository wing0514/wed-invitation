module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter v2',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout.jsx')
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
  ],
}
