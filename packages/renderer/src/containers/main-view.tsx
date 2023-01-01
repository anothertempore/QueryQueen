import {Button, useDisclosure} from '@chakra-ui/react';
import {PlusIcon} from '@radix-ui/react-icons';
import {memo} from 'react';
// import {getAllDatabases} from '#preload';
import ConnectionModal from '../components/connection-modal';
import {DraggableBarRight} from './draggable-bar';

function MainView() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  // const dbs = getAllDatabases();

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
