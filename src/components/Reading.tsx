import styled from "styled-components";

const PdfWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 80vh; /* THIS IS CRUCIAL */
  margin: ${({ theme }) => theme.spacing.L} auto;
  border-radius: 0.6rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const PdfIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Reading = () => {
  return (
    <PdfWrapper>
      <PdfIframe
        src="/public/document.pdf"
        title="Book preview"
      />
    </PdfWrapper>
  );
};

export default Reading;
