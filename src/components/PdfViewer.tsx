import { useRef, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

if (typeof window !=="undefined"){
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
}
export default function PdfViewer({ file }: { file: string }) {
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
          <Page pageNumber={1} width={Math.floor(width)} />
        </Document>
      )}
    </div>
  );
}