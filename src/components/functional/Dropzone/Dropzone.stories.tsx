import DropzoneComponent from '@/components/functional/Dropzone/Dropzone'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Functional/Dropzone',
  component: DropzoneComponent,
} as ComponentMeta<typeof DropzoneComponent>

const Template: ComponentStory<typeof DropzoneComponent> = (args) => {
  return <DropzoneComponent {...args} />
}
Template.args = {
  onChange: () => {},
}

export const Dropzone = Template.bind({})
