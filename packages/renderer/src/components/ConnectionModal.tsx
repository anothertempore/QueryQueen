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
import {memo, useEffect, type BaseSyntheticEvent} from 'react';

export interface FormValue {
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
  formValue: FormValue;
  setFormValue: (formValue: FormValue) => void;
  onClose: () => void;
  onChange: (field: string) => (event: BaseSyntheticEvent) => void;
  onSave: () => Promise<void> | void;
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
  const {isOpen, onClose, onChange, onSave, formValue, setFormValue} = props;

  useEffect(() => {
    if (!isOpen) {
      setFormValue(DEFAULT_FORM_VALUE);
    }
  }, [isOpen]);

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

        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
              value={formValue.name}
              onChange={onChange('name')}
            />
            {formValue.name == '' && <FormErrorMessage>Email is required.</FormErrorMessage>}
          </FormControl>

          <FormControl
            mt={4}
            isRequired
          >
            <FormLabel>Host</FormLabel>
            <Input
              placeholder="Host"
              value={formValue.host}
              onChange={onChange('host')}
            />
          </FormControl>

          <FormControl
            mt={4}
            isRequired
          >
            <FormLabel>Port</FormLabel>
            <Input
              placeholder="Port"
              value={formValue.port}
              onChange={onChange('port')}
            />
          </FormControl>

          <FormControl
            mt={4}
            isRequired
          >
            <FormLabel>Database Name</FormLabel>
            <Input
              placeholder="Database Name"
              value={formValue.databaseName}
              onChange={onChange('databaseName')}
            />
          </FormControl>

          <FormControl
            mt={4}
            isRequired
          >
            <FormLabel htmlFor="ssl">SSL</FormLabel>
            <Switch
              id="ssl"
              isChecked={formValue.ssl}
              onChange={onChange('ssl')}
            />
          </FormControl>

          <FormControl
            mt={4}
            isRequired
          >
            <FormLabel>UserName</FormLabel>
            <Input
              placeholder="UserName"
              value={formValue.username}
              onChange={onChange('username')}
            />
          </FormControl>

          <FormControl
            mt={4}
            isRequired
          >
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type={'password'}
              value={formValue.password}
              onChange={onChange('password')}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost">Test Connection</Button>
          <Button
            colorScheme="blue"
            ml={3}
            onClick={onSave}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default memo(ConnectionModal);
