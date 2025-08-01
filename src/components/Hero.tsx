import styled from "styled-components";

const HeroSection = styled.section`
  background: linear-gradient(to bottom, hsl(0, 0%, 98%), hsl(85, 10%, 95%));
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  max-width: 64rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: hsl(85, 15%, 25%);
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: hsl(85, 8%, 45%);
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
        <Title>EllyFodor - Publishing</Title>
        <Description>Placeholder text here.</Description>
      </Content>
    </HeroSection>
  );
};

export default Hero;
