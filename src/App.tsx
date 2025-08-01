import React from "react";
import { HeaderSection, MainSection, PageWrapper } from "./styled-components";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { ButtonGroup, Button } from "./components/Button";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const MobileOnly = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <MobileOnly>
          <Navbar />
        </MobileOnly>
        <HeaderSection>
          <Hero />
        </HeaderSection>
        <MainSection>
          <ButtonGroup>
            <Button>Köp boken: Att leva som barn med NPF i skolan</Button>
            <Button $variant="outline">Läs mer här</Button>
          </ButtonGroup>
        </MainSection>
        <Footer></Footer>
      </PageWrapper>
    </>
  );
};

export default App;

{
  /* förankrar loggan med länk <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>*/
}
