import React, {Component} from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Input, Container } from 'reactstrap';
import '../signup/signup.css';





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
            <CardHeader>
            <img className ='style' src={require('../../Mylogo.png')} alt=''></img></CardHeader>
            <CardBody>
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