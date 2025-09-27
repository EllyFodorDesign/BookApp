import styled from "styled-components";
import authorImage from "../assets/author.jpg"; // Import the author image
import Divider from "antd/es/divider";


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

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bolder;
  color: hsl(85, 15%, 25%);
  margin-bottom: 2rem;
  margin-top: 0rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SubTitle = styled.h4`
  font-size: 2rem;
  font-weight: normal;
  color: hsl(85, 15%, 25%);
  margin-bottom: 2rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SubTitleSmaller = styled(Title)`
  font-size: 1.5rem;
  font-weight: normal;
  color: hsl(85, 15%, 25%);
  margin-bottom: 2rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
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
  margin-bottom: 0rem;
  padding-bottom: 1.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const PlaceholderSubtextBooks = styled.div`
  color: hsl(85, 8%, 45%);
  font-size: 1rem;
  text-align: left;
  margin: 1rem;
`;

const Books = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title>Böcker av författaren</Title>
          <Divider></Divider>
          <SubTitle>"Att leva som barn med NPF i skolan"</SubTitle>
          <SubTitleSmaller>För pedagoger och lärare</SubTitleSmaller>
          <PortraitPlaceholder>
            <Image src={authorImage} alt="Författare" />
            {/* replace with actual image*/}
            <PlaceholderSubtextBooks>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magn. lorem ipsum
              dolor sit amet, consectetur adipiscing elit. <br />
              Sed do eiusmod tempor incididunt ut labore et dolore magna. lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magn.
            </PlaceholderSubtextBooks>
          </PortraitPlaceholder>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default Books;
