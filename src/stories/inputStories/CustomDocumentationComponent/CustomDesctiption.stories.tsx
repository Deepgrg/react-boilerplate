import { ComponentStory, ComponentMeta } from '@storybook/react'
import CustomDocumentationComponent from './CustomDocumentationComponent'
import { CustomDocumentation } from './CustomDocumentation'

export default {
  title: 'Example/CustomDocumentation',
  component: CustomDocumentationComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    // docs: {
    //   page: CustomDocumentation,
    // },
  },
} as ComponentMeta<typeof CustomDocumentationComponent>

const Template: ComponentStory<typeof CustomDocumentationComponent> = (
  args
) => <CustomDocumentationComponent {...args} />

export const CustomDocument = Template.bind({})
CustomDocument.parameters = {
  docs: {
    page: CustomDocumentation,
  },
}
CustomDocument.args = {
  title: 'CustomDocumentationComponent',
  description: 'This is description',
}
