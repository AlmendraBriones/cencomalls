import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from '../../componentes/pages/LoginPage';


const meta = {
  title: 'Cencomalls/Pages/LoginPage',
  component: LoginPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const Default: Story = {

};
