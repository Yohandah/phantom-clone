import React, { FunctionComponent, useState } from 'react';
import { Phantom } from '../../../types/Phantom';
import classNames from 'classnames';
import './PhantomCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { getIconFromCategory } from '../../../services/IconService';
import { Toggle } from '../../../components/Toggle/Toggle';
import { Dropdown } from '../../../components/Dropdown';

type PhantomCardProps = {
  phantom: Phantom;
  phantomActions: {
    rename: (phantom: Phantom) => void;
    duplicate: (phantom: Phantom) => void;
    delete: (phantom: Phantom) => void;
  };
};

export const PhantomCard: FunctionComponent<PhantomCardProps> = ({ phantom, phantomActions }) => {
  const actions = [
    {
      text: 'Rename',
      handle: () => {
        phantomActions.rename(phantom);
      },
    },
    {
      text: 'Duplicate',
      handle: () => {
        phantomActions.duplicate(phantom);
      },
    },
    {
      text: 'Delete',
      handle: () => {
        phantomActions.delete(phantom);
      },
    },
  ];

  const [checked, setChecked] = useState(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  /**
   * Render tous les icones des catégories du phantom. Si pas d'icone associé renvoie null.
   */
  const renderCategoriesIcons = () => {
    return phantom.manifest.tags.categories.map((category: string, i) => {
      const icon = getIconFromCategory(category);

      if (!!icon) {
        // L'icone prend la couleur de l'app. Si le phantom est un workflow une bordure blanche est ajoutée.
        const iconContainerClasses = classNames('icon', {
          'bg-linkedin': phantom.manifest.tags.categories.includes('linkedin'),
          'bg-instagram': phantom.manifest.tags.categories.includes('instagram'),
          'border border-2 border-white': phantom.manifest.tags.categories.includes('workflow'),
        });

        return (
          <div key={i} className={iconContainerClasses}>
            <FontAwesomeIcon icon={icon} />
          </div>
        );
      } else {
        return null;
      }
    });
  };

  // Si le phantom est un workflow il a un fond de couleur correspondant à l'app. Ce qui inverse la couleur du texte.
  const cardClasses = classNames('card', {
    'bg-linkedin':
      phantom.manifest.tags.categories.includes('linkedin') &&
      phantom.manifest.tags.categories.includes('workflow'),
    'bg-instagram':
      phantom.manifest.tags.categories.includes('instagram') &&
      phantom.manifest.tags.categories.includes('workflow'),
    'bg-white': !phantom.manifest.tags.categories.includes('workflow'),
    'text-white': phantom.manifest.tags.categories.includes('workflow'),
  });

  const handleToggleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={cardClasses}>
      <header className="flex mb-4">
        {renderCategoriesIcons()}

        <div
          onClick={() => setIsDropdownOpened(!isDropdownOpened)}
          className="ml-auto cursor-pointer hover:drop-shadow-sm transition-all relative flex items-center"
        >
          <FontAwesomeIcon icon={faEllipsis} />
          <Dropdown opened={isDropdownOpened} actions={actions} />
        </div>
      </header>

      <h2 className="text-base">{phantom.name}</h2>
      <h1 className="text-2xl font-semibold">{phantom.name}</h1>

      <footer className="mt-auto mt-4">
        <Toggle phantomId={phantom.id} checked={checked} handleChange={handleToggleChange}>
          Launch {phantom.launchType}
        </Toggle>
      </footer>
    </div>
  );
};
