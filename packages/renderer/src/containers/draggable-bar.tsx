import {Button, useDisclosure} from '@chakra-ui/react';
import {PlusIcon} from '@radix-ui/react-icons';
import {memo, type ReactNode} from 'react';
import ConnectionMenu from '../components/connection-menu';
import ConnectionModal from '../components/connection-modal';
import {getActiveConnection} from '../helpers/connection';
import {useConnectionStore} from '../store/connection';

// TODO: gross glass effect
function DraggableBarWrapper({children}: {children: ReactNode}) {
  return (
    <div
      className="h-[2.8rem] draggable-area border-b border-gray-200 dark:border-gray-700"
      onClick={e => {
        if (e.detail === 2) {
          window.WINDOW.maximizeWindow();
        }
      }}
    >
      {children}
    </div>
  );
}

function _DraggableBarLeft() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const activeConnection = getActiveConnection(useConnectionStore(state => state.allConnections));

  return (
    <DraggableBarWrapper>
      <div className="h-full pl-[77px] flex items-center">
        {activeConnection ? (
          <ConnectionMenu />
        ) : (
          <div className="flex justify-center">
            <Button
              onClick={onOpen}
              size="xs"
              leftIcon={<PlusIcon />}
            >
              New Connection
            </Button>
          </div>
        )}

        <ConnectionModal
          isOpen={isOpen}
          onClose={onClose}
        />
      </div>
    </DraggableBarWrapper>
  );
}

function _DraggableBarRight() {
  return <DraggableBarWrapper>{}</DraggableBarWrapper>;
}

const DraggableBarLeft = memo(_DraggableBarLeft);
const DraggableBarRight = memo(_DraggableBarRight);

export {DraggableBarLeft, DraggableBarRight};
