import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        Explore
      </a>
      <a href="/" tabIndex={tabIndex}>
        Tour Editor
        </a>
      <a href="/" tabIndex={tabIndex}>
        Plans
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
