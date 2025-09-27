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
    height: 200px;
    flex-direction: row;
    width: 100%;
    justify-content: left;
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
