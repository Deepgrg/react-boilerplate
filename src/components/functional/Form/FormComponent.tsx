import React from 'react'
import * as Yup from 'yup'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  DefaultValues,
  FormProvider,
  useForm,
  useWatch,
  UseFormProps,
} from 'react-hook-form'
import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types'

interface IHookForm<InitialValues extends FieldValues> extends UseFormProps {
  onSubmit: SubmitHandler<InitialValues>
  children: React.ReactNode | React.ReactNode[] | (() => JSX.Element)
  initialValues?: DefaultValues<InitialValues>
  validationSchema?: Yup.AnyObjectSchema
  showDevTools?: boolean
}
function FormComponent<InitialValues extends FieldValues>(
  props: IHookForm<InitialValues>
) {
  const {
    initialValues,
    validationSchema = Yup.object().shape({}),
    showDevTools = false,
    children,
    mode = 'all',
    reValidateMode = 'onChange',
    onSubmit,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {children && typeof children === 'function'
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

export default FormComponent
