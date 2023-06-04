import React from 'react'
import { OptionType, Select } from '@/components/functional/Select'
import { Controller, FieldValues, useFormContext } from 'react-hook-form'
import { FormElementWrapper } from '@/components/functional/Form/FormWrapper'
import { FormSelectProps } from '@/components/functional/Form/FormElements/form-elemets.types'

const FormSelect = <
  OptType extends OptionType,
  ValueOnChange extends boolean,
  IsMultiCheckbox extends boolean,
  IsMulti extends boolean,
  InitialValues extends FieldValues
>(
  props: FormSelectProps<OptType, ValueOnChange, IsMultiCheckbox, IsMulti, InitialValues>,
) => {
  const { name, onChange, value, control, errors, ...rest } = props
  const { control: contextControl, formState } = useFormContext<InitialValues>() ?? {}

  return (
    <Controller
      render={({ field }) => (
        <FormElementWrapper errors={errors ?? formState?.errors} {...props}>
          <Select
            onChange={(data, actionMeta) => {
              field.onChange({ target: { value: data, name: actionMeta.name } })
            }}
            onBlur={field.onBlur}
            value={field.value}
            {...rest}
          />
        </FormElementWrapper>
      )}
      name={name}
      control={control ?? contextControl}
    />
  )
}

export default FormSelect
