import { Box } from '@/components/ui/core/Box'
import { Icon } from '@/components/ui/core/Icon'
import { Avatar } from '@/components/ui/data-display/Avatar'
import { Text } from '@/components/ui/data-display/Text/index'
import { ThumbsDown, ThumbsUp } from 'phosphor-react'
import { Button } from '@/components/ui/core/button'
import { MouseEventHandler } from 'react'

interface Props {
  containerClassName?: string
  image?: string
  subtitle: string
  description: string

  commentor: string
  onCommentorClick?: MouseEventHandler<HTMLButtonElement>

  upvoteCount: number
  onUpvoteClick?: MouseEventHandler<HTMLButtonElement>

  downvoteCount: number
  onDownvoteClick?: MouseEventHandler<HTMLButtonElement>

  onReplyToClick?: MouseEventHandler<HTMLButtonElement>
}

const Comment = ({
  containerClassName,
  image,

  commentor,
  onCommentorClick,

  subtitle,
  description,

  upvoteCount,
  downvoteCount,

  onUpvoteClick,
  onDownvoteClick,

  onReplyToClick,
}: Props) => {
  return (
    <Box className={`flex ${containerClassName}`}>
      {image ? (
        <Avatar variant={'image'} imageSrc={image} size={'sm'} />
      ) : (
        <Avatar
          variant={'initials'}
          initials={commentor
            .split(' ')
            .map((letter) => letter[0])
            .join('')}
          size={'sm'}
        />
      )}
      <Box className="flex flex-col flex-1 ml-4 ">
        <Box className="flex flex-row mb-3">
          {onCommentorClick ? (
            <Button
              onClick={onCommentorClick}
              className="font-medium text-sm leading-4 mr-3"
            >
              {commentor}
            </Button>
          ) : (
            <Text className="font-medium text-sm leading-4 mr-3">
              {commentor}
            </Text>
          )}
          <Text
            variant="subtitle3"
            className="text-gray-600 text-xs font-normal"
          >
            {subtitle}
          </Text>
        </Box>
        <Text className="text-xs font-normal leading-4 mb-4">
          {description}
        </Text>
        <Box className="flex">
          {onUpvoteClick ? (
            <Button
              onClick={onUpvoteClick}
              variant="plain"
              className="text-xs leading-4 font-normal mr-3 text-gray-600"
            >
              <Icon
                icon={ThumbsUp}
                size={12}
                className="text-center mr-1 align-middle"
              />
              {upvoteCount}
            </Button>
          ) : (
            <Text className="text-xs leading-4 font-normal mr-3 text-gray-600">
              <Icon
                icon={ThumbsUp}
                size={12}
                className="text-center mr-1 align-middle"
              />
              {upvoteCount}
            </Text>
          )}

          {onDownvoteClick ? (
            <Button
              onClick={onDownvoteClick}
              variant="plain"
              className="text-xs ml-0 leading-4 font-normal mr-3 text-gray-600"
            >
              <Icon
                icon={ThumbsDown}
                size={12}
                className="text-center mr-1 align-middle"
              />
              {downvoteCount}
            </Button>
          ) : (
            <Text className="text-xs ml-0 leading-4 font-normal mr-3 text-gray-600">
              <Icon
                icon={ThumbsDown}
                size={12}
                className="text-center mr-1 align-middle"
              />
              {downvoteCount}
            </Text>
          )}
          <Button
            onClick={onReplyToClick}
            variant="plain"
            className="ml-0 text-xs leading-4 font-normal text-primary"
          >
            Reply to
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Comment
