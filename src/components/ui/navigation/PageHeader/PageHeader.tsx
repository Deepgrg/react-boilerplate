import { getComputedClassNames } from "@/utility/tailwind/tailwind-utility"
import { useCallback } from "react"
import { Box } from "../../core/Box"
import { PageHeaderProps } from "./PageHeader.schema"
import { BreadCrumb } from "../Breadcrumb"
import { Text } from "../../data-display/Text"
import { Flexbox } from "../../core/Flexbox"
import { Button } from "../../core/button"

const Pageaction: React.FunctionComponent<PageHeaderProps> = (props) => {
  const {
    className,
    title = 'Title',
    subtitle = 'Sub Title',
    type = 'breadcrumb-subtitle',
    btnName = 'Button',
    ghostBtnName = 'Ghost Button',
    ghostBtnFunction,
    btnFunction,
  } = props

  const renderSwitch = useCallback( () => {
    switch (type) {
      case 'breadcrumb-only':
        return <BreadCrumb textVariant="h5" variant="slash" activeClass="text-cool-gray-900 font-semibold"/>
      case 'title-breadcrump':
        return (<>
          <Text variant="h5" className="mb-1">{title}</Text>
          <BreadCrumb variant="slash" iconSize={16} textVariant="subtitle3" activeClass="text-cool-gray-700"/>
        </>)
      case 'breadcrumb-subtitle':
        return (<>
          <BreadCrumb variant="chevron" textVariant="subtitle3" iconSize={16} activeClass="text-cool-gray-900"/>
          <Text className="mt-1" variant="h5" >{subtitle}</Text>
        </>)
      case 'title-subtitle':
        return (<>
          <Text variant="subtitle3" className="mb-1" color="text-cool-gray-600">{title}</Text>
          <Text variant="h5">{subtitle}</Text>
        </>)
      case 'title-with-border':
        return (
          <Flexbox justify="space-between">
            <Text variant="h5">{title}</Text>
            <Box as="div">
              <Button btnType="ghost" variant="gray" onClick={ghostBtnFunction} size="small" className="mr-2 border-r-2">{ghostBtnName}</Button>
              <Button variant="info" size="small" onClick={btnFunction}>{btnName}</Button>
            </Box>
          </Flexbox>
        )
      case 'title-only':
        return (
          <Flexbox justify="space-between">
            <Text variant="h5">{title}</Text>
            <Box as="div">
              <Button btnType="ghost" variant="gray" size="small" className="mr-2 border-r-2" onClick={ghostBtnFunction}>{ghostBtnName}</Button>
              <Button variant="info" size="small" onClick={btnFunction}>{btnName}</Button>
            </Box>
          </Flexbox>
        )
      default:
        return <BreadCrumb textVariant="h5" variant="slash"  activeClass="text-cool-gray-900 font-semibold" />
    }
  },[type,ghostBtnFunction,btnFunction,btnName,ghostBtnName,subtitle,title])
  const computedClasses = type === 'title-with-border' ? getComputedClassNames(className, 'px-4 py-2 border-b-2') : getComputedClassNames(className, 'px-4 py-2')

  return (
    <Box
      as="div"
      data-testid='titleEle'
      className={computedClasses}
    >
      {renderSwitch()}
    </Box>
  )
}

export default Pageaction