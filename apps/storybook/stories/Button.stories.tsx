import type { Meta, StoryObj } from '@storybook/react';
import Button from '@repo/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '버튼',
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화 버튼',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: '로딩 버튼',
    isLoading: true,
  },
};

export const WithOnClick: Story = {
  args: {
    children: '클릭 이벤트',
    onClick: () => alert('버튼이 클릭되었습니다!'),
  },
};
