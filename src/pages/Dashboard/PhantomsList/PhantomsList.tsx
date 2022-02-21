import React, { FunctionComponent } from 'react';
import { Phantom } from '../../../types/Phantom';
import { Loading } from '../../../components/Loading';
import { Error } from '../../../components/Error';
import { PhantomCard } from '../PhantomCard/PhantomCard';
import { NoData } from '../../../components/NoData';

type PhantomsListProps = {
  phantoms: Phantom[] | null;
  isLoading: boolean;
  isInError: boolean;
  phantomActions: {
    rename: (phantom: Phantom) => void;
    duplicate: (phantom: Phantom) => void;
    delete: (phantom: Phantom) => void;
  };
};

export const PhantomsList: FunctionComponent<PhantomsListProps> = ({
  phantoms,
  isLoading,
  isInError,
  phantomActions,
}) => {
  const displayPhantoms = () => {
    if (isLoading) {
      return <Loading />;
    } else if (!isInError && !!phantoms && phantoms.length > 0) {
      return (
        <div className="max-w-full mdlg:max-w-lg flex flex-col gap-8">
          {phantoms?.map((phantom) => (
            <PhantomCard key={phantom.id} phantom={phantom} phantomActions={phantomActions} />
          ))}
        </div>
      );
    } else if (phantoms?.length === 0) {
      return <NoData>Nothing to see here</NoData>;
    } else {
      return <Error>Erreur lors de la récupération des Phantoms</Error>;
    }
  };

  return displayPhantoms();
};
