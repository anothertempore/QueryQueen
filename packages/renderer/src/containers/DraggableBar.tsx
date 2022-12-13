import type {ReactNode} from 'react';
import {memo} from 'react';

// TODO:
// 1. double click to maximize window: https://github.com/electron/electron/issues/20070
// 2. gross glass effect
function DraggableBarWrapper({children}: {children: ReactNode}) {
  return (
    <div className="h-[2.8rem] draggable-area bg-[#fcf8fd] border-b border-[#e7e3de]">
      {children}
    </div>
  );
}

function _DraggableBarLeft() {
  return <DraggableBarWrapper>{}</DraggableBarWrapper>;
}

function _DraggableBarRight() {
  return <DraggableBarWrapper>{}</DraggableBarWrapper>;
}

const DraggableBarLeft = memo(_DraggableBarLeft);
const DraggableBarRight = memo(_DraggableBarRight);

export {DraggableBarLeft, DraggableBarRight};
