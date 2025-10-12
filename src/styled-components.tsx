import { styled } from "styled-components";
import MediaQuery from "./styles/mediaQuery";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primaryLightest};

  ${MediaQuery.phone} {
    width: 100%;
  }

  ${MediaQuery.tablet} {
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  ${MediaQuery.desktop} {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const MainSection = styled.div`
  background: ${({ theme }) => theme.colors.muted};
  margin: ${({ theme }) => theme.spacing.M} 0 ${({ theme }) => theme.spacing.XL};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.XS};

  ${MediaQuery.tablet} {
    margin: 0;
    padding: 0;
  }

  ${MediaQuery.desktop} {
  }
`;

export const HeaderSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.muted};

  ${MediaQuery.desktop} {
    max-width: 1200px;
  }
`;
