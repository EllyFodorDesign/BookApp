import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { HeaderSection, MainSection } from "../styled-components";
import FooterLanding from "../components/FooterLanding";
import omslag from "../assets/omslag.jpg"; // Import the book cover image
import MediaQuery from "../styles/mediaQuery";

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

export const PdfContainer = styled(BookFrame)`
  max-width: 500px;
  margin-left: ${({ theme }) => theme.spacing.S};
`;

const Landing: React.FC = () => {
   {/*const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const goToPrevPage = () => setPageNumber((p) => Math.max(p - 1, 1));
  const goToNextPage = () => setPageNumber((p) => Math.min(p + 1, numPages));
*/}
  return (
    <>
      <HeaderSection>
        <Header />
        <MainSection>
          <BookFrame>
            <Image src={omslag} alt="Bokomslag" />
            {/* Lägg in bild här på omslaget.
        Samt en nedräkning till release? 
        Öka avståndet mellan footer och övrigt.  */}
        
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
          {/* <NotifyForm />*/}
          <BookFrame>{/*
             <PdfContainer><Document
                file="/document.pdf" // Ensure this is the correct path
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={(error) => {
                  console.error("Failed to load PDF:", error);
                }}
                onSourceError={(error)=> {
                  console.error("PDF SOURCE ERROR", error);
                }}
                loading={<p>Loading PDF…</p>}
              >
                <Page
                  pageNumber={pageNumber}
                  width={200}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>

              <nav style={{
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
              </nav>  </PdfContainer>
              - Jag vill förstå hur pdf renderaren fungerar. 
              - Två knappar: prev och next. 
              - Det är pdf react som används. 
              */}
          </BookFrame>
        </MainSection>
      </HeaderSection>

      <FooterLanding />
    </>
  );
};

export default Landing;