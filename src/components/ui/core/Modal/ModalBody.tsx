import React from 'react';
import { Box } from '@/components/ui/core/Box';

export interface IModalBodyProps {
  children?: React.ReactNode;
}

const ModalBody: React.FunctionComponent<IModalBodyProps> = (props) => {
  const { children, ...rest } = props;
  if(children)
  return (
    <Box className='p-6' {...rest}>
        {children}
    </Box>
    );
  
  return null;
}

export default ModalBody;