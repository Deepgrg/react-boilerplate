import { useCallback } from 'react'
import { useFormContext, useFormState } from 'react-hook-form'
import { IFormElementWrapper } from '@/components/functional/Form/form.types'
import FormLabel from '@/components/functional/Form/FormWrapper/FormLabel'
import FooterText from '@/components/functional/Form/FormWrapper/FooterText'
import FormErrorMessage from '@/components/functional/Form/FormWrapper/FormErrorMessage'
import { Box } from '@/components/ui'
import { FieldValues } from 'react-hook-form/dist/types'

/**
 * The wrapper which wraps input field with 'label', 'icons', 'bottomText' and 'errorMessage'
 * @param props label, name, control: react-hook-form object, leftIcon, rightIcon
 * @returns label, icon {before or after}, bottomText, errorMessage
 */
const FormElementWrapper = <InitialValues extends FieldValues>(props: IFormElementWrapper<InitialValues>) => {
  const {
    label,
    name,
    children,
    footerText,
    optional,
    formGroupClass,
    // touchedFields,
    errors: controlError,
    control,
    icon,
  } = props
  const { control: contextControl } = useFormContext<InitialValues>() ?? {}
  let { errors } = useFormState<InitialValues>({ control: control ?? contextControl }) ?? {}

  errors = controlError || errors

  const iconWrapper = useCallback(
    () => (
      <>
        {icon?.position === 'left' ? icon.component : null}
        {children}
        {icon?.position === 'right' ? icon.component : null}
      </>
    ),
    [icon, children],
  )

  return (
    <Box className={`${formGroupClass ?? ''}`}>
      {label && <FormLabel label={label} name={name} optional={optional} />}
      {icon ? iconWrapper() : children}
      {footerText && <FooterText text={footerText} />}
      <FormErrorMessage
        errors={errors}
        // touchFields={touchedFields}
        name={name}
      />
    </Box>
  )
}

export default FormElementWrapper
