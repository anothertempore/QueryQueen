import {Button, useDisclosure} from '@chakra-ui/react';
import {PlusIcon} from '@radix-ui/react-icons';
import {memo, useCallback, useState, type BaseSyntheticEvent} from 'react';
import ConnectionModal, {DEFAULT_FORM_VALUE} from '../components/ConnectionModal';
import {DraggableBarRight} from './DraggableBar';

interface FormValue {
  name: string;
  host: string;
  port: string;
  databaseName: string;
  ssl: boolean;
  username: string;
  password: string;
}

function MainView() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [formValue, setFormValue] = useState<FormValue>(DEFAULT_FORM_VALUE);

  const onChange = (field: string) => (e: BaseSyntheticEvent) => {
    setFormValue({
      ...formValue,
      [field]: e.target.id === 'ssl' ? e.target.checked : e.target.value,
    });
  };

  const onSave = useCallback(() => {
    console.log(formValue);
  }, [formValue]);

  return (
    <div className="flex-auto">
      <DraggableBarRight />

      <div className="flex justify-center mt-10">
        <Button
          onClick={onOpen}
          size="sm"
          leftIcon={<PlusIcon />}
        >
          New Connection
        </Button>
      </div>

      <ConnectionModal
        isOpen={isOpen}
        onChange={onChange}
        onClose={onClose}
        onSave={onSave}
        formValue={formValue}
        setFormValue={setFormValue}
      />
    </div>
  );
}

export default memo(MainView);
