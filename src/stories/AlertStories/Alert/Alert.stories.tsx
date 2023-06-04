import { Alert } from '@/components/ui/feedback/Alert'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Alerts',
  component: Alert,
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
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Alerts = Template.bind({})
Alerts.parameters = {
  docs: {
    storyDescription: 'Alert Component',
  },
}
Alerts.args = {
  title: 'Alert',
  description: 'Alert Description',
  isDismissible: true,
}
