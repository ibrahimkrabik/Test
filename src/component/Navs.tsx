import React from 'react'

import { Link } from 'react-router-dom';

function Navs() {
  return (
  
<nav className="navbar navbar-expand-lg bg-primary fs-5 text">
  <div className="container-fluid">
    <Link className="navbar-brand  text-light fs-3" to="/home">Social</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/posts">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/fav">Fav</Link>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
      );
    
    
   
  
}

export default Navs