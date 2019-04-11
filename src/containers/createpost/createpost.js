import React, { Component } from 'react';
import { Card, Button, CardHeader, CardBody, Container } from 'reactstrap';
import '../createpost/createpost.css';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import AuthContext from '../../contexts/auth';








class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            preview: null,
            image: null,
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
                <img alt='preview' className='imgBox img-fluid' src='https://imgplaceholder.com/420x320/cccccc/757575/fa-file-photo-o'></img>

            </>)
        }
        else {
            return (<>
                <img alt='preview' className='imgBox img-fluid' src={this.state.preview}></img>
            </>)
        }

    }

    loggedOut = () => {
        firebase.auth().signOut()
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    render() {
        return (

            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <div>
                                    <>
                                        <div>
                                            <Container>
                                                <div className='mx-auto d-block' style={{ 'maxWidth': '350px' }}>
                                                    <Card>
                                                        <CardHeader style={{ backgroundColor: '#ffe599' }}>
                                                            <Link to='/login'>
                                                                <img className='style' src={require('../../assets/Mylogo.png')} alt=''></img>
                                                            </Link>
                                                            {/* <img style={{ 'float': 'right' }}  className='style' src={require('../../assets/Logoutbutton.png')} alt=''></img> */}
                                                            <Link to='/logout' >
                                                            </Link>

                                                        </CardHeader>
                                                        <CardBody>


                                                            <form>
                                                                <div className='custom-file img-fluid myFile mx-auto d-block'>
                                                                    <input type='file' className='custom-file-input imgBox' onChange={this.handlePreview} />
                                                                    <this.ImagePreview />
                                                                </div>
                                                            </form>

                                                            <form>
                                                                <div className='caption mx-auto mb-3' style={{ 'paddingTop': '30px' }}>
                                                                    <textarea className='caption' type='textarea' name='text' id='exampleText' Input placeholder='Caption...' onChange={this.handleChange} />
                                                                </div>
                                                            </form>

                                                            <div className='buttons text-center' style={{ 'paddingTop': '100px', 'paddingBottom': '30px' }}>
                                                                <Link to='/userprofile' >
                                                                    <Button onClick={this.handleImage} color='danger' size='lg'>POST</Button>
                                                                </Link>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </div>
                                            </Container>
                                        </div>
                                    </>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div>You are not logged In</div>
                            )




                        }
                    }
                }
            </AuthContext.Consumer>


        )

    }
}
export default CreatePost;