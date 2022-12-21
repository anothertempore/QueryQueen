import {Button, useDisclosure} from '@chakra-ui/react';
import {PlusIcon} from '@radix-ui/react-icons';
import {memo} from 'react';
import ConnectionModal from '../components/ConnectionModal';
import {DraggableBarRight} from './DraggableBar';

function MainView() {
  const {isOpen, onOpen, onClose} = useDisclosure();

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
        onClose={onClose}
      />
    </div>
  );
}

export default memo(MainView);
