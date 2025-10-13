import styled from "styled-components";
import { HeaderSection } from "../styled-components";

const HeaderLanding = styled.header`
  background: ${({ theme }) => theme.colors.heroBackground};
  padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.S}; /* vertical | horizontal */
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  display: inline-block;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
  }
`;

export const HeaderText = styled.section`
  background: ${({ theme }) => theme.colors.heroBackground};
text-align:left;
  justify-content: center;
  max-width: ${({ theme }) => theme.sizes.M};
  margin: ${({ theme }) => theme.spacing.M} auto;

  h1 {
    color: ${({ theme }) => theme.colors.landing};
  margin-top: ${({ theme }) => theme.spacing.XS};
  margin-bottom: ${({ theme }) => theme.spacing.S};
  background: ${({ theme }) => theme.colors.heroBackground};
  }

  h3{
  font-size: ${({ theme }) => theme.fontSizes.H2};
  color: ${({ theme }) => theme.colors.landingDarker};
  max-width: 95%;
  font-weight: normal;
  }

`;


export default function Header() {
  return (
    <HeaderSection>
      <HeaderLanding>
        <HeaderText aria-labelledby="Info-om-bokrelease">
        <h1>Kommer snart</h1>
        <h3>Bok om elever i skolan</h3>
        </HeaderText>
      </HeaderLanding>
    </HeaderSection>
  );
}
