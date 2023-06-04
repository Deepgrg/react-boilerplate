import React from 'react'
import { useFormContext } from 'react-hook-form'
import { errorStyleInput } from '@/components/functional/Form/utils'
import InputComponent from '@/components/functional/Form/FormElements/Input/InputComponent'
import { IFormInput } from '@/components/functional/Form/FormElements/form-elemets.types'
import { FormElementWrapper } from '@/components/functional/Form/FormWrapper'

const InputControl: React.FC<IFormInput> = (props) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors, touchedFields },
    control,
  } = useFormContext()
  const { name, forwardRef, ...reset } = props
  const value = getValues(name)
  const formContext = {
    errors,
    touchedFields,
    errorStyle: errorStyleInput,
    control,
    register,
    setValue,
  }
  const conditionalProps = {
    errors,
    register,
    ...(value && { value }),
    ...(errors?.[name] && { errorStyle: errorStyleInput }),
    ...(forwardRef && {
      forwardRef: (e: HTMLInputElement) => {
        if (forwardRef) forwardRef.current = e
      },
    }),
  }

  return (
    <FormElementWrapper {...formContext} {...props}>
      <InputComponent
        formProps={{ ...props, ...conditionalProps }}
        {...reset}
      />
    </FormElementWrapper>
  )
}

export default InputControl
