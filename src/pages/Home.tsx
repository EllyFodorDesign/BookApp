import React from "react";
import { HeaderSection, MainSection, Heading} from "../styled-components";
import Hero from "../components/Hero";
import { ButtonGroup, Button } from "../components/Button";
import ScheduleButton from "../components/ScheduleButton";



const Home: React.FC = () => (
  <>
    <HeaderSection>
      <Hero />
    </HeaderSection>
    <MainSection>
      <ButtonGroup>
      <Heading> 
        "Att leva som barn med NPF i skolan"
      </Heading>
        <Button>Köp boken genom att trycka här</Button>
        <ScheduleButton buttoText="Läs mer om böckerna här" />
      </ButtonGroup>
    </MainSection>
  </>
);

export default Home;
