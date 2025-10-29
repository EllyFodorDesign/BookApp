import { HeaderSection, MainSection } from "../styled-components";
import Hero from "../components/Hero";
import { ButtonGroup } from "../components/Button";
import { Heading, HeadingTwo} from "../components/styled-components/texts";
import WebshopButton from "../components/WebshopButton";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import omslagBig from "../assets/omslagBig.jpg"; // Import the book cover image


{
  /*import PublitWebshop from "@/components/MyComponent";*/
}

const StyledRouterLinkTwo = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  text-decoration: none;
  border: 2px solid black;
  border-radius: ${({ theme }) => theme.radii.LG};
  padding: ${({ theme }) => theme.spacing.M};
  transition: color 0.3s ease;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.thin};
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);


  &:hover {
    color: hsl(0, 0%, 98%);
  }

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.XXL};
  margin-top: ${({ theme }) => theme.spacing.XXL};
`;

const LinkItem = styled.li``;

const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: ${({ theme }) => theme.spacing.XXS};

  @media (min-width: 480px) {
    width: 65%;
      margin: ${({ theme }) => theme.spacing.S};

  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const Frame = styled.div`
  display: flex;
  border-radius: 0.6rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.spacing.L};

  @media (min-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
  }
`;

const Home: React.FC = () => (
  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      
      <Frame>
        <HeadingTwo>"Stöd för lärare att hjälpa</HeadingTwo>
        <Heading>elever med svårigheter"</Heading>
      
        <Image src={omslagBig} alt="Bokomslag" />
    
      <ButtonGroup>
        <WebshopButton buttoText="Köp boken: tryck här" />
        {/*Add a symbol for shopping cart to the right of the cta text*/}
        {/* <PublitWebshop/>*/}
         </ButtonGroup>
           </Frame>
        <LinksList>
          <LinkItem>
            <StyledRouterLinkTwo to="/books">
              Läs mer om böckerna här
            </StyledRouterLinkTwo>
          </LinkItem>
        </LinksList>
     
   
    </MainSection>
  </>
);

export default Home;
