require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title:
      'An Elm podcast sharing real implementation stories from the community',
    titleTemplate: '%s | Implementing Elm',
    description:
      'A seasonal Elm podcast where we will dive deep into specific problems to help the Elm community get better together by listening to real implementation stories from the Elm community.',
    siteUrl: 'https://www.implementingelm.com',
    image: '/images/favicon.png',
    twitterUsername: '@wking__',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'setup',
        path: `${__dirname}/setup`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Implementing Elm',
        short_name: 'IH',
        start_url: '/',
        background_color: '#0b1319',
        theme_color: '#0b1319',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-TB3FLB3',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/category/*', `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }

            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage, allMdx }) => [
          ...allSitePage.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.path,
            changefreq: `daily`,
            priority: 0.7,
          })),
          ...allMdx.edges.map(edge => ({
            url: site.siteMetadata.siteUrl + edge.node.fields.slug,
            changefreq: `daily`,
            priority: 0.7,
          })),
        ],
      },
    },
  ],
};
