import { Icon } from '@/components/ui/core/Icon'
import { TextInput } from '@/components/ui/data-entry/FormFields/TextInput/TextInput'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CaretDown } from 'phosphor-react'

export default {
  title: 'DataEntry/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => {
  return <TextInput {...args} />
}
Template.args = {
  placeholder: 'Input text here',
}

export const Regular = Template.bind({})

export const Small = Template.bind({})
Small.args = {
  fieldSize: 'sm',
}

export const InputWithRightIcon = Template.bind({})
InputWithRightIcon.args = {
  RightIcon: <Icon icon={CaretDown} size={16} />,
}

export const InputWithLeftIcon = Template.bind({})
InputWithLeftIcon.args = {
  LeftIcon: <Icon icon={CaretDown} size={16} />,
}

export const InputWithIconsOnBothSides = Template.bind({})
InputWithIconsOnBothSides.args = {
  RightIcon: <Icon icon={CaretDown} size={16} />,
  LeftIcon: <Icon icon={CaretDown} size={16} />,
}
