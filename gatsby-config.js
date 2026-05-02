module.exports = {
  siteMetadata: {
    title: `Voters for a Green Indiana`,
    menuLinks:[
      {
          name: 'About',
          link: '/'
      },
      {
        name: 'Candidate Views',
        link: '/candidate-views'
      },
      {
          name: 'Voters Guide',
          link: '/guide'
      },
      {
        name: 'Contact Us',
        link: '/contact'
      }
    ],
    description: 'Voters for a Green Indiana is a nonpartisan group of volunteers who take climate change very seriously. We believe candidates who understand the ongoing energy and climate challenges are best qualified to lead us through these changes. Our goal is to inform voters who also care about this issue about candidates who accept climate science, understand this is an important local & global issue, and support policies and actions to reduce carbon pollution.',
    author: ``,
  },
  plugins: [
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
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `candidates2022`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `generalCandidates2024`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `candidates`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `primaryCandidates2023`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `generalCandidates2023`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#A4CC8D`,
        theme_color: `#A4CC8D`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
