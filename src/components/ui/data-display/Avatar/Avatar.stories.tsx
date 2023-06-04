import { ComponentMeta, ComponentStory } from '@storybook/react'
import Avatar from './Avatar'

export default {
  title: 'DataDisplay/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      defaultValue: 'lg',
    },
    as: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Image = Template.bind({})
Image.args = {
  variant: 'image',
  imageSrc:
    'https://cdn.mos.cms.futurecdn.net/vVTbPncnvchc646usxRoa8-200-100.jpg',
}

export const Initials = Template.bind({})
Initials.args = {
  variant: 'initials',
  initials: 'ND',
}

export const Icon = Template.bind({})
Icon.args = {
  variant: 'icon',
}
