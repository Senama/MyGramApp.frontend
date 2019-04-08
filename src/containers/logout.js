import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';





class Logout extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }


    loggedOut = () => {
      firebase.auth().signOut() 
    }

render() {
  return (
        <div>
            <Link to = '/login'>
            <img className ='style' src={require('../Logoutbutton.png')} alt='' onClick = {this.loggedOut}></img>
            </Link>
                
        </div>
  )
  
}
}

export default Logout;