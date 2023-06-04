import React, { PropsWithChildren } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { EnvelopeSimple, Phone, Briefcase } from 'phosphor-react'
import { FlexboxProps } from '../../core/Flexbox/Flexbox'
import { Flexbox } from '../../core/Flexbox'
// import photo from './Photo.jpg'
import { Text } from '../Text'

interface Props extends PropsWithChildren {
  className?: string
  name?: string
  department?: string
  email?: string
  phone?: string
  designation?: string
}
export type ProfilecardProps = React.PropsWithChildren & Props & FlexboxProps

const Profilecard: React.FunctionComponent<ProfilecardProps> = (props) => {
  const { name, department, email, phone, designation, className } = props

  const computedClasses = getComputedClassNames(className, 'p-4 shadow-lg')

  return (
    <Flexbox as="div" className={computedClasses}>
      <img
        className="w-12 h-12 rounded-full object-contain"
        // src={photo}
        alt="Sanjay"
      />
      <Flexbox as="div" className="flex-grow-1 ml-4" direction="column">
        <Text
          variant="subtitle3"
          typeface="semibold"
          color="text-blue-800"
          className="mb-1 leading-4"
        >
          {name}
        </Text>
        <Text typeface="normal" color="text-cool-gray-800" className="text-xs">
          {department}
        </Text>
        <Flexbox
          as="div"
          className="mt-3 text-cool-gray-600"
          direction="column"
        >
          <Flexbox className="mb-2 ">
            <EnvelopeSimple size={16} className="mr-2" />
            <Text typeface="normal" className="text-xs ">
              {email}
            </Text>
          </Flexbox>
          <Flexbox className="mb-2 ">
            <Phone size={16} className="mr-2" />
            <Text typeface="normal" className="text-xs">
              {phone}
            </Text>
          </Flexbox>
          <Flexbox>
            <Briefcase size={16} className="mr-2" />
            <Text typeface="normal" className="text-xs">
              {designation}
            </Text>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}

export default Profilecard

/* 
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
 */
