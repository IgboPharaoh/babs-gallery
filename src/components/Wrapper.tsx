import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

export interface WrapperProps {
    children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
        <Flex alignItems='center' justifyContent='center' width='100%'>
            <Box w='1400px'>{children}</Box>
        </Flex>
    );
};

export default Wrapper;
