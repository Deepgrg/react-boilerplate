import React from 'react'
import {
  ArgsTable,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { FileView } from './FileView'

export default {
  title: 'Data Display/File View',
  component: FileView,
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
} as ComponentMeta<typeof FileView>

const Template: ComponentStory<typeof FileView> = (args) => (
  <FileView {...args} />
)

export const Fileview = Template.bind({})
Fileview.parameters = {
  docs: {
    page: () => (
      <>
        <Title>File View Component</Title>
        <Subtitle />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
}
Fileview.args = {
  fileName: 'Report.pdf',
  fileDetails: '200kb',
}
