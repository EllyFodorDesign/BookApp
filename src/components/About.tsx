import styled from "styled-components";

const AboutSection = styled.section`
  padding: 5rem 0;
  background: hsl(0, 0%, 98%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: hsl(85, 15%, 25%);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: hsl(85, 8%, 45%);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-top: 1rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1rem;
  background: hsl(85, 10%, 95%);
  border-radius: 0.5rem;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: hsl(85, 35%, 35%);
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: hsl(85, 8%, 45%);
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(
    135deg,
    hsl(85, 35%, 35%, 0.1),
    hsl(85, 35%, 35%, 0.2)
  );
  border-radius: 0.5rem;
  padding: 2rem;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PlaceholderText = styled.div`
  font-size: 3.75rem;
  font-weight: bold;
  color: hsl(85, 35%, 35%);
  margin-bottom: 1rem;
`;

const PlaceholderSubtext = styled.div`
  color: hsl(85, 8%, 45%);
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>About BITJO</Title>
          <Grid>
            <TextContent>
              <Description>
                At BITJO, we believe in the power of innovation to transform
                businesses and create meaningful connections in the digital
                world.
              </Description>
              <Description>
                Our team is dedicated to delivering exceptional solutions that
                not only meet your current needs but anticipate future
                opportunities.
              </Description>
              <StatsGrid>
                <StatCard>
                  <StatNumber>100+</StatNumber>
                  <StatLabel>Projects</StatLabel>
                </StatCard>
                <StatCard>
                  <StatNumber>50+</StatNumber>
                  <StatLabel>Clients</StatLabel>
                </StatCard>
              </StatsGrid>
            </TextContent>
            <ImagePlaceholder>
              <PlaceholderText>BITJO</PlaceholderText>
              <PlaceholderSubtext>Building the future</PlaceholderSubtext>
            </ImagePlaceholder>
          </Grid>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
