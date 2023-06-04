import { Button } from '@/components/ui/core/button/Button'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Ui/Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello World</Button>
)

export const Solid = Template.bind({})
Solid.args = {
  btnType: 'solid',
}

export const Outlined = Template.bind({})
Outlined.args = {
  btnType: 'outlined',
}

export const Ghost = Template.bind({})
Ghost.args = {
  btnType: 'ghost',
}
