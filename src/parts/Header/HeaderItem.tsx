import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type HeaderItemProps = {
  isDropdown?: boolean;
  isSelected?: boolean;
};

export const HeaderItem: FunctionComponent<HeaderItemProps> = ({
  isDropdown,
  isSelected,
  children,
}) => (
  <div className="flex justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <span className={isSelected ? 'font-bold' : 'font-normal'}> {children} </span>

      {isSelected && <div className="w-2/3 h-0.5 bg-primary" />}
    </div>

    {isDropdown && <FontAwesomeIcon className="ml-3" icon={faChevronDown} />}
  </div>
);

HeaderItem.defaultProps = {
  isDropdown: false,
  isSelected: false,
};
