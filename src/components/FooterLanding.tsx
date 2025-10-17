import styled from "styled-components";

const StyledFooterLanding = styled.footer`
  padding-top: ${({ theme }) => theme.spacing.S};
    padding-left: ${({ theme }) => theme.spacing.S};
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.M};
  background-color: ${({ theme }) => theme.colors.heroBackground};
`;

export default function FooterLanding() {
  return (
    <StyledFooterLanding>
      <p>
      © 2025 Elly Fodor Publishing. Alla rättigheter reserverade.</p>
    </StyledFooterLanding>
  );
}
