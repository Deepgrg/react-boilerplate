import React from 'react'

export interface IFooterText {
  text: string
}

const FooterText: React.FC<IFooterText> = ({ text }) => (
  <div className="mt-2">{text}</div>
)

export default FooterText
