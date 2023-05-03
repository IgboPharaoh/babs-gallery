import { Flex, HStack, Text } from '@chakra-ui/react';
import SearchInput from './SearchInput';
import { SearchInputProps } from '../interfaces';
import Wrapper from './Wrapper';

const Header = ({ ...props }: SearchInputProps) => {
    return (
        <Flex bgColor='rgba(255 255 255 / 1)' zIndex='100' mb='24px' gap='48px' flexDir='column' pos='sticky'>
            <HStack borderBottom='1px solid black'>
                <Wrapper>
                    <Text m='0px 24px' pt='8px' pb='8px' textTransform='uppercase' fontWeight='600' fontSize='20px'>
                        Babs gallery
                    </Text>
                </Wrapper>
            </HStack>

            <Flex justifyContent='center'>
                <Text
                    fontWeight='600'
                    fontSize={{ base: '14px', sm: '16px', md: '16px' }}
                    w={{ base: '360px', sm: '380px', md: '450px' }}
                    textAlign='center'
                >
                    Browse our carefully curated collection of breathtaking photos to ignite your imagination and transport you to new and exciting
                    places
                </Text>
            </Flex>

            <HStack pb={{ base: '16px', md: '24px', lg: '24px' }} borderBottom='1px solid black'>
                <Wrapper>
                    <SearchInput {...props} />
                </Wrapper>
            </HStack>
        </Flex>
    );
};

export default Header;
