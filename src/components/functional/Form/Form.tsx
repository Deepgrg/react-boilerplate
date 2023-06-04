import React from 'react'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormSelect } from '@/components/functional/Form/FormElements/Select'
import { isFunction } from '@/utility/utility'
import { FooterText, FormErrorMessage, FormLabel } from '@/components/functional/Form/FormWrapper'
import CheckboxControl from '@/components/functional/Form/FormElements/Checkbox/CheckboxControl'
import InputControl from '@/components/functional/Form/FormElements/Input/InputControl'
import TextAreaControl from '@/components/functional/Form/FormElements/TextArea/TextAreaControl'
import RadioControl from '@/components/functional/Form/FormElements/Radio/RadioControl'

import { AnyObjectSchema } from 'yup'
import {
  DeepPartialSkipArrayKey,
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
  useWatch,
} from 'react-hook-form'
import { IErrorMessage } from '@/components/functional/Form/FormWrapper/FormErrorMessage'
import { IFooterText } from '@/components/functional/Form/FormWrapper/FooterText'
import { IFormLabel } from '@/components/functional/Form/FormWrapper/FormLabel'
import { OptionType } from '@/components/functional/Select/Select.schema'
import {
  FormSelectProps,
  IFormCheckbox,
  IFormInput,
  IFormRadio,
  ITextArea,
} from '@/components/functional/Form/FormElements/form-elemets.types'
import FieldArray, { FieldArrayProps } from '@/components/functional/Form/FieldArray/FieldArray'

export interface FormProps<InitialValues extends FieldValues> extends UseFormProps {
  onSubmit: SubmitHandler<InitialValues>
  children:
    | React.ReactElement
    | Array<React.ReactElement>
    | ((
        formValues: UseFormReturn<InitialValues, unknown> & {
          values: DeepPartialSkipArrayKey<InitialValues>
        },
      ) => React.ReactElement)
  initialValues?: DefaultValues<InitialValues>
  validationSchema?: AnyObjectSchema
  showDevTools?: boolean
  formRef?: React.RefObject<HTMLFormElement>
}

interface FormComponents {
  Check: React.FC<IFormCheckbox>
  Input: React.FC<IFormInput>
  Textarea: React.FC<ITextArea>
  Radio: React.FC<IFormRadio>
  Error: React.FC<IErrorMessage>
  FooterText: React.FC<IFooterText>
  Label: React.FC<IFormLabel>

  Select<
    OptType extends OptionType,
    ValueOnChange extends boolean,
    IsMultiCheckbox extends boolean,
    IsMulti extends boolean,
    InitialValues extends FieldValues,
  >(
    props: FormSelectProps<OptType, ValueOnChange, IsMultiCheckbox, IsMulti, InitialValues>,
  ): JSX.Element

  FieldArray<InitialValues extends FieldValues>(props: FieldArrayProps<InitialValues>): React.ReactElement
}

interface FormType extends FormComponents {
  <InitialValues extends FieldValues>(props: FormProps<InitialValues>): JSX.Element
}

const Form: FormType = <InitialValues extends FieldValues>(props: FormProps<InitialValues>) => {
  const {
    initialValues,
    validationSchema,
    showDevTools,
    children,
    mode = 'all',
    reValidateMode = 'onChange',
    onSubmit,
    formRef,
  } = props

  const methods = useForm<InitialValues>({
    ...(validationSchema && {
      resolver: yupResolver(validationSchema),
      mode,
      reValidateMode,
    }),
    ...(initialValues && { defaultValues: initialValues }),
  })

  const { control, handleSubmit } = methods
  const values = useWatch({ control })

  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        {!React.isValidElement(children) && isFunction(children)
          ? React.createElement(children, {
              ...methods,
              values,
            })
          : children}
      </form>
      {showDevTools && <DevTool control={control} />}
    </FormProvider>
  )
}

Form.Check = CheckboxControl
Form.Input = InputControl
Form.Textarea = TextAreaControl
Form.Radio = RadioControl
Form.Select = FormSelect
Form.Error = FormErrorMessage
Form.FooterText = FooterText
Form.Label = FormLabel
Form.FieldArray = FieldArray

export default Form
