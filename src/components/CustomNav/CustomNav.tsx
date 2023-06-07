import React, { useState } from "react";
import styled from "styled-components";

interface NavItemsProps {
  open: boolean;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <HamburgerMenu onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <NavItems open={open}>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </NavItems>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #3f51b5;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    color: #f50057;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 2em;
    height: 0.25em;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavItems = styled.div<NavItemsProps>`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 10vh;
    left: ${({ open }) => (open ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3f51b5;
  }
`;

export default Navbar;
