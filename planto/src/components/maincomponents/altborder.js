import React from "react";


class AltBorder extends React.Component{
    render(){
        return(
           <img className="planto-alt-border" src={this.props.border}/>
        )
    }
}

export default AltBorder;