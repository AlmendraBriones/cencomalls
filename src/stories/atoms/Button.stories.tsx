import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../componentes/atoms/buttons/Button';


const meta = {
  title: 'Cencomalls/Atoms/Button',
  component: Button,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {

};
