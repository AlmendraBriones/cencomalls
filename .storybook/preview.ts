import type { Preview } from '@storybook/react'

import '../src/styles/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
      expanded: true,
    },
  },
};

export default preview;