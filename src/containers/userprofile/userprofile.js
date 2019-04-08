import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Container } from 'reactstrap';
import '../userprofile/userprofile.css';
import { Link } from 'react-router-dom';





class Login extends Component {

  fileUpload = (e) => {
    this.setState({
      preview: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    })
  }
  render() {
    return (
      <div>
        <Container>
          <div className='col-4'>
            <Card>
              <CardHeader style={{ backgroundColor: '#ffe599' }}>
                <Link to='/login'>
                  <img className='style' src={require('../../Mylogo.png')} alt=''></img>
                </Link>
                <Link to='/createpost' >
                  <img style={{ 'float': 'right' }} className='style' src={require('../../Createpostbutton.png')} alt='' onClick={this.createpost}></img>
                </Link>
              </CardHeader>
              <CardBody>
                <div className='inputtext mb-2'>

                </div>
                <br />
                <br />
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    )

  }
}

export default Login;