import { HeaderSection, MainSection } from "../styled-components";
import Hero from "../components/Hero";
import { ButtonGroup } from "../components/Button";
import { Heading } from "../components/styled-components/texts";
import WebshopButton from "../components/WebshopButton";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
{
  /*import PublitWebshop from "@/components/MyComponent";*/
}

const StyledRouterLinkTwo = styled(Link)`
  color: rgba(3, 28, 53, 0.8);
  background-color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  border: 2px solid black;
  border-radius: ${({ theme }) => theme.radii.SM};
  padding: ${({ theme }) => theme.spacing.S};
  transition: color 0.3s ease;
  font-size: 1rem;
  font-weight: 500;

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
`;

const LinkItem = styled.li``;

const Home: React.FC = () => (
  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      <Heading>"Att leva som barn med NPF i skolan"</Heading>
      <ButtonGroup>
        <WebshopButton buttoText="Köp boken: tryck här" />
        {/*Add a symbol for shopping cart to the right of the cta text*/}
        {/* <PublitWebshop/>*/}
        <LinksList>
          <LinkItem>
            <StyledRouterLinkTwo to="/books">
              Läs mer om böckerna här
            </StyledRouterLinkTwo>
          </LinkItem>
        </LinksList>
      </ButtonGroup>
    </MainSection>
  </>
);

export default Home;
