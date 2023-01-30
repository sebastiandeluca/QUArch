import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Sticky from 'react-stickynode';


function Navbar() {
  return ( 
    <Sticky enabled={true}  bottomBoundary={1200}>
    <div className='nav' style={{ zIndex: '2'}}>
     
      <ul>
        <li>
          <Link  to="/" className='navObj'>Home</Link>
        </li>
        <li>
          <Link className='navObj'to="/team">Team</Link>
        </li>
        <li>
          <Link className='navObj' to="/assignments">Assignments</Link>
        </li>
        <li>
          <Link className='navObj' to="/more">More</Link>
        </li>
      </ul>
      
    </div></Sticky>
  );
}

export default Navbar;
