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
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryLightest};

  ${MediaQuery.phone} {
    
  }

  ${MediaQuery.tablet} {
   
  }

  ${MediaQuery.desktop} {
    margin: 0 auto;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const MainSection = styled.div`
  background: ${({ theme }) => theme.colors.muted};
  border: 2px solid ${({ theme }) => theme.colors.landingDarker};
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;
  overflow-x: hidden;
`;

export const HeaderSection = styled(PageWrapper)`
  background: ${({ theme }) => theme.colors.muted};
  width: 100%;

  ${MediaQuery.desktop} {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const BottomSection = styled.section`
margin-top:  ${({ theme }) => theme.spacing.L};
  
`;