import type {ReactNode} from 'react';
import {memo} from 'react';

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
  return (
    <DraggableBarWrapper>
      <div className="h-full ml-[77px] flex items-center text-gray-900">123</div>
    </DraggableBarWrapper>
  );
}

function _DraggableBarRight() {
  return <DraggableBarWrapper>{}</DraggableBarWrapper>;
}

const DraggableBarLeft = memo(_DraggableBarLeft);
const DraggableBarRight = memo(_DraggableBarRight);

export {DraggableBarLeft, DraggableBarRight};
