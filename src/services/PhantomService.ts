import { Phantom } from '../types/Phantom';
import { PhantomFilter } from '../types/PhantomFilter';

export const renamePhantom = (phantoms: Phantom[], phantomToRename: Phantom): Phantom[] => {
  const newName = prompt('New name');

  if (!!newName) {
    return phantoms.map((phantom) => {
      if (phantomToRename.id === phantom.id) {
        phantom.name = newName;
        return phantom;
      } else {
        return phantom;
      }
    });
  } else {
    return phantoms;
  }
};

export const duplicatePhantom = (phantoms: Phantom[], phantomToDuplicate: Phantom): Phantom[] => {
  return [...phantoms, { ...phantomToDuplicate, id: Date.now().toString() }];
};

export const deletePhantom = (phantoms: Phantom[], phantomToDelete: Phantom): Phantom[] => {
  return phantoms.filter((phantom) => phantomToDelete.id !== phantom.id);
};

export const filterPhantoms = (
  filters: PhantomFilter[],
  phantoms: Phantom[] | null,
): Phantom[] | null => {
  const activeFilter = filters.find((f) => !!f.options.find((o) => o.isSelected));
  const activeOption = activeFilter?.options.find((o) => o.isSelected);

  // Aucun filtre actif
  if (activeFilter === undefined || activeOption === undefined || phantoms === null) {
    return phantoms;
  }

  let newFilteredPhantoms: Phantom[];

  switch (activeFilter.type) {
    case 'launchType':
      newFilteredPhantoms = phantoms.filter((p) => p.launchType === activeOption.value);
      break;

    case 'categories':
      newFilteredPhantoms = phantoms.filter((p) =>
        p.manifest.tags.categories.includes(activeOption.value),
      );
      break;

    default:
      newFilteredPhantoms = [];
  }
  return newFilteredPhantoms;
};
