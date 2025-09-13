import React from "react";

class ActiveDot extends React.Component{
     render(){
        return(
            <div className="planto-trendyS-now-indicator">
                <div className="planto-trendyS-now-indicator-dot planto-trendyS-now-indicator-dot-active"></div>
                <div className="planto-trendyS-now-indicator-dot"></div>
                <div className="planto-trendyS-now-indicator-dot"></div>
            </div>
        )
           
    }
}

export default ActiveDot;