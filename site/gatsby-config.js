require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.billyperalta.com',
        sitemap: 'https://www.billyperalta.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-182027525-1'
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_END_POINT
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        services: {
          graphComment: true,
          algolia: true,
          mailchimp: true
        }
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'https://billyperalta.com/',
    name: 'billy-peralta',
    description:
      'A minimalistic starter to quickly set up and configure your portfolio with Gatsby',
    address: 'Burnaby, British Columbia',
    email: 'admin@billyperalta.com',
    phone: '',
    siteUrl: `https://www.billyperalta.com`,
    //Site Social Media Links
    social: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/billyjoelperalta/'
      },
      {
        name: 'Email',
        url: 'mailto:admin@billyperalta.com'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About Me',
        slug: '/about'
      },
      {
        name: 'Contact',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'About Me',
            slug: '/about'
          },
          {
            name: 'Contact Me',
            slug: '/contact'
          }
        ]
      }
    ]
  }
}
