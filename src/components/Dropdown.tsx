import React, { FunctionComponent } from 'react';

type DropdownProps = {
  opened: boolean;
  actions: { text: string; handle: Function }[];
};

export const Dropdown: FunctionComponent<DropdownProps> = ({ opened, actions }) => {
  return (
    <ul
      className={`min-w-max absolute bg-white z-30 py-2 list-none rounded shadow-lg mt-1 m-0 -translate-x-2/3 translate-y-20 ${
        !opened ? 'hidden' : ''
      }`}
    >
      {actions.map((action) => (
        <li key={action.text}>
          <a
            className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            href="#"
            onClick={() => action.handle()}
          >
            {action.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
