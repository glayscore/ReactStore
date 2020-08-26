import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuContext } from './MenuContext';

const Menu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
height: 50vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 823px;
transition: transform 0.3s ease-in-out;

a {
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: normal;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: gray};
  }
}
`;

export const MenuLink = styled.a`
  position: relative;
  background-color: '#c4bc87';
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/1">Explorer</MenuLink>
      <MenuLink href="/2">Tour Editor</MenuLink>
      <MenuLink href="/3">Plans</MenuLink>
    </>
  ),
};
