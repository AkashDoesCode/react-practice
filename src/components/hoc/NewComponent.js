import React from 'react'


const EnhancedComponent= (OriginalComponent, counterValue)=>{
    
    class NewComponent extends React.Component {
        constructor(props){
            super(props);
            this.state={count: 0};
        }
    
        handler=()=>{
            this.setState({count : this.state.count+counterValue})
        }


      render() {
        return (
          <OriginalComponent count={this.state.count} handler={this.handler} />
        )
      }
    }
    return NewComponent
   
}
export default EnhancedComponent