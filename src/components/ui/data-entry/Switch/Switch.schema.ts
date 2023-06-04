
export type AS = 'input'

export interface ToggleProps  {
  id?: string
  className?: string
  label?: string
  variant?:Variant
  checked?: boolean | undefined;
  defaultChecked?: boolean | undefined;
  onChange?(checked: boolean): void;
  name?: string | undefined;
  value?: string | undefined;
}
export type Variant =  'Rounded' | 'RoundedSm' | 'RoundedLg' | 'Bordered' | 'Box' | 'Slim' | 'Inside' | 'Outside'

const VariantSwitchClassMappingDefaultValue = 'relative inline-flex h-6 w-11 items-center rounded-full'
export const VariantSwitchClassMapping: Record<Variant, string> = {
    RoundedSm: 'relative inline-flex h-5 w-9 items-center rounded-full',
    Rounded: VariantSwitchClassMappingDefaultValue,
    RoundedLg: 'relative inline-flex h-7 w-14 items-center rounded-full',
    Bordered: VariantSwitchClassMappingDefaultValue,
    Box:'relative inline-flex h-6 w-11 items-center rounded',
    Slim:'relative inline-flex h-1 w-11 items-center rounded-full',
    Inside:VariantSwitchClassMappingDefaultValue,
    Outside:'relative inline-flex h-4 w-10 items-center rounded-full',
  }
  const VariantSwitchBoxClassMappingDefaultValue = 'inline-block h-5 w-5 transform rounded-full  transition'
  export const VariantSwitchBoxClassMapping: Record<Variant, string> = {
    RoundedSm: 'inline-block h-4 w-4 transform rounded-full  transition',
    Rounded: VariantSwitchBoxClassMappingDefaultValue,
    RoundedLg: 'inline-block h-6 w-6 transform rounded-full  transition',
    Bordered: VariantSwitchBoxClassMappingDefaultValue,
    Box:'inline-block h-5 w-5 transform rounded transition',
    Slim:VariantSwitchBoxClassMappingDefaultValue,
    Inside:VariantSwitchBoxClassMappingDefaultValue,
    Outside:VariantSwitchBoxClassMappingDefaultValue,
  }

const VariantTranslateClassMappingDefault = 'translate-x-6'
  export const VariantTranslateClassMapping: Record<Variant, string> = {
    RoundedSm: 'translate-x-4',
    Rounded: VariantTranslateClassMappingDefault,
    RoundedLg: 'translate-x-7',
    Bordered: 'translate-x-5',
    Box:'translate-x-5',
    Slim:VariantTranslateClassMappingDefault,
    Inside:'translate-x-5',
    Outside: 'translate-x-5',
  }
 const  VariantTranslateInitClassMappingDefault = 'translate-x-0'
  export const VariantTranslateInitClassMapping: Record<Variant, string> = {
    RoundedSm: VariantTranslateInitClassMappingDefault,
    Rounded: VariantTranslateInitClassMappingDefault,
    RoundedLg: VariantTranslateInitClassMappingDefault,
    Bordered: VariantTranslateInitClassMappingDefault,
    Box:VariantTranslateInitClassMappingDefault,
    Slim:VariantTranslateInitClassMappingDefault,
    Inside:'translate-x-1',
    Outside: VariantTranslateInitClassMappingDefault,
  }