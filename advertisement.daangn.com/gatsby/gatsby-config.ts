import type { GatsbyConfig } from "gatsby";

const siteUrl = new URL("https://ads.daangn.com");

const siteMetadata: GatsbyConfig["siteMetadata"] = {
  siteUrl: siteUrl.origin,
};

const config: GatsbyConfig = {
  // See https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    QUERY_ON_DEMAND: true,
    LAZY_IMAGES: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata,
  plugins: [
    "gatsby-theme-stitches",
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "src/__generated__/gatsby-schema.graphql": true,
          "src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: { "~": "./" },
      },
    },
  ],
};

export default config;
