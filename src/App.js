import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import firebase from './firebase';


//  PAGES
import Home from './containers/home';
import Signup from './containers/signup/signup';
import Login from './containers/login/login';
// import Logout from './containers/logout';

//  CONTEXTS

// import AuthContext from './contexts/auth';




class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }
    //     componentDidMount() {
    //         this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //             if (user) {
    //                 this.setState({ user });
    //             }
    //              else {
    //                 this.setState({ user: null })
    //             }
    //         })
    //     }
    
    
    //     componentWillUnmount () { 
    //         this.unsubscribe()
    // }

    render() {

        return (
            <HashRouter>
                {/* <AuthContext.Provider value ={this.state.user}> */}
                    {/* <Route path='/' component={ Header }/> */}
                    <div className='container mt-5'>
                        <Switch>
                            <Route path='/' exact component ={ Home } />
                            <Route path='/signup' exact component ={ Signup } />
                            <Route path='/login' exact component= { Login } />
                            {/* <Route path ='/logout' exact component={ Logout } /> */}
                        </Switch>
                    </div>
                {/* </AuthContext.Provider> */}
            </HashRouter>


        )
    }
}

export default App;