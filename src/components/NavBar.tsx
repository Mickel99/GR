import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5eaf5;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface NavLinksProps {
  isOpen: boolean;
}

const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 60px;
    background-color: #e5eaf5;
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.li`
  margin-left: 1rem;

  @media (max-width: 768px) {
   position: relative;
   left: 150px;
   top: 5px;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #4037a4;
  margin: 6px 0;

  &:nth-child(2) {
    width: 20px;
  }
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <Link to="/">
        <h1>AppName</h1>
      </Link>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon />
        <HamburgerIcon />
        <HamburgerIcon />
      </HamburgerButton>
      <NavLinks isOpen={isOpen}>
        <NavLink>
          <Link to="/booking" onClick={toggleMenu}>
            Booking
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </NavLink>
        <NavLink>
          <Link to="/admin" onClick={toggleMenu}>
            Admin
          </Link>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
}

export default NavBar;
