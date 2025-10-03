import styled from "styled-components";
import authorImage from "../assets/author.jpg"; // Import the author image
import { Content, Description, PlaceholderSubtext, PlaceholderSubtextAuthor, PlaceholderText, PlaceholderTextAuthor, TextContent, Title } from "./styled-components/texts";

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;
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



const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>Om författaren</Title>
          <TextContent>
            <Description> 
            </Description>
          </TextContent>
          <PortraitPlaceholder>
            <Image src={authorImage} alt="Författare" />
            <PlaceholderTextAuthor>
              Ellinor Fodor Johansson
            </PlaceholderTextAuthor>
            <PlaceholderSubtextAuthor>
               Ellinor har skrivit sedan barnsben och har en passion för att
              skapa berättelser som engagerar och inspirerar. Hennes böcker
              fokuserar på barn med neuropsykiatriska funktionsnedsättningar
              (NPF) i skolan, med målet att öka förståelsen och stödet för dessa
              barn i utbildningsmiljön. Genom sina verk vill hon ge röst åt de
              som ofta missförstås och bidra till en mer inkluderande skola.
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
