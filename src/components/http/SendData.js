import React, { Component } from 'react'
import axios from 'axios'

class SendData extends Component {
    constructor(props){
        super(props);
        this.state={
            userid : '',
            title : '',
            body : ''
        }
    }

    clickHandler=e =>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response => {console.log(response)})
        .catch(err=> {console.log(err)})
    }
    saveData=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }

  render() {
    const {userid, title, body}=this.state;
    return (
        <div>
            <form onSubmit={this.clickHandler}>
            <div>
                <input type='text' name="userid" value={userid} onChange={this.saveData}/>
            </div>
            <div>
                <input type='text' name="title" value={title} onChange={this.saveData}/>
            </div>
            <div>
                <input type='text' name="body" value={body} onChange={this.saveData}/>
            </div>
            <input type="submit" value="submit"/>
        </form>
        </div>
    )
  }
}

export default SendData