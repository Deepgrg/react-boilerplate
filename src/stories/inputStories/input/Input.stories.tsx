import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import InputComponentStory from './InputComponent'

export default {
  title: 'Fields/Input',
  component: InputComponentStory,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  // parameters: {
  //   docs: {
  //     description: {
  //       component: 'Primary UI component for Input Component',
  //     },
  //   },
  // },
} as ComponentMeta<typeof InputComponentStory>

const Template: ComponentStory<typeof InputComponentStory> = (args) => (
  <InputComponentStory {...args} />
)

export const Text = Template.bind({})
Text.parameters = {
  docs: {
    page: () => (
      <>
        <Title>Input Text Field</Title>
        <Subtitle />
        <Description>
          Changing the type of the text field will yield different text types.
          For instance, text, password, email and so on.
        </Description>
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
}
Text.args = {
  name: 'text',
  type: 'text',
  placeholder: 'Please Input Text',
}

export const Large = Template.bind({})
Large.parameters = {
  docs: {
    storyDescription: 'Large input text field',
  },
}
Large.args = {
  name: 'text',
  type: 'text',
  placeholder: 'Please Input Text',
  size: 100,
}

export const Small = Template.bind({})
Small.args = {
  name: 'text',
  type: 'text',
  placeholder: 'Please Input Text',
  size: 25,
}
Small.parameters = {
  docs: {
    storyDescription: 'Small UI component for Input Component',
  },
}
