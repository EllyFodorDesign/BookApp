import React from "react";
import { HeaderSection, MainSection } from "../styled-components";
import Hero from "../components/Hero"
import { Heading } from "../components/styled-components/texts";

const Landing: React.FC = () => (
  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      <Heading>Kommer snart</Heading>
  
    
    </MainSection>
  </>
);

export default Landing;
