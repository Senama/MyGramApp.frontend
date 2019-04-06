import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">LOGO</Link>
      <Link className="navbar-brand" to="login">Login</Link>
      
          <Link className="nav-link" to="/">Ho</Link>
        
        
    </nav>


  )
}



