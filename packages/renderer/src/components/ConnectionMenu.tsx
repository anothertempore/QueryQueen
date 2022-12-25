import {getActiveConnection, getAllConnections} from '#preload';
import {Menu, MenuButton, MenuDivider, MenuItem, MenuList, useDisclosure} from '@chakra-ui/react';
import {memo} from 'react';
import ConnectionModal from './ConnectionModal';

function ConnectionMenu() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const allConnections = getAllConnections();
  const activeConnection = getActiveConnection();
  const restConnections = allConnections.filter(con => con.name !== activeConnection?.name);

  return (
    <>
      <Menu>
        <MenuButton
          px={2}
          py={1}
          transition="all 0.2s"
          borderRadius="md"
          _hover={{bg: 'gray.700'}}
        >
          {activeConnection?.name}
        </MenuButton>
        <MenuList>
          {restConnections.length ? (
            <>
              {restConnections.map(con => (
                <MenuItem key={con.name}>{con.name}</MenuItem>
              ))}
              <MenuDivider />
            </>
          ) : null}
          <MenuItem
            // TODO: keyboard shortcut
            command="⌘N"
            onClick={onOpen}
          >
            New connection
          </MenuItem>
        </MenuList>
      </Menu>
      <ConnectionModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default memo(ConnectionMenu);
