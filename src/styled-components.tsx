import styled, { createGlobalStyle } from "styled-components";
import MediaQuery from "./styles/mediaQuery";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

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
  //Buttons and all the main content

  ${MediaQuery.tablet} {
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

export const PageTitle = styled.h1`
  //Main heading

  font-size: 2rem;
  margin: 20px;
  text-align: center;
`;

export const HeaderSection = styled(PageWrapper)`
  color: black;
  //This is Elly Fodor text and placeholder.

  ${MediaQuery.phone} {
    text-align: right;
  }
`;

export const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: bolder;
  color: hsl(85, 15%, 25%);
  margin-bottom: 2rem;
  margin-top: 0rem;
  text-align: center;
  padding: 2px;
  margin: 4px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
