import {checkConnection, saveConnection, testConnection} from '#preload';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
} from '@chakra-ui/react';
import {memo, useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useSubtleToast} from '../helpers/toast';
import {useConnectionStore} from '../store/connection';

export interface ConnectionOptions {
  name: string;
  host: string;
  port: string;
  databaseName: string;
  ssl: boolean;
  username: string;
  password: string;
}

export interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DEFAULT_FORM_VALUE = {
  name: '',
  host: '',
  port: '',
  databaseName: '',
  ssl: true,
  username: '',
  password: '',
};

function ConnectionModal(props: ConnectionModalProps) {
  const {isOpen, onClose: _onClose} = props;
  const toast = useSubtleToast();
  const [isTesting, setIsTesting] = useState(false);

  const addNewConnection = useConnectionStore(state => state.addNewConnection);

  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
    reset,
    getValues,
    trigger,
  } = useForm<ConnectionOptions>({mode: 'onChange'});

  const onClose = useCallback(() => {
    reset();
    _onClose();
  }, [reset, _onClose]);

  const onTestConnection = useCallback(async () => {
    try {
      setIsTesting(true);

      trigger(['name', 'host', 'port', 'databaseName', 'ssl', 'username', 'password']);
      await testConnection(getValues());
      toast({
        title: 'Test connection successfully.',
        // description: ``,
        status: 'success',
      });
    } catch (e) {
      toast({
        title: 'Failed to test connection.',
        description: `${(e as Error).message}`,
        status: 'error',
      });
    } finally {
      setIsTesting(false);
    }
  }, [getValues, toast, trigger]);

  const onSave = useCallback(
    async (value: ConnectionOptions) => {
      try {
        await saveConnection(value);
        addNewConnection(value);

        toast({
          title: 'Save connection successfully.',
          // description: ``,
          status: 'success',
        });
        onClose();
      } catch (e) {
        toast({
          title: 'Failed to save connection.',
          description: `${(e as Error).message}`,
          status: 'error',
        });
      }
    },
    [addNewConnection, toast, onClose],
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="2xl"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Connection</ModalHeader>
        <ModalCloseButton />

        <form onSubmit={handleSubmit(onSave)}>
          <ModalBody>
            <FormControl
              isRequired
              isInvalid={!!errors.name}
            >
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                {...register('name', {
                  required: 'This is required',
                  validate: checkConnection,
                })}
              />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isRequired
              isInvalid={!!errors.host}
            >
              <FormLabel htmlFor="host">Host</FormLabel>
              <Input
                id="host"
                placeholder="Host"
                {...register('host', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>{errors.host && errors.host.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isRequired
              isInvalid={!!errors.port}
            >
              <FormLabel htmlFor="port">Port</FormLabel>
              <Input
                id="port"
                placeholder="Port"
                {...register('port', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>{errors.port && errors.port.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isRequired
              isInvalid={!!errors.databaseName}
            >
              <FormLabel htmlFor="databaseName">Database Name</FormLabel>
              <Input
                id="databaseName"
                placeholder="Database Name"
                {...register('databaseName', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.databaseName && errors.databaseName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              // isRequired https://github.com/chakra-ui/chakra-ui/issues/7145
            >
              <FormLabel htmlFor="ssl">SSL</FormLabel>
              <Switch
                id="ssl"
                defaultChecked
                {...register('ssl')}
              />
            </FormControl>

            <FormControl
              mt={4}
              isRequired
              isInvalid={!!errors.username}
            >
              <FormLabel htmlFor="username">UserName</FormLabel>
              <Input
                id="username"
                placeholder="UserName"
                {...register('username', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isRequired
              isInvalid={!!errors.password}
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Password"
                type={'password'}
                {...register('password', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              onClick={onTestConnection}
              isLoading={isTesting}
            >
              Test Connection
            </Button>
            <Button
              colorScheme="blue"
              ml={3}
              type="submit"
              isLoading={isSubmitting}
            >
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default memo(ConnectionModal);
