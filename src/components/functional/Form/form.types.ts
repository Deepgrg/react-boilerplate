import { Control, ControllerRenderProps, DeepRequired, FieldErrorsImpl, FieldValues, Path, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import React from 'react'

interface IReactHookForm<InitialValues extends FieldValues> {
  register?: UseFormRegister<InitialValues>
  setValue?: UseFormSetValue<InitialValues>
  watch?: UseFormWatch<InitialValues>
  // touchedFields?: FieldNamesMarkedBoolean<InitialValues>
  errors?: FieldErrorsImpl<DeepRequired<InitialValues>>
  values?: InitialValues
  control?: Control<InitialValues>
  field?: ControllerRenderProps<InitialValues>
  dirtyFields?: {
    [x: string]: string
  }
}

interface FormElementWrapper<InitialValues extends FieldValues> {
  name: Path<InitialValues>
  ref?: React.LegacyRef<HTMLInputElement> | undefined
  errorStyle?: React.CSSProperties
  label?: string
  optional?: boolean
  formGroupClass?: string
  footerText?: string
  children?: React.ReactNode
  icon?: {
    component: React.ReactNode
    position: 'left' | 'right'
  }
}

type IFormElementWrapper<InitialValues extends FieldValues = FieldValues> = IReactHookForm<InitialValues> & FormElementWrapper<InitialValues>


interface IFormGroup extends IFormElementWrapper {
  className?: string
  placeholder?: string
  value?: string | number | (string | number)[]
  formGroupClass?: string
  readOnly?: boolean
  disabled?: boolean
  regName?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type { IFormElementWrapper, IFormGroup, IReactHookForm, FormElementWrapper }
