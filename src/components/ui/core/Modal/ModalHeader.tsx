import React from 'react';
import { Flexbox } from '@/components/ui/core/Flexbox';
import { Icon } from '@/components/ui/core/Icon';
import { Dialog } from '@headlessui/react';
import { X } from 'phosphor-react';
import type {
  TextAs
} from '@/components/ui/data-display/Text/Text.schema'

export interface IModalHeaderProps {
  toggle?: () => void;
  children?: React.ReactNode;
  as?: TextAs;
}

const ModalHeader: React.FunctionComponent<IModalHeaderProps> = (props) => {
  const { toggle, children, as="h3"} = props;

  return (
    <Flexbox
    align="center"
    justify="space-between"
    className='border-b p-6 pb-2'
    >
      <Dialog.Title
        as={as}
        className="text-lg font-medium leading-6 text-gray-900"
      >
        {children}
      </Dialog.Title>
      {toggle &&
      <Icon
      icon={X}
      size="sm"
      onClick={toggle}
      name="Close Alert"
      role="button"
      />
      }
    </Flexbox>
  )
}

export default ModalHeader;