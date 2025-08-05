import { useState } from "react";
import styled from "styled-components";
import EllyFodor from "../assets/EllyFodor.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";
// NavBar container
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #eee;
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Logo styling
const Logo = styled.img`
  height: 40px;
`;

// Hamburger icon (mobile only)
const Hamburger = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Individual hamburger bars
const Bar = styled.div`
  width: 28px;
  height: 4px;
  background: #333;
  margin: 5px 0;
  border-radius: 2px;
`;

// Mobile menu dropdown
const Menu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  background: #fff;
  position: absolute;
  top: 56px;
  left: 0;
  width: 100vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;

  @media (min-width: 768px) {
    display: none;
  }
`;

// Links inside mobile menu
const MenuLink = styled.a`
  display: block;
  padding: 1rem;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;

  &:hover {
    background: #f0f0f0;
  }
`;

// Desktop menu (hidden on mobile)
const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

// Desktop menu links
const DesktopMenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 4px;
  }
`;

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar>
        <Logo src={EllyFodor} alt="EllyFodor logo" />
        <Hamburger onClick={() => setOpen((o) => !o)} aria-label="Open menu">
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
        <DesktopMenu>
          <DesktopMenuLink to="home">Hem</DesktopMenuLink>
          <DesktopMenuLink to="about">Om författaren</DesktopMenuLink>
          <DesktopMenuLink to="contact">Kontakt</DesktopMenuLink>
        </DesktopMenu>
      </NavBar>

      <Menu $open={open}>
        <MenuLink href="#home" onClick={() => setOpen(false)}>
          Hem
        </MenuLink>
        <MenuLink href="#about" onClick={() => setOpen(false)}>
          Om författaren
        </MenuLink>
        <MenuLink href="#contact" onClick={() => setOpen(false)}>
          Kontakt
        </MenuLink>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
