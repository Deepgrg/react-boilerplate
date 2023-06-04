import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextareaComponentStory from './TextareaComponent'

export default {
  title: 'Fields/Textarea',
  component: TextareaComponentStory,
  parameters: {
    docs: {
      description: {
        component: 'UI component for Textarea',
      },
    },
  },
} as ComponentMeta<typeof TextareaComponentStory>

const Template: ComponentStory<typeof TextareaComponentStory> = (args) => (
  <TextareaComponentStory {...args} />
)

export const Textarea = Template.bind({})
Textarea.args = {
  name: 'textarea',
  placeholder: 'Please Input Text',
}
