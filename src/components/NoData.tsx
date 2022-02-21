import React, { FunctionComponent } from 'react';
import noPhantoms from '../assets/noPhantoms.svg';

export const NoData: FunctionComponent = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <img src={noPhantoms} alt="error" />
      <div className="mt-10 text-2xl font-semibold">{children}</div>
    </div>
  );
};
