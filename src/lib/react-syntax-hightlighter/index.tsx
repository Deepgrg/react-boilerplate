import { FC } from 'react'
import { Prism, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Code: FC<SyntaxHighlighterProps> = (props) => {
  const { children, language = 'jsx', style = a11yDark, ...rest } = props
  return (
    <Prism style={style} language={language} {...rest}>
      {children}
    </Prism>
  )
}
