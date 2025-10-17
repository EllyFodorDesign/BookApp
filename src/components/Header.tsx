import styled from "styled-components";
import { HeaderSection } from "../styled-components";

const HeaderLanding = styled.header`
  background: ${({ theme }) => theme.colors.heroBackground};
  padding: ${({ theme }) => theme.spacing.XXS};
  ${({ theme }) => theme.spacing.XXS}; /* vertical | horizontal */
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

export const BookFrame = styled.div`
display: flex;
  border-radius: 0.6rem;
flex-direction: column;
justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin: ${({ theme }) => theme.spacing.M} auto;
   text-align: left;
   width: 90%;
  `;

export const HeaderText = styled(BookFrame)`
  background: ${({ theme }) => theme.colors.heroBackground};
  text-align: left;

  
  @media (min-width: 1200px) {
    width: 60%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.landing};
    font-size: ${({ theme }) => theme.fontSizes.H1};
    background: ${({ theme }) => theme.colors.heroBackground};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.XXS};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.H2};
    color: ${({ theme }) => theme.colors.landingDarker};
    font-weight: normal;
  }

  @media (min-width: 480px) {
  }
`;

export default function Header() {
  return (
    <HeaderSection>
      <HeaderLanding>
        <HeaderText aria-labelledby="Info-om-bokrelease">
          <h1>Kommer snart</h1>
          <h2>Bok om elever i skolan</h2>
        </HeaderText>
      </HeaderLanding>
    </HeaderSection>
  );
}
