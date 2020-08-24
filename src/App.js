import React from "react";
import "./App.css";

import { pdf, Document, Page } from "@react-pdf/renderer";

const downloadPdf = () => {
  return pdf(PDFSample())
    .toBlob()
    .then((blob) => {
      const fileName = "test.pdf";

      const file = new File([blob], fileName, { type: "application/pdf" });

      const reader = new FileReader();
      reader.onloadend = () => {
        const a = window.document.createElement("a");

        a.href = reader.result;

        a.style.display = "none";
        a.download = fileName;

        window.document.body.appendChild(a);
        a.click();
        a.parentNode.removeChild(a);
      };

      reader.readAsDataURL(file);
    });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button id="pdf-download-button" onClick={() => downloadPdf()}>
          Test PDF Download
        </button>
      </header>
    </div>
  );
}

const PDFSample = () => {
  return (
    <Document>
      <Page size="A4"></Page>
    </Document>
  );
};

export default App;
