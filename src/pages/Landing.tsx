import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection } from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import omslagBig from "../assets/omslagBig.jpg"; // Import the book cover image
import NotifyForm from "@/components/NotifyForm";

const Intro = styled.section`
  text-align: left;
  margin: ${({ theme }) => theme.spacing.L};
  color: ${({ theme }) => theme.colors.text};

  h2,
  h3,
  ul,
  li {
    line-height: 1.5;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.H2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLightest};
    border: 2px solid red;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.H3};
    margin: ${({ theme }) => `${theme.spacing.L} 0 ${theme.spacing.S}`};
  }

  ul {
    font-size: ${({ theme }) => theme.fontSizes.Lp};
  }

  li {
    font-size: ${({ theme }) => theme.fontSizes.li};
  }

`;

const Image = styled.img`
  width: 90%;
  margin: ${({ theme }) => theme.spacing.S};
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (min-width: 480px) {
    width: 95%;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const BookFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.spacing.L};
  width: 90%;
`;

const Landing: React.FC = () => {
  return (
    <>
      <HeaderSection>
        <Header />
        <MainSection>
          <BookFrame>
            <Image src={omslagBig} alt="Bokomslag" />
            {/* Lägg in bild här på omslaget.
        Samt en nedräkning till release? 
        Öka avståndet mellan footer och övrigt.  */}
        
            <Intro aria-labelledby="about-heading">
              <h2>Bok om elever med NPF i skolan</h2>
              <h3>Innehåll</h3>
              <ul style={{ paddingLeft: "15px" }}>
                <li>Strategier</li>
                <li>Praktiska tips</li>
                <li>Exempel från verkligheten</li>
              </ul>
            </Intro>
          </BookFrame>
          <NotifyForm />
        </MainSection>
      </HeaderSection>

      <FooterLanding />
    </>
  );
};

export default Landing;
