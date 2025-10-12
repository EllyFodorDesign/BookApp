import { styled } from "styled-components";
import MediaQuery from "./styles/mediaQuery";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 0;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLightest};

  ${MediaQuery.phone} {
    width: 100%;
  }

  ${MediaQuery.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  ${MediaQuery.desktop} {
    margin: 0 auto;
    flex-direction: row;
    max-width: 100%;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const MainSection = styled.div`
  background: ${({ theme }) => theme.colors.muted};
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
    box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.S} 0;
`;

export const HeaderSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.muted};
  width: 100%;

  ${MediaQuery.desktop} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
