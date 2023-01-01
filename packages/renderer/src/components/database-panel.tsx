import {
  Box,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from '@chakra-ui/react';
import {CheckIcon} from '@radix-ui/react-icons';
import {memo, useRef} from 'react';
import FocusLock from 'react-focus-lock';

function DatabasePanel() {
  const inputRef = useRef<any>();

  return (
    <div className="w-[55px] border-r border-gray-200 dark:border-gray-700">
      <Box
        textAlign={'center'}
        borderRadius="md"
        p={1}
        m={2}
        borderColor="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        bgGradient="linear(to-r, teal.500, green.500)"
        color={'white'}
        cursor="pointer"
      >
        A
      </Box>

      <Popover
        placement="right"
        autoFocus
      >
        <PopoverTrigger>
          <Box
            textAlign={'center'}
            borderRadius="md"
            p={1}
            m={2}
            borderColor="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
            bgGradient="linear(to-r, teal.500, green.500)"
            color={'white'}
            cursor="pointer"
          >
            M
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody p={1}>
            <FocusLock
              returnFocus
              persistentFocus={false}
            >
              <Input
                px={2}
                variant="flushed"
                placeholder="Search DB or pin one"
                ref={inputRef}
              />

              <Stack mt={2}>
                <Box
                  display={'flex'}
                  justifyContent="space-between"
                  alignItems={'center'}
                  transition="all 0.2s"
                  borderRadius="md"
                  _hover={{bg: 'gray.600'}}
                  px={3}
                  py={2}
                >
                  <span>123</span>
                  <CheckIcon />
                </Box>
                <Box
                  mt={0}
                  display={'flex'}
                  justifyContent="space-between"
                  alignItems={'center'}
                  transition="all 0.2s"
                  borderRadius="md"
                  _hover={{bg: 'gray.600'}}
                  px={3}
                  py={2}
                >
                  <span>456</span>
                  <CheckIcon />
                </Box>
              </Stack>
            </FocusLock>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default memo(DatabasePanel);
