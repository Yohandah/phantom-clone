import React, { FunctionComponent } from 'react';
import error from '../assets/error.svg';

export const Error: FunctionComponent = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <img src={error} alt="error" />
      <div className="mt-10 text-2xl font-semibold">{children}</div>
    </div>
  );
};
