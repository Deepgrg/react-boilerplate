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
import { Note } from './Note'

export default {
  title: 'Data Display/Note',
  component: Note,
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
} as ComponentMeta<typeof Note>

const Template: ComponentStory<typeof Note> = (args) => <Note {...args} />

export const Notes = Template.bind({})
Notes.parameters = {
  docs: {
    page: () => (
      <>
        <Title>Note Component</Title>
        <Subtitle />
        <Description>
          Note cards are those which are shown when we have to provide important
          information about any topics. It is a UI which is sticked on any part.
        </Description>
        <Description>Use to show important information to users.</Description>
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
}
Notes.args = {
  title: 'Important Note',
  description:
    'Note cards are those which are shown when we have to provide important information about any topics. It is a UI which is sticked on any part.',
}
