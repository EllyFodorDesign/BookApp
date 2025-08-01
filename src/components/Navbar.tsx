import { useState } from "react";
import styled from "styled-components";
import EllyFodorLogo from "../assets/ellyfodor-logo.png"; // Adjust the path as needed

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 56px;

  padding: 0 0;
  background: #fff;
  border-bottom: 1px solid #eee;
  width: 100vw;
  max-width: 100vw;
  margin: 0 auto;

  @media (min-width: 375px) {
    max-width: 375px;
  }
  @media (min-width: 468px) {
    max-width: 468px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

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

const Bar = styled.div`
  width: 28px;
  height: 4px;
  background: #333;
  margin: 5px 0;
  border-radius: 2px;
`;

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

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBar>
        <Logo src={EllyFodorLogo} alt="EllyFodor logo" />
        <Hamburger onClick={() => setOpen((o) => !o)} aria-label="Open menu">
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
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
