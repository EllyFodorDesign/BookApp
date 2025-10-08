import styled from "styled-components";
import { HeaderSection } from "../styled-components";
import MediaQuery from "../styles/mediaQuery";

const HeaderLanding = styled.header`
  background: ${({ theme }) => theme.colors.heroBackground};
padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.S}; /* vertical | horizontal */  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  display: inline-block;
  width: 100%;

   ${MediaQuery.tablet} {
    padding-left: 130px; /* less than XXL for closer edge */
  }

  ${MediaQuery.desktop} {
    padding-left: ${({ theme }) => theme.spacing.XXL}; /* less than XXL for closer edge */
    padding-right: ${({ theme }) => theme.spacing.L};
  }
`;

const LandingTitle = styled.h1`
  max-width: 100%;
  color: ${({ theme }) => theme.colors.landing};
margin: 0;
  background: ${({ theme }) => theme.colors.heroBackground};

  display: flex;

  justify-content: space-between;

  ${MediaQuery.phone} {
    width: 100%;
    margin-left: ${({ theme }) => theme.spacing.XL};
  }

  ${MediaQuery.tablet} {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: left;
  }

  ${MediaQuery.desktop} {
    margin-left: ${({ theme }) => theme.spacing.XXL};
  }
`;

export default function Header() {
  return (
    <HeaderSection>
      <HeaderLanding>
        <LandingTitle>Kommer snart</LandingTitle>
      </HeaderLanding>
    </HeaderSection>
  );
}
