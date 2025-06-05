import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Community Component Catalog",
  tagline: "Mantine UIベースのコミュニティコンポーネントカタログ",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://h-nakagawa.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/ccc-proto/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "yumemi-inc", // GitHubユーザー名
  projectName: "ccc-proto", // リポジトリ名
  trailingSlash: false, // GitHub Pages推奨設定

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: false, // Disable default docs
        blog: false, // Disable blog
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "custom",
        path: "custom",
        routeBasePath: "custom",
        sidebarPath: "./sidebars.ts",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "block",
        path: "block",
        routeBasePath: "block",
        sidebarPath: "./sidebars.ts",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Component Catalog",
      logo: {
        alt: "Component Catalog Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "customSidebar",
          position: "left",
          label: "Custom",
          docsPluginId: "custom",
        },
        {
          type: "docSidebar",
          sidebarId: "blockSidebar",
          position: "left",
          label: "Block",
          docsPluginId: "block",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "コンポーネント",
          items: [
            {
              label: "Custom",
              to: "/custom/intro",
            },
            {
              label: "Block",
              to: "/block/intro",
            },
          ],
        },
        {
          title: "コミュニティ",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "リソース",
          items: [
            {
              label: "Mantine UI",
              href: "https://mantine.dev",
            },
            {
              label: "Docusaurus",
              href: "https://docusaurus.io",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Community Component Catalog. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // Algolia DocSearchの設定
      appId: "BH4D9OD16A",
      // 公開検索用のAPIキー（フロントエンドで安全に使用可能）
      apiKey: "b573aa848fd57fb47d693b531297d69f",
      indexName: "docsearch",
      // オプション設定
      contextualSearch: true,
      // 検索ページへのパス（オプション）
      searchPagePath: "search",
      //... その他のAlgolia検索パラメータ
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
