import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import {memo} from 'react';
import {getActiveConnection} from '../helpers/connection';
import {useConnectionStore} from '../store/connection';
import ConnectionModal from './connection-modal';
import {SettingsIcon} from '@chakra-ui/icons';

function ConnectionMenu() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const allConnections = useConnectionStore(state => state.allConnections);
  const activeConnection = getActiveConnection(allConnections);
  const updateActiveConnection = useConnectionStore(state => state.updateActiveConnection);

  const restConnections = allConnections.filter(con => con.name !== activeConnection?.name);

  return (
    <>
      <Box
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
        width="100%"
      >
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
                  <MenuItem
                    key={con.name}
                    onClick={() => {
                      updateActiveConnection(con.name);
                    }}
                  >
                    {con.name}
                  </MenuItem>
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

        <IconButton
          mr={3}
          aria-label="Settings"
          size={'xs'}
          icon={<SettingsIcon />}
        />
      </Box>

      <ConnectionModal
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default memo(ConnectionMenu);
