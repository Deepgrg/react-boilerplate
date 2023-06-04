import React from 'react'
import { TextArea } from '@/components/ui'
import { ITextArea } from '@/components/functional/Form/FormElements/form-elemets.types'

const TextAreaComponent: React.FC<ITextArea> = (props) => {
  const {
    register,
    forwardRef,
    disabled,
    readOnly,
    name,
    rows = 4,
    placeholder,
    maxLength,
    onChange,
    value,
    errorStyle,
    errors,
  } = props

  const {
    ref,
    onChange: RHFOnChange,
    ...restReg
  } = (register && register(name)) || {}

  const conditionalProps = {
    ...(register && { ...restReg }),
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (RHFOnChange) RHFOnChange(event)
    onChange?.(event)
  }

  return (
    <TextArea
      id={name}
      ref={forwardRef ?? ((e) => {
        if (ref) ref(e)
      })}
      style={errors?.[name] && { ...errorStyle }}
      disabled={disabled}
      readOnly={readOnly}
      name={name}
      rows={rows}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={handleChange}
      {...conditionalProps}
    />
  )
}

export default TextAreaComponent
