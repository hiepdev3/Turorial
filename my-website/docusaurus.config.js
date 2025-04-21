// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SAVINA SHOP',
  tagline: 'Tài khoản bản quyền giá rẻ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          //sidebarPath: './sidebars.js',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Đặt tài liệu làm trang chủ tại http://localhost:3000/
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
           // editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/2-Logo-Savina.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn sử dụng',
          },
         
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'SAVINASHOP',
          //   items: [
          //     {
          //       html: `
          //         <p>Cửa hàng tài khoản giá rẻ</p>
          //         <p>Website cung cấp tài khoản bản quyền giá rẻ uy tín tại Việt Nam luôn được khách hàng tin dùng!</p>
          //       `,
          //     },
          //   ],
          // },
          {
            title: ' ',
            items: [
              {
                html: `
                  <div style="text-align: left;">
                    <img src="/img/2-Logo-Savina.png" alt="Savina Logo" style="width: 295px; margin-bottom: 0px;" />
                    <p><strong>SAVINASHOP</strong></p>
                    <p>Cửa hàng tài khoản giá rẻ</p>
                    <p>Website cung cấp tài khoản bản quyền giá rẻ uy tín tại Việt Nam luôn được khách hàng tin dùng!</p>
                  </div>
                `,
              },
            ],
          },
          {
            title: 'Liên hệ',
            items: [
              {
                html: `
                  <p>📞 Hotline: 0907.441.091</p>
                  <p>📱 <a href="https://zalo.me/0907441091" 
                        target="_blank" 
                        style="text-decoration: none; color: inherit; transition: color 0.3s;" 
                        onmouseover="this.style.color='#007bff';" 
                        onmouseout="this.style.color='inherit';">
                        Zalo: 0907.441.091
                      </a>
                  </p>
                  <p><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" style="margin-right: 8px;">
                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#2aa4f4"></stop>
                      <stop offset="1" stop-color="#007ad9"></stop>
                      </linearGradient>
                      <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                      <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                  </svg> 
                  <a href="https://www.facebook.com/people/Savina-Shop-Th%E1%BA%BF-Gi%E1%BB%9Bi-Gi%E1%BA%A3i-Tr%C3%AD/61573657606149/" 
                    target="_blank" 
                    style="text-decoration: none; color: inherit; transition: color 0.3s;" 
                    onmouseover="this.style.color='#007bff';" 
                    onmouseout="this.style.color='inherit';">
                    Facebook: Savina Shop
                  </a>
              </p>
                `,
              },
            ],
          },
          {
            title: 'Khách hàng',
            items: [
              {
                label: 'Chính sách Bảo mật',
                to: '/privacy-policy',
              },
              {
                label: 'Điều khoản dịch vụ',
                to: '/terms-of-service',
              },
              {
                label: 'Hướng dẫn mua hàng',
                to: '/how-to-buy',
              },
              {
                label: 'Chính sách đại lý',
                to: '/agency-policy',
              },
            ],
          },
        ],
        copyright: `© 2025 Savinashop. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
