import { IFormRadio } from '@/components/functional/Form/FormElements/form-elemets.types'
import React from 'react'

const RadioComponent: React.FC<IFormRadio> = (props) => {
  const {
    className,
    name,
    radioBlockClass,
    options,
    forwardRef,
    value,
    register,
    onChange,
    disabled,
  } = props

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
    <div className="row">
      {options.map((radio) => {
        return (
          <div className={radioBlockClass || 'col-md-6'} key={radio.value}>
            <input
              type="radio"
              id={`${name}-${radio.value}`}
              disabled={disabled}
              name={name}
              className={className}
              value={radio?.value || value}
              onChange={handleChange}
              ref={forwardRef ?? ((e) => {
                if (ref) ref(e)
              })}
              {...conditionalProps}
            />
            <label className="btn" htmlFor={`${name}-${radio.value}`}>
              {radio.label}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RadioComponent
