import {Resizable} from 're-resizable';
import {memo} from 'react';
import {DraggableBarLeft} from './DraggableBar';

function LeftView() {
  return (
    <div className="border-r border-gray-200 dark:border-gray-700">
      <DraggableBarLeft />

      {/* TODO: gross glass effect */}
      <div className="flex h-full">
        <div className="w-[40px] border-r border-gray-200 dark:border-gray-700"></div>
        <Resizable
          defaultSize={{
            width: 300,
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
