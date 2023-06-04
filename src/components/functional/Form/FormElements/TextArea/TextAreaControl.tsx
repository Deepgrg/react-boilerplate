import { useFormContext } from 'react-hook-form'
import TextAreaComponent from '@/components/functional/Form/FormElements/TextArea/TextAreaComponent'
import { ITextArea } from '@/components/functional/Form/FormElements/form-elemets.types'
import { errorStyleInput } from '@/components/functional/Form/utils'
import FormElementWrapper from '@/components/functional/Form/FormWrapper/FormElementWrapper'

const TextAreaControl: React.FC<ITextArea> = (props) => {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext()
  const { forwardRef, name } = props
  const value = getValues(name)
  const conditionalProps = {
    register,
    errors,
    ...(value && value),
    forwardRef,
  }

  return (
    <FormElementWrapper {...props}>
      <TextAreaComponent
        {...props}
        {...conditionalProps}
        errorStyle={errorStyleInput}
      />
    </FormElementWrapper>
  )
}

export default TextAreaControl
