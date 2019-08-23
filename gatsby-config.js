/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  //site config
  siteMetadata: {
    title: "Abraham Ho Portfolio",
    author: "Abraham Ho",
    description: "Abe portfolio site",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        // icon: "src/assets/images/w.jpg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
}
