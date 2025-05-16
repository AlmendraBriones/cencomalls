import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import LoginPage from '../../components/pages/LoginPage';

const meta = {
    title: 'Cencomalls DS/pages/LoginPage',
    component: LoginPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
      },
      // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {},
    
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;