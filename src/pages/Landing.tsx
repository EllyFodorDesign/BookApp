import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection, PageWrapper } from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import bokomslag from "../assets/bokomslag.jpg"; // Import the book cover image
import MediaQuery from "../styles/mediaQuery";
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
    font-size: ${({ theme }) => theme.fontSizes.LH2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLightest};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.LH3};
    margin: ${({ theme }) => `${theme.spacing.L} 0 ${theme.spacing.S}`};
  }

  ul {
    font-size: ${({ theme }) => theme.fontSizes.Lp};
  }

  li {
    font-size: ${({ theme }) => theme.fontSizes.Lli};
  }

  ${MediaQuery.phone} {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH1};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }

    @media (min-width: 480px) {
      margin: ${({ theme }) => theme.spacing.XXL};
      margin-top: ${({ theme }) => theme.spacing.XL};
    }
  }
`;

const Image = styled.img`
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  display: block;
  margin: 0 auto;

  @media (min-width: 375px) {
    padding: ${({ theme }) => theme.spacing.S};
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  ${MediaQuery.desktop} {
  }
`;

export const BookFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.S};

  @media (min-width: 768px) {
   width: 75%;
  
  }

  @media (min-width: 1200px) {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Landing: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <HeaderSection>
          <Header />
        </HeaderSection>
        <MainSection>
          <BookFrame>
            <Image src={bokomslag} alt="Bokomslag" />
            {/* 
        Öka avståndet mellan footer och övrigt.  */}
            <Intro aria-labelledby="about-heading">
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
        <FooterLanding />
      </PageWrapper>
    </>
  );
};

export default Landing;
