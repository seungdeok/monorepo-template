import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from 'pack-a';

const meta = {
  title: 'Components/Button',
  component: ButtonComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {},
};
