import React from 'react';
import NavState from './MenuContext';
import MainMenu from './MainMenu';

function HamburgerMenu() {
  return (
    <NavState>
      <MainMenu />
    </NavState>
  );
}

export default HamburgerMenu;
