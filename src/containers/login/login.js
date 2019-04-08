import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Input, Container } from 'reactstrap';
import '../login/login.css';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import AuthContext from '../../contexts/auth';
import { Redirect } from 'react-router-dom';






class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((response) => {
        console.log('Returns: ', response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      })
  }

  render() {
    return (
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return (
                <Redirect to='/' />
              )
            } else {
              return (
                <>
                  <div>
                    <Container>
                      <div className='mx-auto d-block' style={{ 'maxWidth': '350px' }}>
                        <Card>
                          <CardHeader style={{ backgroundColor: '#ffe599' }}>
                            <img className='style' src={require('../../Mylogo.png')} alt=''></img></CardHeader>
                          <CardBody>
                            <div className='inputtext mb-2'>
                              <CardText className='mt-5'><Input placeholder="Username" type='email' onChange={this.handleChange} name='username' value={this.state.username} /></CardText>
                              <CardText className='mt-5'><Input placeholder="Password" type='password' onChange={this.handleChange} name='password' value={this.state.password} /></CardText>
                            </div>
                            <br />
                            <br />
                            <div className='buttons text-center mb-5'>
                              <Button onClick={this.handleSubmit} color="primary">Login</Button>
                              <br />
                              <br />
                              <Link to='/signup'>
                                <Button color="danger" size="lg">Signup</Button>
                              </Link>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Container>
                  </div>
                </>
              )
            }
          }
        }
      </AuthContext.Consumer>


    )

  }
}

export default Login;