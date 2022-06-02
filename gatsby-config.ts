import type { GatsbyConfig } from "gatsby";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `David Glymph`,
    author: {
      name: `David Glymph`
    },
    description: `All things software and web development`,
    siteUrl: `https://davidglymph.com`,
    image: "/social-bg.png",
    social: {
      github: `Woozl`,
      linkedin: `davidglymph`
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `David Glymph`,
        short_name: `David G`,
        start_url: `/`,
        background_color: `#ffffff`,
        icon: 'src/assets/images/icon.svg'
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              maxWidth: "672px",
              backgroundColor: "transparent"
            }
          },
          "gatsby-remark-autolink-headers",
          "gatsby-remark-copy-linked-files"
        ]
      }
    }
  ]
};

export default config;
