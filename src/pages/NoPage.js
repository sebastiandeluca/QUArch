import React from 'react';
import '../App.scss';

function NoPage() {
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
  Page Not Found.
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

export default NoPage;