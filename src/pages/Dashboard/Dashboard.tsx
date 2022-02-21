import React, { useEffect, useState } from 'react';
import Header from '../../parts/Header/Header';
import { getPhantoms } from '../../services/PhantomApiService';
import { Phantom } from '../../types/Phantom';
import { PhantomsList } from './PhantomsList/PhantomsList';
import { PhantomFilters } from './PhantomFilters/PhantomFilters';
import { PhantomFilter } from '../../types/PhantomFilter';
import { defaultFilters } from '../../constants/default-filters';
import {
  deletePhantom,
  duplicatePhantom,
  filterPhantoms,
  renamePhantom,
} from '../../services/PhantomService';

function Dashboard() {
  const [phantoms, setPhantoms] = useState<Phantom[] | null>(null);
  const [filteredPhantoms, setFilteredPhantoms] = useState<Phantom[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInError, setIsInError] = useState(false);
  const [filters, setFilters] = useState<PhantomFilter[]>(defaultFilters);

  const phantomActions = {
    rename: (phantomToRename: Phantom) => {
      setPhantoms(renamePhantom(phantoms!, phantomToRename));
    },
    duplicate: (phantomToDuplicate: Phantom) => {
      setPhantoms(duplicatePhantom(phantoms!, phantomToDuplicate));
    },
    delete: (phantomToDelete: Phantom) => {
      setPhantoms(deletePhantom(phantoms!, phantomToDelete));
    },
  };

  const handleFilterChange = (newFilters: PhantomFilter[]) => {
    setFilters(newFilters);
  };

  // Load des phantoms
  useEffect(() => {
    document.title = 'PhantomBuster Clone - Dashboard';

    let mounted = true;

    setIsLoading(true);
    getPhantoms()
      .then((data: Phantom[]) => {
        if (mounted) {
          setPhantoms(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setIsInError(true);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Si les phantoms ou les filtres changent, réappliquer le filtre
  useEffect(() => {
    setFilteredPhantoms(filterPhantoms(filters, phantoms));
  }, [phantoms, filters]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 ">
      <Header />

      <div className="m-auto">
        <section className="flex-grow">
          <div className="grid grid-cols-12 py-8 px-14 mdlg:gap-x-14">
            <div className="col-span-12 mb-10">
              <span className="font-black text-4xl">Dashboard</span>
              <span className="text-2xl ml-3">4/5</span>
            </div>

            <aside className="col-span-12 mdlg:col-span-4">
              <PhantomFilters filters={filters} setFilters={handleFilterChange} />
            </aside>

            <div className="col-span-12 mdlg:col-span-6">
              <PhantomsList
                phantoms={filteredPhantoms}
                isInError={isInError}
                isLoading={isLoading}
                phantomActions={phantomActions}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
