import  React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection } from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import omslag from "../assets/omslag.jpg"; // Import the book cover image
import MediaQuery from "../styles/mediaQuery";
import PdfViewer from "@/components/PdfViewer";
import { pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// Must be at the top of your component or main.tsx
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
    font-size: ${({ theme }) => theme.fontSizes.LH2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLightest};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.LH3};
    margin: ${({ theme }) => `${theme.spacing.L} 0 ${theme.spacing.S}`};
  }

  ul {
    font-size: ${({ theme }) => theme.fontSizes.Lp};
  }

  li {
    font-size: ${({ theme }) => theme.fontSizes.li};
  }

  ${MediaQuery.phone} {
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.LH1};
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSizes.LH2};
    }
  }
`;

const Image = styled.img`
  width: 55%;
  margin: ${({ theme }) => theme.spacing.XXS};
  height: auto;
  object-fit: cover;
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

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
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.spacing.L};
  width: 90%;

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


export const button =styled.button`{
display: flex;
flex-direction: row;
}

`;

export const PdfContainer = styled(BookFrame)`
display: flex;
flex-direction: column;
  max-width: 500px;
  margin-left: ${({ theme }) => theme.spacing.S};
`;

export const Buttonframe= styled(BookFrame)`
display: flex;
flex-direction: row;

`;

export const PageNumDesign = styled.p`
display: flex;
flex-direction: row;
justify-content: center;
margin-top:  ${({ theme }) => theme.spacing.S};
`;
//hooks live here
{/*This state variable will hold the total number of pages in a document (initially set to null).
//setNumPages: This function updates the numPages state.*/}
{/*pageNumber: This state variable keeps track of the current page number (initially set to 1).
setPageNumber: This function updates the pageNumber state.*/}
{/*This function is called when a document loads successfully.
The argument { numPages } is destructured to get the total number of pages from the document.
When the document loads, setNumPages(numPages) updates the numPages state with the total number of pages.*/}

{/*Define your event handler functions (like onDocumentLoadSuccess, goToPrevPage, and goToNextPage) 
after your hooks but before the return statement.*/}

const Landing: React.FC = () => {
const [numPages, setNumPages] = useState<number | null>(null); 
const [pageNumber, setPageNumber] = useState(1); 

useEffect(() => {
  console.log("Page number:", pageNumber);
}, [pageNumber]);

const onDocumentLoadSuccess =(pdf: any) => { //när dokument lyckas ladda. vilken pdf som helst kan visas.
    setNumPages(pdf.numPages);
  };

const goToPrevPage = () => {
    setPageNumber((p) => (p - 1 <= 1 ? 1 : p - 1));
  };

  const goToNextPage = () => {
    if (!numPages) return;
    setPageNumber((p) => (p + 1 >= numPages ? numPages : p + 1));
  };
  
return (
    
    <>
      <HeaderSection>
        <Header />
        <MainSection>
          <BookFrame>
            <Image src={omslag} alt="Bokomslag" />      
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
          <BookFrame>
            <PdfContainer>
              <Buttonframe>
                <div className ="page">
                  <nav>
 <button onClick={goToNextPage} className="next">Nästa</button> 
 <button onClick={goToPrevPage} className="prev">Tillbaka</button>
 <PageNumDesign>Sida {pageNumber} av {numPages ?? '--'}
        </PageNumDesign>
     
                  </nav>
                </div>
                  </Buttonframe>

              <PdfViewer file="/document.pdf"
               onLoadSuccess={onDocumentLoadSuccess}
               pageNumber={pageNumber}/>
          
            </PdfContainer>
            </BookFrame>
            
          {/* <NotifyForm />*/}
        </MainSection>
      </HeaderSection>

      <FooterLanding />
    </>
);
};


export default Landing;