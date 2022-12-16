import type {ReactNode} from 'react';
import {memo} from 'react';

interface ButtonProps {
  children?: ReactNode;
}

function Button({children}: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      {children}
    </button>
  );
}

export default memo(Button);
