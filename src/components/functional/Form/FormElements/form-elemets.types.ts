import { FormElementWrapper, IFormGroup } from '@/components/functional/Form/form.types'
import { OptionType, SelectProps } from '@/components/functional/Select'
import { KeyboardEventHandler } from 'react'
import { Control, DeepRequired, FieldErrorsImpl } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

interface IFormInput extends IFormGroup {
  type?: 'text' | 'number' | 'password' | 'email'
  style?: string
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>
  maxLength?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  forwardRef?: React.MutableRefObject<HTMLInputElement>
}

interface ITextArea extends Omit<IFormGroup, 'onChange'> {
  forwardRef?: React.MutableRefObject<HTMLTextAreaElement>
  rows?: number
  maxLength?: number
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  value?: string
}

interface IFormCheckbox extends IFormGroup {
  forwardRef?: React.MutableRefObject<HTMLInputElement>
  checked?: string | number
  label?: string
  options: IOption[]
}

interface IOption {
  label: string
  value: string | number
}

interface IFormRadio extends Omit<IFormGroup, 'value'> {
  forwardRef?: React.MutableRefObject<HTMLInputElement>
  checked?: string | number
  label?: string
  options: OptionType[]
  radioBlockClass?: string
  value?: string | number | readonly string[]
}

export type FormSelectProps<
  OptType extends OptionType,
  ValueOnChange extends boolean,
  IsMultiCheckbox extends boolean,
  IsMulti extends boolean,
  InitialValues extends FieldValues,
> = SelectedPartial<SelectProps<OptType, ValueOnChange, IsMultiCheckbox, IsMulti>, 'name' | 'value' | 'onChange'> &
  Omit<FormElementWrapper<InitialValues>, 'icon' | 'readOnly' | 'errorStyle'> & {
    errors?: FieldErrorsImpl<DeepRequired<InitialValues>>
    control?: Control<InitialValues>
  }

export type { IFormCheckbox, IFormGroup, IFormInput, IFormRadio, IOption, ITextArea }
