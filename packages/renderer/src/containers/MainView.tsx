import {memo} from 'react';

function MainView() {
  return (
    <div className="flex-auto">
      <div className="h-10 text-right flex draggable-area border-b border-indigo-500">Arrow</div>
    </div>
  );
}

export default memo(MainView);
