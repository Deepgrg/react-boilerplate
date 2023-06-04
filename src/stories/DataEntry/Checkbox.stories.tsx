import { Checkbox } from '@/components/ui/data-entry/Checkbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'DataEntry/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const checkbox = Template.bind({})

checkbox.parameters = {
  docs: {
    storyDescription: 'Checkbox Component',
  },
}

checkbox.args = {
  variant: 'active',
  color: 'text-cool-gray-400',
}
