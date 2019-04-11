import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';


//  PAGES
import Home from './containers/home/home';
import Signup from './containers/signup/signup';
import Login from './containers/login/login';
import Logout from './containers/logout';




//  CONTEXTS

import AuthContext from './contexts/auth';
import Following from './containers/follows/following';
import Followers from './containers/follows/followers';
import Createpost from './containers/createpost/createpost';
import UserProfile from './containers/userprofile/userprofile';
import Newsfeed from './containers/newsfeed/newsfeed';
import Viewpost from './containers/viewpost/viewpost';
import Notifications from './containers/notifications/notifications';





class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user }, () => console.log('logged in'));
            }
            else {
                this.setState({ user: null }, () => console.log('not logged in'))
            }
        })
    }


    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {

        return (
            <HashRouter>
                <AuthContext.Provider value={this.state.user}>
                    {/* <Route path='/' component={ Header }/> */}
                    <div className='container mt-5'>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/signup' exact component={Signup} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/logout' exact component={Logout} />
                            <Route path='/userprofile' exact component={UserProfile} />
                            <Route path='/newsfeed' exact component={Newsfeed} />
                            <Route path='/createpost' exact component={Createpost} />
                            <Route path='/viewpost' exact component={Viewpost} />
                            <Route path='/notifications' exact component={Notifications} />
                            <Route path='/following' exact component={Following} />
                            <Route path='/followers' exact component={Followers} />

                        </Switch>
                    </div>
                </AuthContext.Provider>
            </HashRouter>


        )
    }
}

export default App;