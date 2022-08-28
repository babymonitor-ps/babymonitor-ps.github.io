require('dotenv').config()
const urljoin = require('url-join');
const md = require('markdown-it')()

module.exports = {
  flags: {
    DEV_SSR: false
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-LE395LBRBY"
        ],
        pluginConfig: {
          head: true,
        },
        gtagConfig: {
          send_page_view: true, // Explicitly set to true
        },
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Baby Monitor',
        short_name: 'Baby Monitor',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#5a67d8',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-medical',

      options: {
        siteUrl: 'https://baby-monitor.prolongservices.com',
        sources: {
          strapi: true,
          local: false
        },
        services: {
          algolia: true,
          facebookComment: true
        }
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ['article', 'category', 'author'],
        queryLimit: 1000,
        singleTypes: [
          {
            singularName: 'about',
            queryParams: {
              populate: {
                blocks: {
                  populate: '*'
                }
              }
            }
          },
          {
            singularName: 'privacy-policy',
            queryParams: {
              populate: {
                title: '*',
                content: '*',
                seo: {
                  populate: '*'
                }
              }
            }
          },
          {
            singularName: 'terms-and-condition',
            queryParams: {
              populate: {
                title: '*',
                content: '*',
                seo: {
                  populate: '*'
                }
              }
            }
          },
          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*'
                },
                social: '*',
                headerMenu: '*',
                footerMenu: {
                  populate: '*'
                }
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed-generator',
      options: {
        generator: `GatsbyJS`,
        rss: true, // Set to true to enable rss generation
        json: true, // Set to true to enable json feed generation
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            name: 'rss',
            query: `
            {
              allStrapiArticle(
                sort: {fields: date, order: DESC},
                limit: 100,
                ) {
                edges {
                  node {
                    title
                    slug
                    date
                    body {
                      data {
                        childMdx {
                          excerpt(pruneLength: 160)
                          rawBody
                        }
                      }
                    },
                    seo {
                      keywords
                      metaDescription
                      metaTitle
                    }
                  }
                }
              }
            }
            `,
            normalize: ({ query: { site, allStrapiArticle } }) => {

              return allStrapiArticle.edges.map(edge => {
                return {
                  title: edge.node.title,
                  date: edge.node.date,
                  url: urljoin(site.siteMetadata.siteUrl, edge.node.slug),
                  html: md.render(edge.node.body.data.childMdx.rawBody),
                  description: edge.node.seo?.metaDescription ? edge.node.seo.metaDescription : edge.node.body.data.childMdx.excerpt
                }
              })
            },
          },
        ],
      }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'Baby Monitor',
    name: 'Baby Monitor',
    description: 'The best baby monitor app and gadget to watch over your kids. You will get notifications on your phone, with sound and video, as soon as they start crying or making noise.',
    address: 'New York, NY',
    email: 'support@prolongservices.com',
    phone: '+91 9501784647',
    siteUrl: 'https://baby-monitor.prolongservices.com',
    author: 'Prolong Services',
    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/ProlongServices/'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/ProlongServices'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/baby_monitor_blog_usa'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'Authors',
        slug: '/authors'
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
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Policy',
            slug: '/privacy-policy'
          },
          {
            name: 'Terms Of Use',
            slug: '/term-conditions'
          }
        ]
      }
    ]
  }
}
