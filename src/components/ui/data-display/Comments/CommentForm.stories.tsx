import CommentForm from '@/components/ui/data-display/Comments/CommentForm'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'DataDisplay/CommentForm',
  component: CommentForm,
} as ComponentMeta<typeof CommentForm>

const Template: ComponentStory<typeof CommentForm> = (args) => {
  return <CommentForm {...args} />
}

export const Default = Template.bind({})
Default.args = {
  containerClassName: 'w-8/12',
  commentor: 'hello',
}
