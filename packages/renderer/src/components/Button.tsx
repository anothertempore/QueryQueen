import type {ReactNode} from 'react';
import {memo} from 'react';

interface ButtonProps {
  children?: ReactNode;
}

function Button({children}: ButtonProps) {
  return (
    <button className="bg-slate-200 hover:bg-slate-400 text-stone-800 px-3 py-1 rounded">
      {children}
    </button>
  );
}

export default memo(Button);
