import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Variant } from "@/components/ui/data-entry/Switch/Switch.schema"
import { Switch } from '@/components/ui/data-entry/Switch'

interface IToggleProps {
    label: string
    variant?:Variant
    onChange?: () => void
    checked?:boolean
  }
  const ToggleComponentStory = (props: IToggleProps) => {
    const { label, variant, checked,onChange } = props
    return (
      <Switch
        label={label}
        checked={checked}
        variant={variant}
        onChange={onChange}
      />
    )
  }
  
export default {
  title: 'DataEntry/Switch',
  component: ToggleComponentStory,
  parameters: {
    docs: {
      description: {
        component: 'UI component for Switch',
      },
    },
  },
} as ComponentMeta<typeof ToggleComponentStory>
const Template: ComponentStory<typeof ToggleComponentStory> = (args) => (
  <ToggleComponentStory {...args} />
)

export const RoundedToggle = Template.bind({})
RoundedToggle.args = {
  label: 'Rounded',
  variant:'Rounded'
}

export const RoundedSMToggle = Template.bind({})
RoundedSMToggle.args = {
  label: 'RoundedSM',
  variant:'RoundedSm'
}
export const RoundedLgToggle = Template.bind({})
RoundedLgToggle.args = {
  label: 'RoundedLg',
  variant:'RoundedLg'
}
export const BorderedToggle = Template.bind({})
BorderedToggle.args = {
  label: 'Bordered',
  variant:'Bordered'
}
export const SlimToggle = Template.bind({})
SlimToggle.args = {
  label: 'Slim',
  variant:'Slim'
}
export const BoxToggle = Template.bind({})
BoxToggle.args = {
  label: 'Box',
  variant:'Box'
}