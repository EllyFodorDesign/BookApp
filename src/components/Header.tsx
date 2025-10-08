import styled from "styled-components";
import { HeaderSection } from "../styled-components";

const HeaderLanding = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.M} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

const LandingTitle = styled.h1`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.M};
  background: ${({ theme }) => theme.colors.backgroundLanding};

  display: flex;
  align-items: center;
  justify-content: space-between;
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
