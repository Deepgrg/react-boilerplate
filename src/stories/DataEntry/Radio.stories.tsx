import { Radio } from '@/components/ui/data-entry/Radio'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'DataEntry/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const radio = Template.bind({})

radio.parameters = {
  docs: {
    storyDescription: ' Radio Component',
  },
}

radio.args = {
  variant: 'active',
  label: 'Male',
  id: 'Male',
}
