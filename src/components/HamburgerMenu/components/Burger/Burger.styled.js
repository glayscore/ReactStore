import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 38px;
  left: 1090px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 0 !important;
  outline: none !important;
  cursor: pointer;
  padding: 0px;
  z-index: 10;

  span {
    width: 2.8rem;
    height: 0.25rem;
    background: ${({open }) => open ? "#c4bc87" : "#c4bc87"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(50px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
