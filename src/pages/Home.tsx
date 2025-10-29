
import { HeaderSection, MainSection } from "../styled-components";
import Hero from "../components/Hero";
import { ButtonGroup } from "../components/Button";
import { Heading } from "../components/styled-components/texts";
import ReadAboutButton from "@/components/ReadAboutButton";
import WebshopButton from "../components/WebshopButton";
{/*import PublitWebshop from "@/components/MyComponent";*/}


const Home: React.FC = () => (

  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      <Heading>"Att leva som barn med NPF i skolan"</Heading>
      <ButtonGroup>
        <WebshopButton buttoText="Köp boken genom att trycka här"/>
{/* <PublitWebshop/>*/}
        <ReadAboutButton buttoText="Läs mer om böckerna här" />
      </ButtonGroup>
    
    </MainSection>
  </>
);

export default Home;
