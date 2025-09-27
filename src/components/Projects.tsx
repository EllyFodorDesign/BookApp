import styled from "styled-components";
import productImage from "../assets/sensorytubes.jpg"; // Import the author image
import { Divider } from "antd";

const AboutSection = styled.section`
  padding: 5rem 0;
  background: hsl(0, 0%, 98%);
`;

const Container = styled.div`
  max-width: 100%;
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
  margin-bottom: 1rem;
  margin-top: 0rem;

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

const LinkPlaceholder = styled.div`
  background: linear-gradient(
    135deg,
    hsl(85, 35%, 35%, 0.1),
    hsl(85, 35%, 35%, 0.2)
  );
  border-radius: 0.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const PlaceholderLinkText = styled(PlaceholderText)`
  font-size: 1.5rem;
  color: hsl(0, 0%, 1.9607843137254901%);
  margin: 0;
`;

const PlaceholderTextAuthor = styled.div`
  font-size: 1.5rem;
  font-weight: 400px;
  color: hsl(85.13513513513513, 100%, 14.50980392156863%);
  margin-bottom: 1rem;
`;

const TextBelowImage = styled(PlaceholderTextAuthor)`
  font-size: 1.3rem;
  font-weight: 400px;
  color: black;
  margin-bottom: 1rem;
`;

const PlaceholderSubtextAuthor = styled.div`
  color: hsl(0, 0%, 0%);
  font-size: 1rem;
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const Projects = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>Projekt</Title>
          <Divider> </Divider>

          <PlaceholderTextAuthor>Sensory Knit(ting)</PlaceholderTextAuthor>

          <TextContent>
          </TextContent>
          <PortraitPlaceholder>
            <Image src={productImage} alt="Stickadetuber" />
            <TextBelowImage>Textile Lego</TextBelowImage>
            <PlaceholderSubtextAuthor>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magn. lorem ipsum
              dolor sit amet, consectetur adipiscing elit. <br />
            </PlaceholderSubtextAuthor>
          </PortraitPlaceholder>
          <LinkPlaceholder>
            <PlaceholderLinkText>Klicka för fulltext</PlaceholderLinkText>
            {/* Add link to full project */}
          </LinkPlaceholder>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default Projects;
