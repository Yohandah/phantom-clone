import React, { FunctionComponent } from 'react';

export const Pill: FunctionComponent = ({ children }) => (
  <div className="bg-primary rounded-md text-xs text-white py-0.5 px-2 whitespace-nowrap mr-5 h-fit font-semibold border border-cyan-500">
    {children}
  </div>
);
