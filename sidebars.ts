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
        {
          type: 'doc',
          id: 'getting-started/quick-start',
          label: 'Quick Start',
        },
        {
          type: 'doc',
          id: 'getting-started/installation',
          label: 'Installation',
        },
        {
          type: 'doc',
          id: 'getting-started/docker-setup',
          label: 'Docker Setup',
        },
        {
          type: 'doc',
          id: 'getting-started/configuration',
          label: 'Configuration',
        },
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        {
          type: 'doc',
          id: 'core-concepts/architecture',
          label: 'Architecture',
        },
        {
          type: 'doc',
          id: 'core-concepts/protocols',
          label: 'Protocols',
        },
        {
          type: 'doc',
          id: 'core-concepts/message-routing',
          label: 'Message Routing',
        },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'doc',
          id: 'features/multi-transport',
          label: 'Multi-Transport',
        },
        {
          type: 'doc',
          id: 'features/hardware-integration',
          label: 'Hardware Integration',
        },
        {
          type: 'doc',
          id: 'features/routing-engine',
          label: 'Routing Engine',
        },
        {
          type: 'doc',
          id: 'features/ml-integration',
          label: 'ML Integration',
        },
        {
          type: 'doc',
          id: 'features/security',
          label: 'Security',
        },
      ],
    },
    {
      type: 'category',
      label: 'Protocol Support',
      items: [
        {
          type: 'doc',
          id: 'protocols/mqtt',
          label: 'MQTT',
        },
        {
          type: 'doc',
          id: 'protocols/mqtt-sn',
          label: 'MQTT-SN',
        },
        {
          type: 'doc',
          id: 'protocols/amqp',
          label: 'AMQP',
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'doc',
          id: 'api-reference/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'api-reference/api-docs',
          label: 'API Documentation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        {
          type: 'doc',
          id: 'deployment/requirements',
          label: 'Requirements',
        },
        {
          type: 'doc',
          id: 'deployment/scaling',
          label: 'Scaling',
        },
        {
          type: 'doc',
          id: 'deployment/monitoring',
          label: 'Monitoring',
        },
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        {
          type: 'doc',
          id: 'security/ssl-configuration',
          label: 'SSL Configuration',
        },
        {
          type: 'doc',
          id: 'security/authentication',
          label: 'Authentication',
        },
        {
          type: 'doc',
          id: 'security/authorization',
          label: 'Authorization',
        },
        {
          type: 'doc',
          id: 'security/certifications',
          label: 'Certifications',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        {
          type: 'doc',
          id: 'advanced/performance-tuning',
          label: 'Performance Tuning',
        },
        {
          type: 'doc',
          id: 'advanced/clustering',
          label: 'Clustering',
        },
        {
          type: 'doc',
          id: 'advanced/disaster-recovery',
          label: 'Disaster Recovery',
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {
          type: 'doc',
          id: 'troubleshooting/common-issues',
          label: 'Common Issues',
        },
        {
          type: 'doc',
          id: 'troubleshooting/debugging',
          label: 'Debugging',
        },
        {
          type: 'doc',
          id: 'troubleshooting/faq',
          label: 'FAQ',
        },
      ],
    },
  ],
};

export default sidebars;
