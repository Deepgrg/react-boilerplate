import React, { FC, FunctionComponent } from 'react'
import { Accept, DropEvent, FileRejection, useDropzone } from 'react-dropzone'

interface DropZoneChildProps {
  isDragReject?: boolean
  isDragAccept?: boolean
  isFocused?: boolean
  isFileDialogActive?: boolean
  isDragActive?: boolean
}

interface DropzoneProps {
  onChange: (
    files: File[],
    fileRejections?: FileRejection[],
    event?: DropEvent
  ) => void
  multiple?: boolean
  disabled?: boolean
  maxSize?: number
  children?: ((props: DropZoneChildProps) => React.ReactNode) | React.ReactNode
  accept?: Accept
}

const Dropzone: FC<DropzoneProps> = (props) => {
  const {
    multiple = false,
    onChange,
    children,
    disabled = false,
    maxSize = 2000000,
    accept = { 'image/jpg': ['.jpeg', '.jpg'], 'image/png': ['.png'] },
  } = props
  const {
    getRootProps,
    getInputProps,
    isDragReject,
    isDragAccept,
    isFocused,
    isFileDialogActive,
    isDragActive,
  } = useDropzone({ onDrop: onChange, multiple, disabled, maxSize, accept })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children && React.isValidElement(children)
        ? children
        : React.createElement(
            children as FunctionComponent<DropZoneChildProps> | string,
            {
              isDragReject,
              isDragAccept,
              isFocused,
              isFileDialogActive,
              isDragActive,
            }
          )}
    </div>
  )
}

export default Dropzone
