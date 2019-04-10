import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Container } from 'reactstrap';
import '../userprofile/userprofile.css';
import { Link } from 'react-router-dom';





class Userprofile extends Component {
  constructor(props) {
      super(props)
      this.state = {
          preview: null,
          image: null,
          upload:null
      }
  }
  
   
      componentDidMount() {
        console.log('localStorage', localStorage.myImage)
        if(!localStorage.myImage){
          localStorage.setItem('myImage', JSON.stringify({myImage:'https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2011/09/15/159751-cristiano-ronaldo-of-real-madrid-eyes-the-ball-during-their-champions-.jpg'}))
        }
        else{
          let img = localStorage.getItem('myImage')
          const posts = JSON.parse(img);
          this.setState({upload: posts})
        }  
    }
  


  
  
  render() {
    let img = ''
    if(this.state.upload !== null){
       img = <img src={this.state.upload.myImage} />
    }
    return (
      <div>
        <Container>
        <div className='mx-auto d-block' style={{ 'maxWidth': '350px' }}>
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
                <div>
                  {img}

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

export default Userprofile;

