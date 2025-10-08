import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection } from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import omslag from "../assets/omslag.jpg"; // Import the book cover image
import MediaQuery from "../styles/mediaQuery";

const Intro = styled.section`
  text-align: left;
  max-width: 68ch;
  margin-top: ${({ theme }) => theme.spacing.L};
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${({ theme }) => theme.spacing.L};
  margin-right: ${({ theme }) => theme.spacing.L};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.LH2};
    line-height: 1.4;
    margin-bottom: ${({ theme }) => theme.spacing.M};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.LH3};
    line-height: 1.5;
    margin-top: ${({ theme }) => theme.spacing.L};
    margin-bottom: ${({ theme }) => theme.spacing.S};
  }

  ul {
    font-size: ${({ theme }) => theme.fontSizes.Lul};
    line-height: 1.6;
    padding-left: ${({ theme }) => theme.spacing.M};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.S};

    font-size: ${({ theme }) => theme.fontSizes.Lli};
  }

  ${MediaQuery.phone} {
    text-align: left;
    max-width: 100%;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }
    ul {
      font-size: ${({ theme }) => theme.fontSizes.Lul};
    }

    li {
      margin-bottom: ${({ theme }) => theme.spacing.S};

      font-size: ${({ theme }) => theme.fontSizes.Lli};
    }
  }

  /* 📱 Tablet adjustments */
  ${MediaQuery.tablet} {
    text-align: left;
    max-width: 100%;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH1};
      margin-right: ${({ theme }) => theme.spacing.XXL};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }
    ul {
      font-size: ${({ theme }) => theme.fontSizes.Lul};
    }

    li {
      margin-bottom: ${({ theme }) => theme.spacing.S};

      font-size: ${({ theme }) => theme.fontSizes.Lli};
    }
  }
  /* 💻 Desktop adjustments */
  ${MediaQuery.desktop} {

    h2 {
      font-size: 2rem; /* ~32px, accessible headline size */
    }
    h3 {
      font-size: 1.5rem; /* ~24px */
    }
    ul {
      font-size: 1.125rem; /* ~18px */
    }
  }
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;

  ${MediaQuery.tablet} {
    width: 80%;
  }
  ${MediaQuery.desktop} {
    width: 70%;
  }
`;

const Landing: React.FC = () => {
  return (
    <>
      <HeaderSection>
        <Header />
        <MainSection>
          <Image src={omslag} alt="Bokomslag" />
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
        </MainSection>
      </HeaderSection>
      <FooterLanding />
    </>
  );
};

export default Landing;
