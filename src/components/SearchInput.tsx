import searchIcon from '../assets/search-icon.svg';
import { Flex, Image, Input, InputGroup, InputLeftElement, Spinner } from '@chakra-ui/react';
import Pill from './Pills';
import { SearchInputProps } from '../interfaces';
import { discover } from '../utils';

const SearchInput = ({ handleChange, isLoading, setSearchTerm, searchTerm, setNextPage }: SearchInputProps): JSX.Element => {
    return (
        <Flex
            gap={{ base: '16px', md: '24px', lg: '48px' }}
            w={{ base: '100%', md: '75%', lg: '75%' }}
            m={{ base: '0px 0px', md: '0px 24px', lg: '0px 24px' }}
            alignItems={{ base: 'center', md: 'baseline' }}
            flexDir={{ base: 'column', md: 'row', lg: 'row' }}
        >
            <InputGroup alignItems='baseline'>
                <InputLeftElement pointerEvents='none' children={<Image src={searchIcon} />} />
                <Input
                    w='100%'
                    value={searchTerm}
                    onChange={handleChange}
                    variant='flushed'
                    placeholder='Just search !!!'
                    _placeholder={{ fontSize: '14px' }}
                    borderBottom='1px solid black'
                />
                {isLoading ? <Spinner size='sm' /> : null}
            </InputGroup>
            <Flex
                w={{ base: '100%', md: '25%', lg: '25%' }}
                alignItems='baseline'
                justifyContent={{ base: 'center', md: 'normal' }}
                gap={{ base: '16px', md: '12px', lg: '24px' }}
            >
                <Pill
                    name='Discover'
                    bgColor='#d9d9d9'
                    setSearchTerm={() => {
                        setSearchTerm(discover);
                        setNextPage(0);
                    }}
                />
                <Pill
                    name='Animals'
                    setSearchTerm={() => {
                        setSearchTerm('animals');
                        setNextPage(0);
                    }}
                />
                <Pill
                    name='Africa'
                    setSearchTerm={() => {
                        setSearchTerm('africa');
                        setNextPage(0);
                    }}
                />
                <Pill
                    name='Love'
                    setSearchTerm={() => {
                        setSearchTerm('love');
                        setNextPage(0);
                    }}
                />
            </Flex>
        </Flex>
    );
};

export default SearchInput;
