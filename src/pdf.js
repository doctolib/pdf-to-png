import pdfjs from "pdfjs-dist";
import PdfjsWorker from "pdfjs-dist/build/pdf.worker"

// Based on https://github.com/mozilla/pdfjs-dist/blob/master/webpack.js

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfjsWorker();
}

export default pdfjs
