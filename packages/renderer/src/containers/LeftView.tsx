import {Resizable} from 're-resizable';
import {memo} from 'react';

function LeftView() {
  return (
    <div className="border-r border-indigo-500">
      <div className="h-10 text-right flex draggable-area border-b border-indigo-500">Arrow</div>

      <div className="flex h-full">
        <div className="w-[40px] border-r border-indigo-500">DB</div>
        <Resizable
          defaultSize={{
            width: 200,
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
          <div>Nav</div>
        </Resizable>
      </div>
    </div>
  );
}

export default memo(LeftView);
