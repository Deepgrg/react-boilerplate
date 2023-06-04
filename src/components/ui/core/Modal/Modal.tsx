import React from 'react';
import { Box } from '@/components/ui/core/Box';
import ModalBody, { IModalBodyProps } from '@/components/ui/core/Modal/ModalBody';
import ModalFooter, { IModalFooterProps } from '@/components/ui/core/Modal/ModalFooter';
import ModalHeader, { IModalHeaderProps } from '@/components/ui/core/Modal/ModalHeader';
import { Dialog, Transition } from '@headlessui/react';
import { TModalSizes, ModalSizeMapping, TModalPlacement, ModalPlacementMapping } from '@/components/ui/types';
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility';

export interface IModalProps {
  isOpen: boolean;
  toggle?: () => void;
  placement?: TModalPlacement;
  size?: TModalSizes;
  children?: React.ReactNode;
}

interface IModal {
  Header: React.FC<IModalHeaderProps>;
  Body: React.FC<IModalBodyProps>;
  Footer: React.FC<IModalFooterProps>;
  (props: IModalProps): React.ReactElement;
}

const Modal: IModal = (props) => {
  const { isOpen, children, size="md", toggle, placement="center" } = props;

  const modalPositionClassNames = getComputedClassNames("flex min-h-full text-center", ModalPlacementMapping[placement])
  const modalSizeClassNames = getComputedClassNames("bg-gray-100 transform bg-white text-left align-middle shadow-md transition-all relative overflow-auto", ModalSizeMapping[size])

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as={Box} className="relative" onClose={() => toggle && toggle()} role="dialog">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Box className="fixed inset-0 bg-black bg-opacity-25" data-testid="dialog-overlay" />
        </Transition.Child>
        <Box className="fixed inset-0 overflow-y-auto">
          <Box className={modalPositionClassNames}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={modalSizeClassNames} data-testid="dialog-element"
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </Box>
        </Box>
      </Dialog>
    </Transition>
  )
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;