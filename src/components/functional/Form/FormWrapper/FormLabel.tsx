import React from 'react'

export interface IFormLabel {
  label: string
  name: string
  optional?: boolean
}

const FormLabel: React.FC<IFormLabel> = ({ label, name, optional }) => {
  return (
    <label htmlFor={name}>
      {label}
      {optional ? (
        <span className="text-sm">
          <i>( Optional )</i>
        </span>
      ) : null}
    </label>
  )
}

export default FormLabel
