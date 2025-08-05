import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PageWrapper } from "./styled-components";

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
  return (
    <PageWrapper>
      {/* Responsive Navbar */}
      <MobileOnly>
        <Navbar />
      </MobileOnly>
      <DesktopOnly>
        <Navbar />
      </DesktopOnly>

      {/* Route content */}
      <Outlet />

      {/* Global Footer */}
      <Footer />
    </PageWrapper>
  );
};

export default Layout;
