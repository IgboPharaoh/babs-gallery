import { Flex, Text } from '@chakra-ui/react';

export interface ErrorHandlerProps {
    searchTerm: string;
}
const ErrorHandler = ({ searchTerm }: ErrorHandlerProps) => {
    return (
        <div>
            <Flex height='50vh' justifyContent='center' textAlign='center' flexDir='column' fontSize={{ base: '14px', md: '16px' }}>
                <Text>It's not you, it's us</Text>
                <Text>
                    We could not find any results for <span className='search-term'>{searchTerm}</span>
                </Text>
                <Text>Maybe try something else 🙂</Text>
            </Flex>
        </div>
    );
};

export default ErrorHandler;
