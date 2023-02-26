import { React, useState } from 'react';
import '../App.scss';
import { Document, pdfjs, Page } from 'react-pdf';
import assignmentOne from '../assignments/assn1.pdf'
import assignmentOneSlides from '../assignments/Assignment1Slides.pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Assignments() {
  const [numPages, useNumberPages] = useState(null);
  const OnDocumentLoadSuccess = ({ numPages }, useNumberPages) => {
    useNumberPages(numPages);
  };
    return (
      <div className="Assignments">
      <div className='bg-1'>
      <header className="App-header">
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        </header>
        <body className="App-main">
          <div className="Section-Container">
            <div className='Assignment-Container'>
              <div className='Assignment'>
                <h4>Assignment 1 - Conceptual Architecture Report</h4>
                <a className='button'href={assignmentOne} target="_blank" rel="noreferrer">Download</a>
                <h4>Slides & Video</h4>
                <a className='button'href={assignmentOneSlides} target="_blank" rel="noreferrer">Download</a>
              </div>
              <div className='Assignment'>
                <h4>Assignment 2 - Concrete Architecture Report</h4>
                <p>Not yet available.</p>
              </div>
              <div className='Assignment'>
                <h4>Assignment 3 - Proposal for Enhancement Report</h4>
                <p>Not yet available.</p>
              </div>
            </div>
          </div>
        </body>
        <footer>
        <div className='bg'>
      </div>
          <div className="Section-Container">
            <p className="Section">
              contact us
            </p>
          </div>
        </footer>
      
      </div>
      </div>
    )
}

export default Assignments;