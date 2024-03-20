import React, { Component } from 'react'
import axios from 'axios'

 class GetData extends Component {
    constructor(props){
        super(props);
        this.state={posts: [], err : ""}
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response.data)
            this.setState({posts : response.data})
        }).catch(err=>{
            this.setState({err : "something went wrong"})
        })
    }
  render() {
    const {posts, err}=this.state;
    return (
      <div>
        List
        {
            posts.length ?
            posts.map(post=> <div key={post.id}>{post.title}</div>):null
        }
        {
            err?
            <div>{err}</div>:null
        }
      </div>
    )
  }
}

export default GetData