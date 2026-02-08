import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";
import { useRef, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

if (typeof window !=="undefined"){
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
}

interface PdfViewerProps{
  file: string;
  children?: React.ReactNode; //Children is an optional prop now.
  onLoadSuccess?: (pdf: PDFDocumentProxy) => void; //makes onload a supported option to landingpage.
}
export default function PdfViewer({ file, children }: PdfViewerProps){
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(entries => {
      setWidth(entries[0].contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%" }}>
      {width > 0 && (
        <Document file={file}>
          {children}
          <Page pageNumber={1} width={Math.floor(width)} />
        </Document>
      )}
    </div>
  );
}