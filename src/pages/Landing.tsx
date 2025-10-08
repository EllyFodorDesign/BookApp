import React from "react";
import { HeaderSection, MainSection } from "../styled-components";
import Hero from "../components/Hero"
import { Heading } from "../components/styled-components/texts";
import { styled } from "styled-components";
import omslag from "../assets/omslag.jpg";




const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;


const Landing: React.FC = () => (
  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      <Heading>Kommer snart</Heading>
 
  <Image src={omslag} alt="Boken" />


    
    </MainSection>
  </>
);

export default Landing;
