import React from "react";
import { HeaderSection, MainSection } from "../styled-components";
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
        <Button>Köp boken: Att leva som barn med NPF i skolan</Button>
        <ScheduleButton buttoText="Läs författarens BA projekt här" />
      </ButtonGroup>
    </MainSection>
  </>
);

export default Home;
