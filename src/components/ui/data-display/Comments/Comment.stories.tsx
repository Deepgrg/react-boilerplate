import Comment from '@/components/ui/data-display/Comments/Comment'
import {
  LeadingHorizontalLine,
  LeadingVerticalLine,
  TrailingVerticalLine,
} from '@/components/ui/data-display/Comments/Comment.schema'
import CommentForm from '@/components/ui/data-display/Comments/CommentForm'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'DataDisplay/Comment',
  component: Comment,
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args) => {
  return (
    <Comment
      {...args}
      commentor="Alice in Chains"
      description="Am i wrong ? Have I gone too far to get home?"
      subtitle="8 hours ago"
      upvoteCount={4000}
      downvoteCount={0}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  containerClassName: 'w-8/12',
}

export const CommentHierarchy: ComponentStory<typeof Comment> = (args) => {
  return (
    <ul>
      <li>
        <Comment
          {...args}
          commentor="Alice in Chains first"
          description="Am i wrong ? Have I gone too far to get home?"
          subtitle="8 hours ago"
          upvoteCount={4000}
          downvoteCount={0}
        />
        <ul className="mt-6 ml-12">
          <li
            className={`relative ${LeadingHorizontalLine} ${LeadingVerticalLine}`}
          >
            <div className={TrailingVerticalLine}>
              <CommentForm commentor="helo" />
            </div>
          </li>
          <li
            className={`relative ${LeadingHorizontalLine}  ${LeadingVerticalLine}`}
          >
            <Comment
              commentor="Alice in Chains"
              description="Am i wrong ? Have I gone too far to get home?"
              subtitle="8 hours ago"
              upvoteCount={4000}
              downvoteCount={0}
            />
          </li>
          <ul className="mt-6 ml-12">
            <li
              className={`relative mt-6 ${LeadingHorizontalLine} ${LeadingVerticalLine}`}
            >
              <div className={TrailingVerticalLine}>
                <CommentForm commentor="helo" />
              </div>
            </li>
            <li
              className={`relative mt-6 ${LeadingHorizontalLine}  ${LeadingVerticalLine}`}
            >
              <Comment
                commentor="Alice in Chains"
                description="Am i wrong ? Have I gone too far to get home?"
                subtitle="8 hours ago"
                upvoteCount={4000}
                downvoteCount={0}
              />
            </li>
          </ul>
        </ul>
      </li>
    </ul>
  )
}
