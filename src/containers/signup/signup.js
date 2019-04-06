import React, {Component} from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Input, Container } from 'reactstrap';
import '../signup/signup.css';
import {Link} from 'react-router-dom';





class Login extends Component{
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }
render() {
  return (
        <div>
          <Container>
            <div className='col-4'>
          <Card>
            <CardHeader style={{backgroundColor: '#ffe599'}}>
            <Link to = '/login'>
            <img className ='style' src={require('../../Mylogo.png')} alt=''></img>
            </Link>
            </CardHeader>
            <CardBody>
              <div className = 'title text-center'>
                <h2>Signup Page</h2>
              </div>
              <div className='inputtext mb-2'>
                <CardText className ='mt-5'><Input placeholder="Username" /></CardText>
                <CardText className ='mt-5'><Input placeholder="Password" /></CardText>
              </div>
              <br />
              <br />
              <div className='buttons text-center mb-5'>
                
                <Button color="danger" size="lg">Signup</Button>
              </div>
            </CardBody>
          </Card>
          </div>
          </Container>
        </div>
  )
  
}
}

export default Login;