import { createStandaloneToast } from '@chakra-ui/toast';
const { toast, ToastContainer } = createStandaloneToast();

export const ErrorToast = ToastContainer;

export const toastResponse = (message: string, description: string) => {
    return toast({
        title: message,
        description: description,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
    });
};
