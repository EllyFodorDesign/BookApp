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
  margin: ${({ theme }) => theme.spacing.XXS};
  color: ${({ theme }) => theme.colors.text};

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
  display: block;
  height: auto;
  object-fit: contain;
  border-radius: 0.6rem;
  width: 85%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
margin: 0 auto ${({ theme }) => theme.spacing.S};

  ${MediaQuery.desktop} {
    max-width: 90%;
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
  max-width: 280px;
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.M} auto;
  padding-left: ${({ theme }) => theme.spacing.S};
  padding-right: ${({ theme }) => theme.spacing.S};
  padding-top: ${({ theme }) => theme.spacing.S};
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.M};
  }

  @media (min-width: 1200px) {
    width: 650px;
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
