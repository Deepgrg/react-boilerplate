export type Variant = 'active' | 'default' | 'hovered'

export const VariantMapping: Record<Variant, string> = {
  active: 'active',
  default: 'default',
  hovered: 'hovered',
}

const base = `w-4 h-4 text-white shadow-sm bg-[url('./assets/svg/radio-default.svg')] bg-no-repeat bg-center`
const focusRing = 'focus:ring-0 focus:ring-offset-0'
const hover = 'hover:bg-center hover:border-cool-gray-400'
const checked = `checked:bg-[url('./assets/svg/radio-active.svg')] checked:bg-auto checked:border-blue-800 checked:focus:border-blue-800 checked:hover:border-cool-gray-400`

export const VariantClassMapping: Record<Variant, string> = {
  active: ` ${base} border border-white   
  ${hover}
 ${checked}
  ${focusRing}`,

  default: `${base} border border-white
  ${hover} 
   ${checked} checked:bg-no-repeat
   ${focusRing}`,

  hovered: `${base} border border-cool-gray-400
  ${checked} checked:bg-no-repeat
  ${focusRing}`,
}
