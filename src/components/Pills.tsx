import React, { Dispatch, SetStateAction } from 'react';
import { Text } from '@chakra-ui/react';

export interface PillProps {
    name: string;
    bgColor?: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Pill = ({ name, setSearchTerm, bgColor }: PillProps): JSX.Element => {
    return (
        <Text
            _hover={{ bgColor: '#d9d9d9' }}
            bgColor={bgColor}
            border='1px solid #d9d9d9'
            fontSize={{ base: '11px', sm: '13px', md: '13px', lg: '14px' }}
            fontWeight='600'
            borderRadius='24px'
            p={{ base: '6px 14px', sm: '6px 11px', md: '6px 11px', lg: '6px 12px' }}
            cursor='pointer'
            onClick={() => setSearchTerm('')}
            whiteSpace='nowrap'
        >
            {name}
        </Text>
    );
};

export default Pill;
