import React from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
{/*import Footer from "./components/Footer";/*/}
import { PageWrapper } from "./styled-components";
import { Hamburger } from "lucide-react";

// Mobile-only and Desktop-only wrappers
const MobileOnly = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopOnly = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Layout: React.FC = () => {
  const location = useLocation ();
  const showHeader = location.pathname !== "/";
  return (
    <>
    {showHeader && <Hamburger />}
    <PageWrapper>
      {/* Responsive Navbar */}
  

      {/* Route content */}
      <Outlet />

      {/* Global Footer */}
      {/*<Footer />*/}
    </PageWrapper>
    </>
  );
};

export default Layout;
