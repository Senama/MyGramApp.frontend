import React, {Component}from 'react';
import '../searchbar/search.css';
import AuthContext from '../../contexts/auth';
import users from '../../userlist.json';


const getUsers = input => {
    // console.log(users, searchTerm)
    const searchedUsers = users.filter(user => {
        return user.email.indexOf(input) > -1;
    })

    return searchedUsers;
}

class Search extends Component { 
    constructor(props){

        super(props)
        this.state = {
        input: '',
        searchItems: [],
    }
 
}
  


onInputChange = e => {
    // const {searchTerm}=this.state
    // searchTerm.toLowerCase()
    this.setState({input: e.target.value})
    //do same thing when i get data from array
}

handleSearch = e => {
    console.log('this is clicked')
    const input = this.state.input;
    this.setState({input: ''})
    const searchList = getUsers(input)
    this.setState({
        searchItems: searchList,
    })
}


render(){
    const searchHandler = this.props.searchHandler || this.handleSearch
    const {input,searchItems}=this.state;
    return(
        <AuthContext.Consumer>
        {
            (user)=>{
            if(user){
                return(<>
            <form onSubmit={e => e.preventDefault()}>
                <input className="box" type="search" id="search" placeholder="Search..." onChange={this.onInputChange} value={this.state.input} />
                <input className='searchButton' type='submit' value='Search' onClick={searchHandler} />
            </form>
            {this.state.searchItems.map(user => {
                return ( <div className="container border black">
                    <div className="row .d-flex">
                    <img src={user.avatar} alt="..." className="rounded-circle" height="100" width="200" />
                    <div className="mx-auto mb-3">
                    <p> 
                        <span className="col name"> {user.email}</span>
                    </p>
                    </div>
                    </div>
                </div>)
            })}
                </>)
            }

         else {
            return <h2>You are not logged in.</h2>
        }
     }
    }

    </AuthContext.Consumer>
)

}
}
export default Search;
