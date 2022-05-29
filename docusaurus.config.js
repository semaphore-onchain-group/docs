// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Semaphore NFT Group",
  tagline: "NFT on-chain group open platform",
  url: "https://nft-group-docs.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "semaphore-nft-group",
  projectName: "semaphore-nft-group",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/semaphore-onchain-group/docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Semapore NFT Group",
        logo: {
          alt: "Semaphore logo",
          src: "img/semaphore-icon.svg",
        },
        items: [
          {
            href: "https://github.com/semaphore-onchain-group",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Guides",
                to: "/guides/create-group",
              },
              {
                label: "Resources",
                to: "/resources",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/semaphore-onchain-group",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Semaphore NFT group",
                href: "https://nft-group.vercel.app/",
              },
              {
                label: "Semaphore",
                href: "https://semaphore.appliedzkp.org/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
