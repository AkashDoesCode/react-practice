import React, {Component} from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            count : 0
        }
    }

    increase(){
        this.setState({count : ++this.state.count});
    }

    decrease(){
        this.setState({count : --this.state.count});
    }


    render(){
        return(
            <div>
                <h1>Counter :  {this.state.count}</h1>
                <button onClick={()=>this.increase()}>+</button>
                <button onClick={()=>this.decrease()}>-</button>
            </div>
        )
    }
}

export default Counter;