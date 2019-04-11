import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Container, Button } from 'reactstrap';
import '../follows/following.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase';





class Following extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: null,
      image: null,
      upload: null
    }
  }
  handleImage = () => {
    //   console.log('clickedimg', e.target.files[0])
    if (this.state.image === null) {
      return <></>
    }
    else {
      const firstFile = this.state.image

      const root = firebase.storage().ref();
      const newImage = root.child(firstFile.name);

      newImage.put(firstFile)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(url => {
          console.log(url)
          localStorage.setItem('myImage', url)
        })
        .catch(error => {
          console.log(error);
        })
    }

  }


  handlePreview = (e) => {
    if (!e.target.files[0]) {
      return <></>
    }
    this.setState({
      preview: URL.createObjectURL(e.target.files[0]),
      image: e.target.files[0]
    })
  }
  ImagePreview = () => {
    if (this.state.preview === null) {
      return (<>
        <img alt='' className='imgBox img-fluid' src='https://imgplaceholder.com/100x100/cccccc/757575/fa-file-photo-o'></img>

      </>)
    }
    else {
      return (<>
        <img alt='' className='imgBox img-fluid' src={this.state.preview}></img>
      </>)
    }
  }

  componentDidMount() {
    console.log('localStorage', localStorage.myImage)
    if (!localStorage.myImage) {
      localStorage.setItem('myImage', JSON.stringify({ myImage: 'https://d.ibtimes.co.uk/en/full/1594154/cristiano-ronaldo.jpg' }))
    }
    else {
      let img = localStorage.getItem('myImage')

      const posts = JSON.parse(img);

      this.setState({ preview: posts.myImage })
    }
  }





  render() {
    let img = ''
    if (this.state.upload !== null) {
      img = <img src={this.state.preview} alt='' />
    }
    return (
      <div>
        <Container>
          <div className='mx-auto d-block' style={{ 'maxWidth': '350px' }}>
            <Card>
              <CardHeader style={{ backgroundColor: '#ffe599' }}>
                <Link to='/login'>
                  <img className='style' src={require('../../assets/Mylogo.png')} alt=''></img>
                </Link>
                <Link to='/createpost' >
                  {/* <img style={{ 'float': 'right' }} className='style' src={require('../../Createpostbutton.png')} alt='' onClick={this.createpost}></img> */}
                </Link>
              </CardHeader>
              <CardBody>
                <div>
                  <form>
                    <div className='custom-file img-fluid myFile3 '>
                      <input type='file' className='custom-file-input imgBox' onChange={this.handlePreview} />
                      <this.ImagePreview />
                    </div>
                  </form>
                  <Button onClick={this.handleImage} color='danger' size='sm'>POST</Button>

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

export default Following;