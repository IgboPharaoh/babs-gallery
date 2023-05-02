import { ChangeEvent, useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { value } = event.target;
        setSearchTerm(value);
    };

    return (
        <Box>
            <Input value={searchTerm} onChange={handleChange} />
        </Box>
    );
};

export default SearchInput;
