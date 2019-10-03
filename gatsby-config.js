require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Pandas Eating Lots",
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //       component: require.resolve(`./src/components/layout.js`)
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      
    },
    `gatsby-plugin-emotion`,
    
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, 
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Projects`,
          },
        ]
      }
    }
  ],
}