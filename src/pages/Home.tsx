import React from "react";
import { HeaderSection, MainSection } from "../styled-components";
import Hero from "../components/Hero";
import { ButtonGroup, Button } from "../components/Button";

const Home: React.FC = () => (
  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      <ButtonGroup>
        <Button>Köp boken: Att leva som barn med NPF i skolan</Button>
        <Button $variant="outline">Läs mer här</Button>
      </ButtonGroup>
    </MainSection>
  </>
);

export default Home;
