import React from 'react';
import { Navigation } from './Navigation';
import { Content } from './Content';
import { Decor } from '../Decor/Decor';

interface IHeader {
  handleOpenBurgerMenu: () => void;
}

export const Header: React.FC<IHeader> = ({handleOpenBurgerMenu}) => {
  return (
    <header className="header" id="home">
      <Navigation handleOpenBurgerMenu={handleOpenBurgerMenu}/>
      <Content/>
      <Decor fill="#F1DCC9"/>
    </header>
  );
};
