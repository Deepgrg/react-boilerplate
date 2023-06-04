import { Box } from '@/components/ui/core/Box'
import { Button } from '@/components/ui/core/button'
import { Avatar } from '@/components/ui/data-display/Avatar'
import { CommentFormContainerBaseClass } from '@/components/ui/data-display/Comments/Comment.schema'
import { TextArea } from '@/components/ui/data-entry/FormFields/TextArea/TextArea'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { ComponentPropsWithRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  containerClassName?: string
  avatarImage?: string
  commentor: string
  buttonText?: string
  textAreaProps?: ComponentPropsWithRef<'textarea'>
  submitBtnProps?: ComponentPropsWithRef<typeof Button>
}

const CommentForm = ({
  containerClassName,
  avatarImage,
  commentor,
  buttonText = 'Add a comment',
  textAreaProps,
  submitBtnProps,
}: Props) => {
  const commentContainerClasses = getComputedClassNames(
    CommentFormContainerBaseClass,
    containerClassName
  )

  return (
    <Box className={commentContainerClasses}>
      {avatarImage ? (
        <Avatar variant={'image'} imageSrc={avatarImage} size={'sm'} />
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
      <Box className="flex flex-col flex-1 ml-4 items-start ">
        <TextArea {...textAreaProps} placeholder="Placeholder" rows={3} />
        <Button
          {...submitBtnProps}
          variant="info"
          className="mt-4"
          display="inline"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default CommentForm
