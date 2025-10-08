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
  margin-left: ${({ theme }) => theme.spacing.XL};
  color: ${({ theme }) => theme.colors.text};

  h2,
  h3,
  ul,
  li {
    line-height: 1.5;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.LH2};
    margin-bottom: ${({ theme }) => theme.spacing.M};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLightest};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.LH3};
    margin: ${({ theme }) => `${theme.spacing.L} 0 ${theme.spacing.S}`};
  }

  ul {
    padding-left: ${({ theme }) => theme.spacing.M};
    font-size: ${({ theme }) => theme.fontSizes.Lp};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.S};
    font-size: ${({ theme }) => theme.fontSizes.Lli};
  }

  ${MediaQuery.phone} {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH1};
      margin-right: ${({ theme }) => theme.spacing.XXL};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }
  }

  /* 📱 Tablet */
  ${MediaQuery.tablet} {
    max-width: 68ch;
    margin-left: 0px;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH1};
      margin-right: ${({ theme }) => theme.spacing.XL};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }
  }

  /* 💻 Desktop */
  ${MediaQuery.desktop} {
    margin-left: 0;
  padding-left: 0;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH1}; /* 2rem / 32px */
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2}; /* 1.5rem / 24px */
    }
    ul,
    li {
      font-size: ${({ theme }) => theme.fontSizes.Lp}; /* 1rem / 16px */
    }
  }
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ${MediaQuery.tablet} {
    width: 80%;
  }
  ${MediaQuery.desktop} {
    width: 90%;
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
