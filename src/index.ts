import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = './main.worker.js';

(async () => {
  const loadingTask = pdfjsLib.getDocument('example.pdf');
  const pdf = await loadingTask.promise;

  // Load the first page.
  const page = await pdf.getPage(1);

  const scale = 1;
  const viewport = page.getViewport({ scale });

  // Set the canvas dimensions.
  const canvas = document.getElementById('pdf') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  
  // Render the page into the canvas.
  if (ctx){
  const renderContext = {
    canvasContext: ctx,
    viewport: viewport,
    canvas: canvas
  };
  page.render(renderContext);
}})