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
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primaryLightest};

  ${MediaQuery.phone} {
    width: 100%;
  }

  ${MediaQuery.tablet} {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.spacing.L};

  ${MediaQuery.tablet} {
    padding: 0;
    padding-right: ${({ theme }) => theme.spacing.XXL};
    margin: auto;
    margin-top: ${({ theme }) => theme.spacing.XL};
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
