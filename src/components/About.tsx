import styled from "styled-components";
import authorImage from "../assets/author.jpg"; // Import the author image

const AboutSection = styled.section`
  padding: 5rem 0;
  background: hsl(0, 0%, 98%);
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;
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

const ImagePlaceholder = styled.div`
  background: linear-gradient(
    135deg,
    hsl(85, 35%, 35%, 0.1),
    hsl(85, 35%, 35%, 0.2)
  );
  border-radius: 0.5rem;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const PortraitPlaceholder = styled.div`
  background: linear-gradient(
    135deg,
    hsl(85, 35%, 35%, 0.1),
    hsl(85, 35%, 35%, 0.2)
  );
  border-radius: 0.5rem;
  height: 38rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const PlaceholderText = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: hsl(85, 35%, 35%);
  margin-bottom: 1rem;
`;

const PlaceholderSubtext = styled.div`
  color: hsl(85, 8%, 45%);
`;

const PlaceholderTextAuthor = styled.div`
  font-size: 2rem;
  font-weight: 400px;
  color: hsl(85, 35%, 35%);
  margin-bottom: 1rem;
`;

const PlaceholderSubtextAuthor = styled.div`
  color: hsl(85, 8%, 45%);
  font-size: 1rem;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>Om författaren</Title>
          <TextContent>
            <Description>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <StatsGrid></StatsGrid>
          </TextContent>
          <PortraitPlaceholder>
            <Image src={authorImage} alt="Författare" />
            <PlaceholderTextAuthor>
              Ellinor Fodor Johansson
            </PlaceholderTextAuthor>
            <PlaceholderSubtextAuthor>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magn. lorem ipsum
              dolor sit amet, consectetur adipiscing elit. <br />
              Sed do eiusmod tempor incididunt ut labore et dolore magna. lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magn.
            </PlaceholderSubtextAuthor>
          </PortraitPlaceholder>
          <ImagePlaceholder>
            <PlaceholderText>Kommande</PlaceholderText>
            <PlaceholderSubtext>Nytt boksläpp väntar...</PlaceholderSubtext>
          </ImagePlaceholder>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
