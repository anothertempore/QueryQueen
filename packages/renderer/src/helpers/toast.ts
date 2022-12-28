import {useToast, type UseToastOptions} from '@chakra-ui/react';

export const toastOptions: Partial<UseToastOptions> = {
  variant: 'subtle',
  position: 'bottom-right',
  isClosable: true,
};

export const useSubtleToast = () => {
  const toast = useToast();

  return (options: UseToastOptions) => toast({...toastOptions, ...options});
};
