import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookPreview from "../components/BookPreview";

const LandingPageWrapper = styled.main`


  display: flex;
  flex-direction: column;
  
`;

const Intro = styled.section`
  text-align: left;
  max-width: 68ch;
`;

const Landing: React.FC = () => {
  // Set target date for countdown (edit as needed)
  const publicationDate: Date = new Date("2026-01-15T00:00:00");

  return (
    <>
      <Header />
      <LandingPageWrapper>
        <Intro aria-labelledby="about-heading">
          <h2 id="about-heading" style={{ fontSize: "1.25rem" }}>
            Här kommer böcker att listas när publisering är aktuell
          </h2>
          <p>
            Jag skriver om barn med NPF i skolan. Här hittar du böcker och
            resurser som stödjer barn med neuropsykiatriska
            funktionsnedsättningar.
          </p>
        </Intro>

        <BookPreview publicationDate={publicationDate} />

        <Footer />
      </LandingPageWrapper>
    </>
  );
};

export default Landing;
