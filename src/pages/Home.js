import React from 'react';
import '../App.scss';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
      <div className='bg'>
        <div className='shapes'>
        
      </div>
      <header className="App-header">
          
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        </header>
        <body className="App-main">
          <h1 className="Title">QUArch</h1>
          <div className="Section-Container">
            <p className='Section'><Link style={{ color: 'black'}}to="/team">Team</Link></p>
            <p className='Section'><Link style={{ color: 'black'}}to="/assignments">Assignments</Link></p>
            <p className='Section'><Link style={{ color: 'black'}}to="/more">More</Link></p>
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

export default Home;