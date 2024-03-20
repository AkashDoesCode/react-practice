import React from "react";

// const hello=(props)=>{
//     return <h1>Hello {props.name}</h1>
// }
const hello=(props)=>{
return React.createElement(
    'div',
    {id:"tag",className:"myclass"},
    React.createElement(
        "h1",
        {id:"new"},
        props.name
    ),
    props.children
    );
}


export default hello;