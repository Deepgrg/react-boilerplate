import { FormProvider, useForm } from 'react-hook-form'
import { FC } from 'react'

export const HookFormWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const formMethods = useForm<{ label: '' }>()
  return <FormProvider {...formMethods}>{children}</FormProvider>
}
