import type { StorybookConfig } from '@storybook/react-vite';


const config: StorybookConfig = {
  
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: (config) => {
    return config;  // si necesitas config extra para Tailwind
  },
};
export default config;