import React, { FunctionComponent } from 'react';
import './Toggle.css';

type ToggleItemProps = {
  checked: boolean;
  phantomId: string;
  handleChange: () => void;
};

export const Toggle: FunctionComponent<ToggleItemProps> = ({
  checked,
  phantomId,
  handleChange,
  children,
}) => (
  <div className="flex">
    <label htmlFor={phantomId} className="label">
      <div className="relative">
        <input
          type="checkbox"
          id={phantomId}
          checked={checked}
          onChange={handleChange}
          className="sr-only"
        />

        <div className={`toggle-container${checked ? ' checked' : ''}`} />

        <div className="dot" />
      </div>

      <div className="ml-3 text-sm">{children}</div>
    </label>
  </div>
);
