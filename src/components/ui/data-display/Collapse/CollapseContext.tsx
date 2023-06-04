import React from 'react'

export const CollapseContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>> | (() => void)
  openPropsProvided: boolean
}>({
  open: false,
  setOpen: () => {
  },
  openPropsProvided: false,
})
