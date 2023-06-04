import { useFormContext } from 'react-hook-form'
import { IFormRadio } from '@/components/functional/Form/FormElements/form-elemets.types'
import RadioComponent from '@/components/functional/Form/FormElements/Radio/RadioComponent'
import FormElementWrapper from '@/components/functional/Form/FormWrapper/FormElementWrapper'

const RadioControl: React.FC<IFormRadio> = (props) => {
  const { register, setValue, getValues } = useFormContext()

  const { name, forwardRef } = props

  const value = getValues(name)

  const conditionalProps = {
    register,
    setValue,
    ...(value && value),
    ...(forwardRef && {
      forwardRef: (e: HTMLInputElement) => {
        if (forwardRef) forwardRef.current = e
      },
    }),
  }
  return (
    <FormElementWrapper {...props}>
      <RadioComponent {...props} {...conditionalProps} />
    </FormElementWrapper>
  )
}

export default RadioControl
