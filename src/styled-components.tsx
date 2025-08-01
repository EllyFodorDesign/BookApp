import styled from "styled-components";
import MediaQuery from "./styles/mediaQuery";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f0f0f0;
  padding: 0px;
  margin: 0px;
  width: 100%;
  min-height: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  ${MediaQuery.desktop} {
    width: 100%;
  }
`;

export const MainSection = styled(PageWrapper)`
  //Buttons and all the main content
  display: flex;
  flex-direction: column;

  background-color: #f0f0f0;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  ${MediaQuery.desktop} {
    width: 100%;
  }
`;

export const Title = styled.h1`
  //Main heading
  color: black;
  font-size: 2rem;
  margin: 20px;
`;
export const HeaderSection = styled.div`
  //This is Elly Fodor text and placeholder.
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
