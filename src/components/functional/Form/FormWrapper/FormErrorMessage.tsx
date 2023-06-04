import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import {
  FieldErrors,
  // FieldNamesMarkedBoolean,
  // FieldValues,
} from 'react-hook-form'

export interface IErrorMessage {
  errors: FieldErrors
  // touchFields?: FieldNamesMarkedBoolean<FieldValues>
  name: string
}

const FormErrorMessage: React.FC<IErrorMessage> = ({
  errors,
  name,
  // touchFields,
}) => {
  // if (!touchFields?.[name]) return null
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <span className="error mt-2" style={{ fontStyle: 'normal' }}>
          {' '}
          <span className="ic-error" /> {message}
        </span>
      )}
    />
  )
}

export default FormErrorMessage
