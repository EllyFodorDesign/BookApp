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
  overflow: hidden;
  flex-wrap: wrap;
  background-color: #f0f0f0;
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const MainSection = styled(PageWrapper)`
  //Buttons and all the main content

  ${MediaQuery.desktop} {
    width: 100%;
  }
`;

export const PageTitle = styled.h1`
  //Main heading
  color: black;
  font-size: 2rem;
  margin: 20px;
`;
export const HeaderSection = styled(PageWrapper)`
  //This is Elly Fodor text and placeholder.
`;
