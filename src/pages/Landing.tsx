import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection } from "../styled-components";
import FooterLanding from "../components/FooterLanding";


const Intro = styled.section`
  text-align: left;
  max-width: 68ch;
`;

const Landing: React.FC = () => {
  return (
    <>
      <HeaderSection>
        <Header />
      <MainSection>
       { /* Lägg in bild här på omslaget.
        Samt en nedräkning till release? 
        Öka avståndet mellan footer och övrigt.  */}
        <Intro aria-labelledby="about-heading">
         
        </Intro>
      </MainSection>
      </HeaderSection>
      <FooterLanding />
    </>
  );
};

export default Landing;
