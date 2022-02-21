import React from 'react';
import phantom from '../../assets/phantom.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEllipsis, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import { HeaderItem } from './HeaderItem';
import { HeaderExternalItem } from './HeaderExternalItem';
import { Pill } from '../../components/Pill';

function Header() {
  return (
    <header className="bg-white border-b">
      <div className="grid grid-cols-12 p-4 max-w-6xl m-auto items-center">
        <div className="col-span-2 col-start-auto">
          <img src={phantom} alt="logo" />
        </div>

        <nav className="col-span-7 col-start-auto flex justify-center gap-8">
          <HeaderItem isDropdown={true} isSelected={true}>
            Phantoms
          </HeaderItem>

          <HeaderItem isDropdown={true}>Knowledge</HeaderItem>

          <HeaderItem>Dashboard</HeaderItem>

          <HeaderExternalItem>Get Started</HeaderExternalItem>
        </nav>
        <div className="col-span-3 col-start-auto h-5/6 flex items-center">
          <Pill>12 days left</Pill>

          <div className="border border-gray-400 rounded-full flex">
            <div className="w-1/2 border-r border-gray-400 flex justify-center items-center text-primary p-3">
              <FontAwesomeIcon className="mr-2" icon={faCoins} />
              <span className="text-sm">01h00m</span>
            </div>

            <div className="w-1/2 flex py-1 px-3 justify-between items-center">
              <FontAwesomeIcon icon={faUserNinja} />
              <span className="text-xs font-semibold px-2">Yohan</span>
              <FontAwesomeIcon className="cursor-pointer" icon={faEllipsis} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
