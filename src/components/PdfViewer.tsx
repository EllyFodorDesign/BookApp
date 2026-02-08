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
  pageNumber: number;
  onLoadSuccess?: (pdf: any) => void; //makes onload a supported option
}
export default function PdfViewer({ file, pageNumber, onLoadSuccess }: PdfViewerProps){
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
        <Document key={`${file}-${pageNumber}`}
        file={file} onLoadSuccess={onLoadSuccess}>
        
          <Page 
          pageNumber={pageNumber}
          width={Math.floor(width)} />
        </Document>
      )}
    </div>
  );
}