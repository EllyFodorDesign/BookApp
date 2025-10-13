import styled from "styled-components";

const StyledFooterLanding = styled.footer`
  padding: ${({ theme }) => theme.spacing.M};
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.95rem;
  width: 100%;
background-color: ${({ theme }) => theme.colors.heroBackground};
  @media (min-width: 768px) {
  margin-left: ${({ theme }) => theme.spacing.XXL};
  }

`;

export default function FooterLanding() {
  return (
    <StyledFooterLanding>
      © 2025 Elly Fodor. Alla rättigheter reserverade.
    </StyledFooterLanding>
  );
}
