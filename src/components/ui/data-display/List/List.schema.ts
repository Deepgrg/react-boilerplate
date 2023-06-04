import React, { PropsWithChildren } from 'react'

export interface Props extends PropsWithChildren {
  heading: string
  /* Sub heading props require array of string or just a string */
  subHeading: Array<string> | string
  subHeadingIcon?: React.ReactNode
  /* If the value is string, text will be rendered otherwise it will be rendered as react node  */
  trail: React.ReactNode | string
  lead?: React.ReactNode
}
