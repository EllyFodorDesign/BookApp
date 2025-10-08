import React from "react";
import Header from "./components/Header";
import BookPreview from "./components/BookPreview";
import Footer from "./components/Footer";
import styled from "styled-components";

const Landing = styled.main`
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.l};
`;

const Intro = styled.section`
  text-align: left;
  max-width: 68ch;
`;

export default function App() {
  // Set target date for countdown (edit as needed)
  const publicationDate = new Date("2026-01-15T00:00:00"); // <— change to actual date

  return (
    <>
      <Header />
      <Landing>
        <Intro aria-labelledby="about-heading">
          <h2 id="about-heading" style={{ fontSize: "1.25rem" }}>
            Här kommer böcker att listas när publisering är aktuell
          </h2>
          <p>
            Jag skriver om barn med NPF i skolan. Här hittar du böcker och
            resurser som stödjer barn med neuropsykiatriska funktionsnedsättningar.
          </p>
        </Intro>

        <BookPreview publicationDate={publicationDate} />

        <Footer />
      </Landing>
    </>
  );
}
