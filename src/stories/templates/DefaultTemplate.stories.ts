import type { Meta, StoryObj } from '@storybook/react';
import DefaultTemplate from '../../componentes/templates/DefaultTemplate';

const meta = {
  title: 'Cencomalls/Templates/DefaultTemplate',
  component: DefaultTemplate,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DefaultTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {

};
