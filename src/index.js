import pdfjs from "pdfjs-dist/webpack";

// Inspired by https://stackoverflow.com/questions/12921052/parsing-pdf-pages-as-javascript-images
export default async (pdfBlob, options = {}) => {
  const { scale = 2 } = options;
  const url = URL.createObjectURL(pdfBlob);
  const pdf = await pdfjs.getDocument(url).promise;
  URL.revokeObjectURL(url);
  const page = await pdf.getPage(1);

  const viewport = page.getViewport({ scale });

  const canvas = document.createElement("canvas");
  document.body.append(canvas);
  const context = canvas.getContext("2d");
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  canvas.style = `height: ${viewport.height}px; width: ${viewport.width}px; display: none`;

  await page.render({ canvasContext: context, viewport }).promise;
  return new Promise(resolve => {
    canvas.toBlob(blob => {
      canvas.remove();
      resolve(blob);
    });
  });
};
