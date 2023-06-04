import { ComponentMeta, ComponentStory } from '@storybook/react'
import AvatarGroup from './AvatarGroup'

export default {
  title: 'DataDisplay/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    as: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof AvatarGroup>

const data = [
  {
    alt: 'profile-image',
    imageSrc:
      'https://cdn.mos.cms.futurecdn.net/vVTbPncnvchc646usxRoa8-200-100.jpg',
    initials: 'SN',
  },
  {
    alt: 'profile-image',
    imageSrc:
      'https://cdn.mos.cms.futurecdn.net/vVTbPncnvchc646usxRoa8-200-100.jpg',
    initials: 'SN',
  },
  {
    alt: 'profile-image',
    imageSrc: '',
    initials: 'MK',
  },
  {
    alt: 'profile-image',
    imageSrc: '',
    initials: 'MR',
  },
  {
    alt: 'profile-image',
    imageSrc: '',
    initials: 'BB',
  },
  {
    alt: 'profile-image',
    imageSrc: '',
    initials: 'BB',
  },
  {
    alt: 'profile-image',
    imageSrc: '',
    initials: 'BB',
  },
]

const Template: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroup {...args} />
)

export const WithoutAction = Template.bind({})
WithoutAction.args = {
  avatarGroup: data,
}

export const WithAction = Template.bind({})
WithAction.args = {
  avatarGroup: data,
  handleActionButton: () => {},
}

// export const Icon = Template.bind({})
// Icon.args = {
//   variant: 'icon',
// }
