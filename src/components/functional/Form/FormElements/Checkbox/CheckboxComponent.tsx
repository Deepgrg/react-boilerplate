import { IFormCheckbox } from '@/components/functional/Form/FormElements/form-elemets.types'
import React from 'react'

const CheckboxComponent: React.FC<IFormCheckbox> = (props) => {
  const { disabled, name, options, forwardRef, register, onChange } = props

  const {
    ref,
    onChange: RHFOnChange,
    ...restReg
  } = (register && register(name)) || {}

  const conditionalProps = {
    ...(register && { ...restReg }),
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (RHFOnChange) RHFOnChange(event)
    onChange?.(event)
  }

  return (
    <div>
      {options.map((checkbox) => {
        return (
          <div className="custom-control custom-checkbox" key={checkbox.value}>
            <input
              type="checkbox"
              disabled={disabled}
              id={`${name}-${checkbox.value}`}
              name={name}
              value={checkbox?.value}
              className="custom-control-input"
              onChange={handleChange}
              ref={forwardRef ?? ((e) => {
                if (ref) ref(e)
              })}
              {...conditionalProps}
            />
            <label
              className="custom-control-label cursor-pointer"
              htmlFor={`${name}-${checkbox.value}`}
            >
              {checkbox.label}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default CheckboxComponent
