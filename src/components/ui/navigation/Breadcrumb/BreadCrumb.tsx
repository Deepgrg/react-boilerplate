import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { FC, Fragment, PropsWithChildren, useEffect, useState } from 'react'
import { Icon } from '@/components/ui/core/Icon'
import { CaretRight, House } from 'phosphor-react'
import { Variant } from '@/components/ui/navigation/Breadcrumb/BreadCrumb.schema'
import { Box } from '@/components/ui/core/Box'
import Text, { TextProps } from '@/components/ui/data-display/Text/Text'

interface Props extends PropsWithChildren, Partial<Omit<TextProps, 'variant'>> {
  variant: Variant
  activeClass?: string
  iconSize?: number
  textVariant?: TextProps['variant']
}

const BreadCrumb: FC<Props> = (props) => {
  const {
    variant,
    activeClass = 'text-primary',
    iconSize = 24,
    textVariant,
  } = props
  const [breadcrumb, setBreadcrumb] = useState<
    { name: string; path: string; unKey: number }[]
  >([])

  const router = useLocation()

  useEffect(() => {
    if (router.pathname) {
      setBreadcrumb(
        router.pathname.split('/').map((path, index) => {
          if (path === '') return { path: '/', name: 'Dashboard', unKey: index }

          const crumb = { path, name: path, unKey: index }
          if (path.includes('-')) {
            const name = path.split('-')
            crumb.name = name
              .map((nam) => nam.charAt(0).toUpperCase() + nam.slice(1))
              .join(' ')
          }
          return crumb
        }),
      )
    }
  }, [router.pathname])

  return (
    <>
      {breadcrumb.map((crumb, index) => (
        <Fragment key={crumb.unKey}>
          {index !== breadcrumb.length - 1 ? (
            <>
              <Link to={crumb.path}>
                {crumb.name === 'Dashboard' ? (
                  <Icon
                    icon={House}
                    color='text-cool-gray-600'
                    size={iconSize}
                    className='inline mr-4'
                  />
                ) : (
                  <Box as='span' color='text-cool-gray-800' className='mx-4'>
                    <Text className='inline' variant={textVariant}>
                      {crumb.name.charAt(0).toUpperCase() + crumb.name.slice(1)}
                    </Text>
                  </Box>
                )}
              </Link>
              {variant === 'chevron' ? (
                <Icon
                  icon={CaretRight}
                  color='text-cool-gray-400'
                  className='inline mx-4'
                />
              ) : (
                <Box as='span' className='text-cool-gray-400 mx-4'>
                  {' '}
                  /{' '}
                </Box>
              )}
            </>
          ) : (
            <Text className={`${activeClass} inline`} variant={textVariant}>
              {crumb.name.charAt(0).toUpperCase() + crumb.name.slice(1)}
            </Text>
          )}
        </Fragment>
      ))}
    </>
  )
}

export default BreadCrumb
