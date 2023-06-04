import { FC } from 'react'
import { Source } from '@storybook/addon-docs'
import { SourceCodeProps, SourceErrorProps } from '@storybook/components'

type CodeProps = SourceErrorProps &
  SourceCodeProps & {
  children: string
}

export const Code: FC<CodeProps> = (props) => {
  const { children, ...rest } = props
  return <Source code={children} language={'jsx'} dark format {...rest} />
}
