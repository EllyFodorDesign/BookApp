import styled from "styled-components";

const StyledFooterLanding = styled.footer`
  padding: ${({ theme }) => theme.spacing.M} 0;
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`;

export default function FooterLanding() {
  return (
    <StyledFooterLanding>© 2025 Ellinor Fodor Johansson. Alla rättigheter reserverade.</StyledFooterLanding>
  );
}
