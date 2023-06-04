import { Box } from "@/components/ui/core/Box"
import { Switch as Swth } from '@headlessui/react'
import { ToggleProps, VariantSwitchBoxClassMapping, VariantSwitchClassMapping, VariantTranslateClassMapping, VariantTranslateInitClassMapping } from "@/components/ui/data-entry/Switch/Switch.schema"
import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility"

const Switch= ((props: ToggleProps) => {
    const {
        id,
        className,
        label="Toggle Me",
        variant = 'Rounded',
        checked,
        ...restProps
      } = props
      const getComputedClass = getComputedClassNames(
        `
        ${
          (variant==='Bordered') && (checked ? 'border-2 border-blue-200 ' : 'border-2 border-cool-gray-200 ')
         } ${
         (variant!=='Bordered') && (checked ? 'bg-blue-200' : 'bg-cool-gray-200')
        } ${VariantSwitchClassMapping[variant]}
        `,
        className
      )
    return(
        <Swth
        checked={checked}
        data-testid='my-toggle'
        {...restProps}
        className={getComputedClass}
      >
        <Box className="sr-only" as="span">{label}</Box>
        <Box
          as="span"
          className={`${
            checked ? `${VariantTranslateClassMapping[variant]} bg-blue-600` : `${VariantTranslateInitClassMapping[variant]} bg-cool-gray-500`
          } ${VariantSwitchBoxClassMapping[variant]}`}
        />
      </Swth>
    )
})
  
export default Switch