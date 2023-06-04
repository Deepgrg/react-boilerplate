import React from 'react'
import { ArrayPath, Control, FieldValues, useFieldArray, UseFieldArrayReturn } from 'react-hook-form'
import { isFunction } from '@/utility/utility'

export interface FieldArrayProps<InitialValues extends FieldValues> {
  name: ArrayPath<InitialValues>
  control?: Control<InitialValues>
  children:
    | React.ReactElement
    | ((formValues: UseFieldArrayReturn<InitialValues, ArrayPath<InitialValues>>) => React.ReactElement)
}

const FieldArray = <InitialValues extends FieldValues>(props: FieldArrayProps<InitialValues>) => {
  const { control, name, children } = props

  const fieldArray = useFieldArray<InitialValues>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name, // unique name for your Field Array
  })

  if (!React.isValidElement(children) && isFunction(children)) return React.createElement(children, fieldArray)
  return children
}

export default FieldArray
