import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { PostHogPluginOptions } from 'posthog-docusaurus';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {

  plugins: [
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_Kmra2tvI1TBRZ9pNoMigbaYO716s9CJpRIRrq2WOsGK',
        appUrl: 'https://eu.i.posthog.com', // usually https://app.posthog.com
        enableInDevelopment: false,
        // Optional: Add typed script parameters
        scriptParams: {
          'capture-pageview': true,
          'capture-pageleave': true
        }
      } as PostHogPluginOptions,
    ],
  ],

  title: 'MAPS Messaging',
  tagline: 'Protocol-agnostic, AI-driven messaging solution for IoT',
  favicon: 'img/favicon/favicon.ico',

    // Set the production url of your site here
  url: 'https://www.mapsmessaging.io', // Update with your actual domain
  baseUrl: '/mapsmessaging-site/',
   // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Maps-Messaging', // Usually your GitHub org/user name
  projectName: 'maps-messaging-site', // Usually your repo name
  trailingSlash: false,
  deploymentBranch: 'gh-pages', 

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
      {
        gtag: {
          trackingID: 'GTM-WW5J7QK7',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-WW5J7QK7',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Remove or update editUrl if needed
          editUrl: 'https://github.com/Maps-Messaging/maps-messaging-site/tree/main/',
          routeBasePath: 'docs',
          // Make docs the default landing page (optional)
          // docLayoutComponent: "@theme/DocPage",
          // docItemComponent: "@theme/DocItem",
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
            'https://github.com/Maps-Messaging/maps-messaging-site/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
        },
      },
    ],
    metadata: [
      // Light theme favicons
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/favicon/favicon.ico',
          media: '(prefers-color-scheme: light)'
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/img/favicon/favicon-32x32.png',
          media: '(prefers-color-scheme: light)'
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/img/favicon/favicon-16x16.png',
          media: '(prefers-color-scheme: light)'
        }
      },
      
      // Dark theme favicons
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/img/favicon/dark/favicon.ico',
          media: '(prefers-color-scheme: dark)'
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/img/favicon/dark/favicon-32x32.png',
          media: '(prefers-color-scheme: dark)'
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/img/favicon/dark/favicon-16x16.png',
          media: '(prefers-color-scheme: dark)'
        }
      },
      
      // Apple Touch Icon (light/dark)
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/favicon/apple-touch-icon.png',
          media: '(prefers-color-scheme: light)'
        }
      },
      {
        tagName: 'link',
        attributes: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/img/favicon/dark/apple-touch-icon.png',
          media: '(prefers-color-scheme: dark)'
        }
      },
      
      // PWA manifest
      {tagName: 'link', attributes: {rel: 'manifest', href: '/img/favicon/site.webmanifest'}},
      
      // Theme colors
      {tagName: 'meta', attributes: {name: 'theme-color', content: '#063472', media: '(prefers-color-scheme: light)'}},
      {tagName: 'meta', attributes: {name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: dark)'}},
      
      // Microsoft Tile
      {tagName: 'meta', attributes: {name: 'msapplication-TileColor', content: '#063472'}},
      {tagName: 'meta', attributes: {name: 'msapplication-TileImage', href: '/img/favicon/mstile-150x150.png', media: '(prefers-color-scheme: light)'}},
      {tagName: 'meta', attributes: {name: 'msapplication-TileImage', href: '/img/favicon/dark/mstile-150x150.png', media: '(prefers-color-scheme: dark)'}}
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MAPS Messaging',
      style: 'primary',
      logo: {
        alt: 'MAPS Messaging Logo',
        src: 'img/favicon/favicon-96x96.png',
        srcDark: 'img/favicon/dark/favicon-96x96.png',  // Updated path to match our generated structure
        
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',  // This should match your intro.md file id
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Maps-Messaging/maps-messaging-site/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mapsmessaging',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/mapsmessaging',
            },
            {
              label: 'X',
              href: 'https://x.com/mapsmessaging',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Maps-Messaging/maps-messaging-site/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MAPS Messaging BV. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;



