import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/docker-setup',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/architecture',
        'core-concepts/protocols',
        'core-concepts/message-routing',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/multi-transport',
        'features/hardware-integration',
        'features/routing-engine',
        'features/ml-integration',
        'features/security',
      ],
    },
    {
      type: 'category',
      label: 'Protocol Support',
      items: [
        'protocols/mqtt',
        'protocols/mqtt-sn',
        'protocols/amqp',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/overview',
        'api-reference/api-docs',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/requirements',
        'deployment/scaling',
        'deployment/monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/ssl-configuration',
        'security/authentication',
        'security/authorization',
        'security/certifications',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'advanced/performance-tuning',
        'advanced/clustering',
        'advanced/disaster-recovery',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/debugging',
        'troubleshooting/faq',
      ],
    },
  ],
};

export default sidebars;
