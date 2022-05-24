import React from "react";

// Components
import { Logo } from './Logo';
import BurgerMenu from './BurgerMenu';
// Components

interface INavigation {
  handleOpenBurgerMenu: () => void;
}

export const Navigation: React.FC<INavigation> = ({ handleOpenBurgerMenu }) => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Logo logoText="11Б" />
        <BurgerMenu handleOpenBurgerMenu={handleOpenBurgerMenu} />
      </div>
    </nav>
  );
};
