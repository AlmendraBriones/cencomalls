import type { Meta, StoryObj } from '@storybook/react';
import PrivateTemplate from '../../componentes/templates/PrivateTemplate';

const meta = {
  title: 'Cencomalls/Templates/PrivateTemplate',
  component: PrivateTemplate,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PrivateTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {

};
