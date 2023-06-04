import type { IFormInput } from '@/components/functional/Form/FormElements/form-elemets.types'
import React from 'react'

const InputComponent: React.FC<{ formProps: IFormInput }> = (props) => {
  const {
    formProps: { register, type = 'text', name, errorStyle, errors, ...restFormProps },
  } = props

  return (
    <input
      type={type}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      style={errors?.[name] ? errorStyle : {}}
      id={name}
      {...(register ? register(name) : { name })}
      {...restFormProps}
    />
  )
}

export default InputComponent
