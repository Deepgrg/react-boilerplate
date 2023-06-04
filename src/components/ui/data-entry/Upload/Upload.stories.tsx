import { Upload as UploadComponent } from '@/components/ui/data-entry/Upload/Upload'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const meta: ComponentMeta<typeof UploadComponent> = {
  title: 'DataEntry/Upload',
  component: UploadComponent,
}

export default meta

const Template: ComponentStory<typeof UploadComponent> = (args) => (
  <UploadComponent {...args} helperText="Hello world" />
)

export const Upload = Template.bind({})
