import {type ConnectionStoreData, type ConnectionOptions, getAllConnections} from '#preload';
import create from 'zustand';

interface ConnectionState {
  allConnections: ConnectionStoreData[];
  addNewConnection: (newConnection: ConnectionOptions) => void;
  editConnection: (newConnection: Partial<ConnectionStoreData>) => void;
  removeConnection: (name: string) => void;
  updateActiveConnection: (name: string) => void;
}

export const useConnectionStore = create<ConnectionState>(set => ({
  allConnections: getAllConnections(),
  addNewConnection: newConnection =>
    set(state => ({
      allConnections: [
        ...state.allConnections.map(con => ({...con, active: false})),
        {...newConnection, active: true},
      ],
    })),
  editConnection: connectionData =>
    set(state => ({
      allConnections: state.allConnections.map(con => ({...con, ...connectionData})),
    })),
  removeConnection: name =>
    set(state => ({allConnections: state.allConnections.filter(con => con.name !== name)})),
  updateActiveConnection: name =>
    set(state => ({
      allConnections: state.allConnections.map(con => {
        if (con.name === name) return {...con, active: true};
        return {...con, active: false};
      }),
    })),
}));
