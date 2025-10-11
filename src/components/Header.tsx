import styled from "styled-components";
import { HeaderSection } from "../styled-components";
import MediaQuery from "../styles/mediaQuery";

const HeaderLanding = styled.header`
  background: ${({ theme }) => theme.colors.heroBackground};
  padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.S}; /* vertical | horizontal */
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  display: inline-block;
  width: 100%;
`;

const LandingTitle = styled.h1`
  max-width: 100%;
  color: ${({ theme }) => theme.colors.landing};
  margin-left: ${({ theme }) => theme.spacing.M};
  margin-top: ${({ theme }) => theme.spacing.XS};
  margin-bottom: ${({ theme }) => theme.spacing.XS};
  background: ${({ theme }) => theme.colors.heroBackground};

  ${MediaQuery.phone} {
    width: 100%;
  }
  
`;

export const LandingTitleSub = styled(LandingTitle)`
font-size: ${({ theme }) => theme.fontSizes.H2};
  color: ${({ theme }) => theme.colors.landingDarker};
  max-width: 95%;
  font-weight: normal;

`;

export default function Header() {
  return (
    <HeaderSection>
      <HeaderLanding>
        <LandingTitle>Kommer snart</LandingTitle>
      <LandingTitleSub>Bok om elever i skolan</LandingTitleSub>
      </HeaderLanding>
    </HeaderSection>
  );
}
