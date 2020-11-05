module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Billy Peralta - SharePoint Freelance Expert based in Vancouver.',
    titleTemplate: '%s · Billy Peralta',
    image: '/images/logo2.png',
    author: 'Billy Peralta',
    description:
      'SharePoint Developer in Vancouver with 12+ years SharePoint of experience with both On-premise and M365(O365) Sharepoint',
    url: 'https://www.billyperalta.com',
    paginationPageSize: 4, // Amount of posts displayed per listing page.
    siteUrl: `https://www.billyperalta.com`,
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'hero',
        path: `${__dirname}/content/sections/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'about',
        path: `${__dirname}/content/sections/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'cards',
        path: `${__dirname}/content/sections/cards`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'contact',
        path: `${__dirname}/content/sections/contact`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Abyss' // Or install your favorite theme from GitHub
            }
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo2.png`, // This path is relative to the root of the site.
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

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-182027525-1', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.billyperalta.com',
        sitemap: 'https://www.billyperalta.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
