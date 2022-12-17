import {memo} from 'react';

// interface DropdownProps {}

function Dropdown() {
  return (
    <div className="inline-flex items-center">
      <span className="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
        Space One
      </span>
    </div>
  );
}

export default memo(Dropdown);
