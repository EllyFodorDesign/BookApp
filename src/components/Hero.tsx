import styled from "styled-components";
import MediaQuery from "../styles/mediaQuery";

const HeroSection = styled.section`  //controles content from Elyfodor to placeholder
  color: white;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  max-width: 64rem;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: hsl(85, 15%, 25%);
  margin-bottom: 1.5rem;
  line-height: 1.1;

 ${MediaQuery.phone} {
    text-align: center;
  }
  

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: black;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Content>
        <PageTitle>EllyFodor - Publishing</PageTitle>
        <Description></Description>
      </Content>
    </HeroSection>
  );
};

export default Hero;
