import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { TextArea } from '@/components/ui/data-entry/FormFields/TextArea/TextArea'

export default {
  title: 'DataEntry/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => {
  return <TextArea {...args} />
}
Template.args = {
  rows: 2,
}

export const Default = Template.bind({})
Default.args = {
  rows: 2,
  value: 'Hello world',
}

export const Small = Template.bind({})
Small.args = {
  rows: 2,
  size: 'sm',
  value: 'Hello world',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  value: 'This is disabled',
}

export const WithLabel: ComponentStory<typeof TextArea> = (args) => {
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="textarea" className="text-gray-900">
        Label
      </label>
      <TextArea id="textarea" {...args} />
    </div>
  )
}
