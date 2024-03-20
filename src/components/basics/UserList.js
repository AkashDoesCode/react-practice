import React, { Component } from 'react'
import Person from './Person';

class UserList extends Component {
    constructor()
    {
        super();
    }

    users=["Akash","Ram","shyam"];
    //newUser=this.users.map((user,index)=> <h1></h1>)


  render() {
    return (
      <div>
        {this.users.map((user,index) => <Person key={index} name={user}/>)}
      </div>
    )
  }
}

export default UserList