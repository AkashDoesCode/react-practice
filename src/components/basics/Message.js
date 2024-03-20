import React, {Component} from "react";


class Message extends Component{

    constructor(){
        super();
        this.state={
            message:"Hi visitor"
        }
    }

    setMessage(){
        console.log(this.state);
        this.setState({message:"Hi Akash"});
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.setMessage()}>Update</button>
            </div>
        )
    }
}

export default Message;