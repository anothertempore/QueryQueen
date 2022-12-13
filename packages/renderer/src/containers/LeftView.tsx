import {Resizable} from 're-resizable';
import {memo} from 'react';
import {DraggableBarLeft} from './DraggableBar';

function LeftView() {
  return (
    <div className="border-r border-[#e7e3de]">
      <DraggableBarLeft />

      {/* TODO: gross glass effect */}
      <div className="flex h-full bg-[#f6f6f6]">
        <div className="w-[40px] border-r border-[#e7e3de]">DB</div>
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
          <div>Nav</div>
        </Resizable>
      </div>
    </div>
  );
}

export default memo(LeftView);
