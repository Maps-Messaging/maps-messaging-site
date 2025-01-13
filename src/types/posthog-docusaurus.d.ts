declare module 'posthog-docusaurus' {
  import type { Plugin } from '@docusaurus/types';
  
  export interface PostHogPluginOptions {
    apiKey: string;
    appUrl?: string;
    enableInDevelopment?: boolean;
    scriptParams?: {
      [key: string]: string | boolean | number;
    };
  }

  export default function posthogPlugin(
    context: any,
    options: PostHogPluginOptions
  ): Plugin<void>;
}

