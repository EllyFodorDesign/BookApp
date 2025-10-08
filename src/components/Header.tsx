import styled from "styled-components";

const HeaderLanding = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.M} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.M};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.H1};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`;



export default function Header() {
  return (
    <HeaderLanding>
      <Inner>
        <div>
          <Title>Ellinor Fodor Johansson</Title>
          <h1>Kommer snart:</h1>
        </div>
      </Inner>
    </HeaderLanding>
  );
}
