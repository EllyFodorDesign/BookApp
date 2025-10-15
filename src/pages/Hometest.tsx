import React from "react";
import { BottomSection, HeaderSection, MainSection } from "../styled-components";
import omslagBig from "../assets/omslagBig.jpg"; 
import Header from "@/components/Header";
import { styled } from "styled-components";
import NotifyForm from "@/components/NotifyForm";
import FooterLanding from "@/components/FooterLanding";

export const BookFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.spacing.L};
  width: 90%;
`;

const Image = styled.img`
  width: 90%;
  margin: ${({ theme }) => theme.spacing.S};
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Intro = styled.section`
  text-align: left;
  margin: ${({ theme }) => theme.spacing.L};
  color: ${({ theme }) => theme.colors.text};

  h2,
  h3,
  ul,
  li {
    line-height: 1.5;
  }
  `;

const Hometest: React.FC = () => (
  <>
    <HeaderSection>
           <Header />
         </HeaderSection>
    <MainSection>
      <BookFrame>
 <Image src={omslagBig} alt="Bokomslag" />
 <Intro>
  <h3>Bok om elever med NPF i skolan</h3>
            <h4>Innehåll</h4>
            <ul style={{ paddingLeft: "15px" }}>
              <li>Strategier</li>
              <li>Praktiska tips</li>
              <li>Exempel från verkligheten</li>
            </ul>
 </Intro>
      </BookFrame>
    </MainSection>
     <BottomSection>
        <NotifyForm />
      </BottomSection>
      <FooterLanding />
  </>
);

export default Hometest;
