import Document from './Document';
import Outline from './Outline';
import Page from './Page';

import './pdf.worker.entry';

let pdfjs = window.pdfjsLib;

export {
  pdfjs,
  Document,
  Outline,
  Page,
};
