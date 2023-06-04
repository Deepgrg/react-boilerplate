import React from 'react';
import { Flexbox } from '@/components/ui/core/Flexbox';

export interface IModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter: React.FunctionComponent<IModalFooterProps> = (props) => {
  const { children } = props;
  return (
    <Flexbox
    align="center"
    justify="flex-end"
    className='border-t px-6 py-4'
    >
    {children}
    </Flexbox>
    );
}

export default ModalFooter;