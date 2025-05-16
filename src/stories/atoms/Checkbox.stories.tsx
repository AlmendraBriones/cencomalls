import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../componentes/atoms/checkbox/Checkbox';


const meta = {
  title: 'Cencomalls/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {

};
