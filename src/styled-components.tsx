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
`;

export const MainSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing.XL};
  margin-top: ${({ theme }) => theme.spacing.M};

  ${MediaQuery.tablet} {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

export const HeaderSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.background};
  ${MediaQuery.tablet} {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
  }
`;
