import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './PhantomsFilters.css';
import { PhantomFilter, PhantomFilterOption } from '../../../types/PhantomFilter';

type PhantomFiltersProps = {
  filters: PhantomFilter[];
  setFilters: (filters: PhantomFilter[]) => void;
};

export const PhantomFilters: FunctionComponent<PhantomFiltersProps> = ({ filters, setFilters }) => {
  const onFilterClick = (filter: PhantomFilter, option: PhantomFilterOption) => {
    setFilters(
      filters.map((f) => {
        if (f.type === filter.type) {
          f.options.map((o) => {
            if (o.value === option.value) {
              o.isSelected = !o.isSelected;
            }
            return o;
          });
        }
        return f;
      }),
    );
  };

  return (
    <div>
      <div className="searchbar">
        <FontAwesomeIcon className="text-gray-400 mr-4" icon={faSearch} />
        <input className="focus-visible:outline-0 min-w-0" placeholder="Search" />
      </div>

      <div className="hidden mdlg:block">
        {filters.map((filter) => (
          <div key={filter.type} className="mb-5">
            <h4 className="font-black text-sm tracking-widest mb-3">{filter.text}</h4>
            {filter.options.map((option) => (
              <div
                key={option.text}
                className={`ml-2 cursor-pointer ${
                  option.isSelected ? 'text-primary' : 'text-black'
                }`}
                onClick={() => {
                  onFilterClick(filter, option);
                }}
              >
                {option.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
