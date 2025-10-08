import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

interface Props {
  publicationDate: Date;
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.m};
  align-items: start;
  @media (min-width: 800px) {
    grid-template-columns: 320px 1fr;
    align-items: start;
  }
`;

const Calendar = styled.div`
  width: 200px;
  max-width: 100%;
  background: #fff;
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 8px 22px rgba(3, 6, 10, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.s};
  margin: 0 auto;

  @media (min-width: 800px) {
    margin: 0;
  }
`;

/* Paper calendar look */
const CalInner = styled.div`
  width: 120px;
  height: 140px;
  background: linear-gradient(180deg, #fff 0%, #fbfbfb 100%);
  border-radius: 8px;
  border: 1px solid rgba(8, 8, 8, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
`;

const CalMonth = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
`;

const CalDay = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
  margin-top: 6px;
`;

const DaysLeft = styled.div`
  margin-top: 8px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

/* Book card */
const Card = styled.article`
  background: white;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.m};
  box-shadow: 0 8px 22px rgba(3, 6, 10, 0.06);
`;

const BookTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.colors.text};
`;

const BookDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lead};
  color: ${({ theme }) => theme.colors.muted};
`;

function formatMonth(date: Date) {
  return date.toLocaleString("sv-SE", { month: "short" }).toUpperCase();
}

function daysBetween(a: Date, b: Date) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard time portion for accurate days difference
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utcB - utcA) / _MS_PER_DAY);
}

export default function BookPreview({ publicationDate }: Props) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    // update every minute so countdown is not stale (lightweight)
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const daysLeft = useMemo(() => {
    return daysBetween(
      new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      publicationDate
    );
  }, [now, publicationDate]);

  // For the paper calendar visual date
  const calDay = publicationDate.getDate();
  const calMonth = formatMonth(publicationDate);
  const calYear = publicationDate.getFullYear();

  return (
    <Section aria-labelledby="book-heading">
      <Calendar aria-hidden="false">
        <CalInner aria-hidden="true">
          <CalMonth>
            {calMonth} {calYear}
          </CalMonth>
          <CalDay>{calDay}</CalDay>
          <DaysLeft role="status" aria-live="polite">
            {daysLeft > 0
              ? `${daysLeft} dagar kvar`
              : daysLeft === 0
              ? "Släpps idag!"
              : `Utgiven`}
          </DaysLeft>
        </CalInner>
      </Calendar>

      <Card>
        <h2 id="book-heading" style={{ fontSize: "1.5rem" }}>
          Kommande bok: Titel med fokus på NPF i skolan.
        </h2>
        <BookTitle>Arbetsnamn: Stöd i klassrummet</BookTitle>
        <BookDesc>
          En praktisk guide för lärare och föräldrar som vill stödja barn med
          neuropsykiatriska funktionsnedsättningar i skolmiljön. Boken samlar
          resurser, övningar och konkreta strategier.
        </BookDesc>

        <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#444" }}>
          Vill du veta mer om släppdatum och förhandsbeställning? Håll utkik här
          — sidan uppdateras när boksläpp närmar sig.
        </p>
      </Card>
    </Section>
  );
}
