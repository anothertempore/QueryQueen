import {memo} from 'react';
import Button from '../components/Button';
import {DraggableBarRight} from './DraggableBar';

function MainView() {
  return (
    <div className="flex-auto">
      <DraggableBarRight />

      <div className="text-center m-2">
        <Button>New Connection</Button>
      </div>
    </div>
  );
}

export default memo(MainView);
