// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Queue",
    tagline: "A way to make Queues on Roblox",
    url: "https://th3pr0fessor.github.io/",
    baseUrl: "/Queue/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "/static/img/logo.png",
    organizationName: "Th3Pr0fessor", // Usually your GitHub org/user name.
    projectName: "Queue", // Usually your repo name.

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
                title: "Queue",
                logo: {
                    alt: "Logo",
                    src: "/static/img/logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Tutorial",
                    },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: "https://github.com/Th3Pr0fessor/Queue",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                // links: [
                //   {
                //     title: 'Docs',
                //     items: [
                //       {
                //         label: 'Tutorial',
                //         to: '/docs/intro',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'Community',
                //     items: [
                //       {
                //         label: 'Stack Overflow',
                //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //       },
                //       {
                //         label: 'Twitter',
                //         href: 'https://twitter.com/docusaurus',
                //       },
                //     ],
                //   },
                //   {
                //     title: 'More',
                //     items: [
                //       {
                //         label: 'Blog',
                //         to: '/blog',
                //       },
                //       {
                //         label: 'GitHub',
                //         href: 'https://github.com/facebook/docusaurus',
                //       },
                //     ],
                //   },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Queue, Inc. Built with Docusaurus.`,
            },
            prism: {
                additionalLanguages: ["lua"],

                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
