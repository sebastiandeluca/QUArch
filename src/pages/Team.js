import React from 'react';
import '../App.scss';
import sebphoto from '../img/sebteam.jpg';
import aidanphoto from '../img/aidanteam.png';
import nophoto from '../img/nopfp.png';

function Team() {
  return (
    <div className="Team">
    <div className='bg-1'>
    <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </header>
      <body className="App-main">
        <p className='Title' style={{ zIndex: 'inherit'}}>The Team</p>
        <div className="Section-Container">
            <div className='Obj-Container' id='team-container'>
              <img src={sebphoto} alt='Team Member' id='team-photo'></img>
              <p className='Team-Member'>Seb Deluca</p>
            </div><br></br>
            <div className='Obj-Container' id='team-container'>
            <img src={nophoto} alt='Team Member' id='team-photo'></img>
              <p className='Team-Member'>Robbie Huang</p>
            </div><br></br>
            <div className='Obj-Container' id='team-container'>
            <img src={nophoto} alt='Team Member' id='team-photo'></img>
              <p className='Team-Member'>Ethan Kim</p>
            </div><br></br>
            <div className='Obj-Container' id='team-container'>
              <img src={aidanphoto} alt='Team Member' id='team-photo'></img>
              <p className='Team-Member'>Aidan Leyne</p>
            </div><br></br>
            <div className='Obj-Container' id='team-container'>
            <img src={nophoto} alt='Team Member' id='team-photo'></img>
              <p className='Team-Member'>Sean Liang</p>
            </div><br></br>
            <div className='Obj-Container' id='team-container'>
              <img src={nophoto} alt='Team Member' id='team-photo'></img>
              <p className='Team-Member'>Artie LoMonaco</p>
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

export default Team;