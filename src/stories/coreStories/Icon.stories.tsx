import { Icon } from '@/components/ui/core/Icon'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Activity } from 'phosphor-react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'core/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const XSmall = Template.bind({})
XSmall.args = {
  size: 'xs',
  icon: Activity,
  alt: 'extra Small Icon',
  color: 'text-red-500',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  icon: Activity,
  alt: 'Small Icon',
  color: 'text-red-500',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  icon: Activity,
  alt: 'Medium icon',
  color: 'text-red-500',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  icon: Activity,
  alt: 'large icon',
  color: 'text-red-500',
}
export const XLarge = Template.bind({})
XLarge.args = {
  size: 'xl',
  icon: Activity,
  alt: 'Extra large icon',
  color: 'text-red-500',
}

export const Custom = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  size: 100,
  icon: Activity,
  alt: 'Small icon',
  color: 'text-black-500',
}
