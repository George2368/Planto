import React from "react";

class Border extends React.Component{
    render(){
        return(
               <div className='planto-body-border'>
                        <svg id="border" width="101%" height="104%" xmlns="http://www.w3.org/2000/svg">
                     <defs>
                       <linearGradient  id="radialStroke" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                         <stop offset="0%" stopColor="rgba(255, 255, 255, 0.41)"/>
                         <stop offset="0%" stopColor="rgba(255, 255, 255, 0.34)"/>
                         <stop offset="56%" stopColor="rgba(255, 255, 255, 0.01)"/>
                         <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)"/>
                       </linearGradient>
                     </defs>
  
                    <rect x="2" y="2" width={this.props.svgwidth} height={this.props.svgheight} rx={this.props.elementRadius}
                        fill="none" 
                        stroke="url(#radialStroke)" 
                        strokeWidth={this.props.ws}/>
                    </svg>
                    </div>
        )
    }
}

export default Border;