import { styled } from "styled-components";
import MediaQuery from "./styles/mediaQuery";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  flex-wrap: wrap;
  background-color: white;
  padding: 0px;
  margin: 0px;
  min-height: 100%;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLightest};

  ${MediaQuery.phone} {
    width: 100%;
  }

  ${MediaQuery.tablet} {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: left;
  }

  ${MediaQuery.desktop} {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: left;
  }
`;

export const MainSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing.XL};
  margin-top: ${({ theme }) => theme.spacing.M};

  ${MediaQuery.tablet} {
    display: flex;
    height: 100%;
    flex-direction: row;
    width: 100%;
    justify-content: left;
    margin-bottom: 40px;
  }

  ${MediaQuery.desktop} {
    max-width: 1200px;
  }
`;

export const HeaderSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.muted};
    ${MediaQuery.desktop} {
    max-width: 1200px;
  }
`;
