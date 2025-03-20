
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import "../../App.css"

function PdfComp (props) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div style={{padding:"50px", backgroundColor:"grey", marginTop:"50px"}}>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={`./public/Consultantdetails/${props.fileName}`} onLoadSuccess={onDocumentLoadSuccess}>
        {
          Array.apply(null,Array(numPages))
          .map((x,i)=>i+1)
          .map((page)=>{
            return(
              <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
            )
          })
        }
      </Document>
    </div>
  );
}

export default PdfComp;
