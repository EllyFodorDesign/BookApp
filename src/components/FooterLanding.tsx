import styled from "styled-components";

const StyledFooterLanding = styled.footer`
  padding: ${({ theme }) => theme.spacing.M} 0;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  text-align: left;
  margin-left: ${({ theme }) => theme.spacing.M};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;

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
