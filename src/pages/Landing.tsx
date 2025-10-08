import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection } from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import omslag from "../assets/omslag.jpg"; // Import the book cover image

const Intro = styled.section`
  text-align: left;
  max-width: 68ch;
`;


const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Landing: React.FC = () => {
  return (
    <>
      <HeaderSection>
        <Header />
      <MainSection>
        
         <Image src={omslag} alt="Bokomslag" />
       { /* Lägg in bild här på omslaget.
        Samt en nedräkning till release? 
        Öka avståndet mellan footer och övrigt.  */}
        <Intro aria-labelledby="about-heading">
         
        </Intro>
         <h2>bok om elever med NPF i skolan</h2>
      </MainSection>
      </HeaderSection>
      <FooterLanding />
    </>
  );
};

export default Landing;
