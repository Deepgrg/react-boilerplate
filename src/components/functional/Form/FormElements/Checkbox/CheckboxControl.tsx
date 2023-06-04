import CheckboxComponent from '@/components/functional/Form/FormElements/Checkbox/CheckboxComponent'
import { IFormCheckbox } from '@/components/functional/Form/FormElements/form-elemets.types'
import FormElementWrapper from '@/components/functional/Form/FormWrapper/FormElementWrapper'
import { useFormContext } from 'react-hook-form'

const CheckboxControl: React.FC<IFormCheckbox> = (props) => {
  const { register, getValues } = useFormContext()

  const { name, forwardRef } = props

  const value = getValues(name)

  const conditionalProps = {
    register,
    ...(value && value),
    ...(forwardRef && {
      forwardRef: (e: HTMLInputElement) => {
        if (forwardRef) forwardRef.current = e
      },
    }),
  }

  return (
    <FormElementWrapper {...props}>
      <CheckboxComponent {...props} {...conditionalProps} />
    </FormElementWrapper>
  )
}

export default CheckboxControl
