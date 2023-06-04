import { Pageaction } from '@/components/ui/navigation/Pageaction'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Pageaction',

  component: Pageaction,

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
} as ComponentMeta<typeof Pageaction>

const Template: ComponentStory<typeof Pageaction> = (args) => (
  <Pageaction {...args} />
)

export const PageAction = Template.bind({})

PageAction.parameters = {
  docs: {
    storyDescription: 'Page Action Component',
  },
}

PageAction.args = {
  ghostButtonLabel: 'label1',
  regularButtonLabel: 'label2',
  shadow: true,
}
