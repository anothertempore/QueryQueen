import {Resizable} from 're-resizable';
import {memo} from 'react';
import DatabasePanel from '../components/database-panel';
import {DraggableBarLeft} from './draggable-bar';

function LeftView() {
  return (
    <div className="border-r border-gray-200 dark:border-gray-700">
      <DraggableBarLeft />

      {/* TODO: gross glass effect */}
      <div className="flex h-full">
        <DatabasePanel />
        <Resizable
          defaultSize={{
            width: 304,
            height: '100%',
          }}
          minWidth={150}
          maxWidth={500}
          enable={{
            right: true,
            top: false,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <div></div>
        </Resizable>
      </div>
    </div>
  );
}

export default memo(LeftView);
