import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {
  BottomSection,
  HeaderSection,
  MainSection,

} from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import omslag from "../assets/omslag.jpg"; // Import the book cover image
import { Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


const Intro = styled.section`
  text-align: left;
    margin-left: ${({ theme }) => theme.spacing.S};
  color: ${({ theme }) => theme.colors.text};

  h2,
  h3,
  ul,
  li {
    line-height: 1.5;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.H2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLightest};
    border: 2px solid red;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.H3};
    margin-top: ${({ theme }) => theme.spacing.S};
  }

  ul {
    font-size: ${({ theme }) => theme.fontSizes.Lp};
  }

  li {
    font-size: ${({ theme }) => theme.fontSizes.li};
  }
`;

const Image = styled.img`
  width: 55%;
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

export const BookFrame = styled.div`
display: flex;
  border-radius: 0.6rem;
flex-direction: row;
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

const PdfContainer = styled.div`
  max-width: 500px;
  margin-left: ${({ theme }) => theme.spacing.S};
`;

const Landing: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const  [pageNumber, setPageNumber] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  
const goToPrevPage = () => setPageNumber ((p) => Math.max(p - 1, 1));
const goToNextPage = () => setPageNumber ((p) => Math.max(p + 1, 1));

  return (
    <>
      <HeaderSection>
        <Header />
        <MainSection>
          <BookFrame>
            <Image src={omslag} alt="Bokomslag" />
            {/* 
        Samt en nedräkning till release? 
        */}
        
            <Intro aria-labelledby="intro-titlar">
              <h3>"Att leva med NPF som barn"</h3>
              <h4>Utdrag av innehållet:</h4>
              <ul style={{ paddingLeft: "15px" }}>
                <li>Strategier</li>
                <li>Praktiska tips</li>
                <li>Exempel från verkligheten</li>
              </ul>
            </Intro>
          </BookFrame>
          <BottomSection>
  {/* PDF + navigation */}
            <PdfContainer>
              <Document
                file="/document.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                loading={<p>Loading PDF…</p>}
              >
                <Page
                  pageNumber={pageNumber}
                  width={500} // Adjust to fit layout
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>

              <nav
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <button onClick={goToPrevPage} disabled={pageNumber <= 1}>
                  Prev
                </button>
                {numPages > 0 && <span>Page {pageNumber} of {numPages}</span>}
                <button onClick={goToNextPage} disabled={pageNumber >= numPages}>
                  Next
                </button>
              </nav>
            </PdfContainer>

             {/* 
          <NotifyForm aria-labelledby="registrera-email"/> */}
          </BottomSection>
        </MainSection>
      </HeaderSection>

      <FooterLanding />
    </>
  );
};

export default Landing;
