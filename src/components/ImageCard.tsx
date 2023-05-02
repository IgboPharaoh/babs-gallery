import { Box, Text, Stack, Flex, Image } from '@chakra-ui/react';

export interface ImageCardProps {
    src: string;
    name: string;
    description: string;
}

const ImageCard = ({ src, name, description }: ImageCardProps): JSX.Element => {
    const trimDescription = (args: string) => {
        if (args.length > 112) {
            return `${args.substring(0, 110)}.....`;
        }
        return args;
    };

    return (
        <Box w='fit-content'>
            <Stack>
                <Flex w='230px' flexDir='column' border='1px solid red' gap='24px'>
                    <Box height='250px' border='1px solid red'>
                        <Image src={src} height='100%' maxWidth='100%' objectFit='cover' objectPosition='center center' />
                    </Box>
                    <Box>
                        <Text fontSize='13px' fontWeight='600'>
                            {name}
                        </Text>
                        <Text fontSize='13px' fontWeight='300'>
                            {trimDescription(description!)}
                        </Text>
                    </Box>
                </Flex>
            </Stack>
        </Box>
    );
};

export default ImageCard;
