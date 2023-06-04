import { deSelectAllOptionsValue, OptionType, selectAllOptionsValue } from '@/components/functional/Select/Select.schema'
import { components, IndicatorProps, OptionProps, ValueContainerProps } from 'react-select'
import { Icon } from '@/components/ui/core/Icon'
import { CaretDown, X } from 'phosphor-react'
import Box from '@/components/ui/core/Box/Box'
import { Checkbox } from '@/components/ui'

export const DropdownIndicator = <
  OptType extends OptionType,
  IsMulti extends boolean
>(
  props: IndicatorProps<OptType, IsMulti>,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon={CaretDown} color={'text-cool-gray-500'} size={'lg'} />
    </components.DropdownIndicator>
  )
}

export const ClearIndicator = <
  OptType extends OptionType,
  IsMulti extends boolean
>(
  props: IndicatorProps<OptType, IsMulti>,
) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon icon={X} size={'md'} weight={'bold'} />
    </components.ClearIndicator>
  )
}

export const CheckboxOption = <
  OptType extends OptionType,
  IsMulti extends boolean
>(
  props: OptionProps<OptType, IsMulti>,
) => {
  const { isSelected, label, getValue, options } = props
  const currentValues = getValue()?.length

  let selectAllSelected = false
  if (currentValues === options.length - 1) selectAllSelected = true

  return (
    <components.Option {...props}>
      <Checkbox
        label={label}
        variant={(label === deSelectAllOptionsValue.label) && selectAllSelected ? 'indeterminate' : 'default'}
        checked={isSelected || selectAllSelected}
        onChange={() => null}
      />
    </components.Option>
  )
}

export const ValueContainer = <
  OptType extends OptionType,
  IsMulti extends boolean
>(
  props: ValueContainerProps<OptType, IsMulti>,
) => {
  const { children, ...args } = props

  const currentValues = args.getValue()
  let selectedCount = currentValues.length

  if (currentValues.some((val) => val.value === selectAllOptionsValue.value))
    selectedCount = currentValues.length - 1

  return (
    <components.ValueContainer {...args}>
      <Box style={selectedCount ? {} : { color: '#b3b3b3' }} className='mr-2'>
        {selectedCount ? <>{selectedCount} selected</> : 'Choose Option...'}
      </Box>
      {/* This element contains the event for opening and closing the select input */}
      {Array.isArray(children) ? children[1] : null}
    </components.ValueContainer>
  )
}
