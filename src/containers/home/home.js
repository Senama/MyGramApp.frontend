import React, {Component} from 'react';
// import { Card, Button, CardHeader, CardBody, CardText, Input, Container } from 'reactstrap';
import './home.css';
import {Link} from 'react-router-dom';
// import AuthContext from '../contexts/auth';






class Home extends Component{

state = {

}


render() {
  return ( 
            <>
        
            <div><h1>Home</h1>
          <Link to='/login'> login</Link>
          <Link to ='/logout'>logout</Link>
          <Link to='/createpost'>createpost</Link>
          <Link to='/userprofile'>userprofile</Link>
          </div>
         
            </>
    
 

        
  )
  
  }}

export default Home;