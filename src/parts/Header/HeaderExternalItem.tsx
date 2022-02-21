import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

export const HeaderExternalItem: FunctionComponent = ({ children }) => (
  <div className="flex justify-center items-center hidden lg:flex">
    <span className="font-semibold mr-2 text-primary">{children}</span>
    <FontAwesomeIcon className="text-xs text-gray-400" icon={faExternalLink} />
  </div>
);
