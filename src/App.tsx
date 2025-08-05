import React from "react";
import {
  GlobalStyle,
  HeaderSection,
  MainSection,
  PageWrapper,
} from "./styled-components";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { ButtonGroup, Button } from "./components/Button";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import About from "./components/About";

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

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

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <PageWrapper>
    <MobileOnly>
      <Navbar />
    </MobileOnly>
    <DesktopOnly>
      <Navbar />
    </DesktopOnly>
    {children}
    <Footer />
  </PageWrapper>
);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        {/* Home */}
        <Route
          path="/home"
          element={
            <Layout>
              <HeaderSection>
                <Hero />
              </HeaderSection>
              <MainSection>
                <ButtonGroup>
                  <Button>Köp boken: Att leva som barn med NPF i skolan</Button>
                  <Button $variant="outline">Läs mer här</Button>
                </ButtonGroup>
              </MainSection>
            </Layout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <Layout>
              <MainSection>
                <About />
              </MainSection>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <MainSection>
                <Contact />
              </MainSection>
            </Layout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
