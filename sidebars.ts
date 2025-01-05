import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started with MAPS Messaging',
        description: 'Learn how to get started with MAPS Messaging platform',
        keywords: ['getting started', 'installation', 'setup'],
      },
      items: [
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/docker-setup',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      link: {
        type: 'generated-index',
        title: 'Core Concepts',
        description: 'Understanding MAPS Messaging fundamentals',
        keywords: ['architecture', 'routing', 'protocols'],
      },
      items: [
        'core-concepts/architecture',
        'core-concepts/message-routing',
        'core-concepts/protocols',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        title: 'Features',
        description: 'Key features of MAPS Messaging',
        keywords: ['features', 'integration', 'routing'],
      },
      items: [
        'features/hardware-integration',
        'features/ml-integration',
        'features/multi-transport',
        'features/routing-engine',
        'features/security',
      ],
    },
    {
      type: 'category',
      label: 'Protocols',
      link: {
        type: 'generated-index',
        title: 'Protocol Support',
        description: 'Detailed documentation for all supported protocols',
        keywords: ['protocols', 'mqtt', 'mqtt-sn', 'amqp'],
      },
      items: [
        'protocols/mqtt',
        'protocols/mqtt-sn',
        'protocols/amqp',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      link: {
        type: 'generated-index',
        title: 'Security Features',
        description: 'Security configuration and best practices',
        keywords: ['security', 'authentication', 'encryption'],
      },
      items: [
        'security/overview',
        'security/authentication',
        'security/authorization',
        'security/ssl-configuration',
        'security/certifications',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      link: {
        type: 'generated-index',
        title: 'Advanced Features',
        description: 'Advanced capabilities and configurations',
        keywords: ['advanced', 'clustering', 'performance'],
      },
      items: [
        'advanced/ai-integration',
        'advanced/clustering',
        'advanced/disaster-recovery',
        'advanced/performance-tuning',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'generated-index',
        title: 'API Documentation',
        description: 'Complete API reference and examples',
        keywords: ['api', 'reference', 'documentation'],
      },
      items: [
        'api-reference/overview',
        'api-reference/api-docs',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      link: {
        type: 'generated-index',
        title: 'Deployment Guide',
        description: 'Deployment options and configurations',
        keywords: ['deployment', 'monitoring', 'scaling'],
      },
      items: [
        'deployment/requirements',
        'deployment/scaling',
        'deployment/monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting Guide',
        description: 'Common issues and solutions',
        keywords: ['troubleshooting', 'debugging', 'faq'],
      },
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/debugging',
        'troubleshooting/faq',
      ],
    },
  ],
};

export default sidebars;
