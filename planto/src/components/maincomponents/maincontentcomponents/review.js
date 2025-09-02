import React from "react";
import ReviewBackground from "../../../assets/Rectangle 7.svg";
class Review extends React.Component{
     render(){
        return(
                    <div className="planto-body-review">
                       <img className="planto-rew-background" src={ReviewBackground}/>
                       <div className="planto-rev-profile-info-container">
                        <img className="planto-profile-shadow" src={"./img/profilesRev/" + this.props.rewCard.profile}/>
                        <div className="planto-rev-profile-info">
                            <span className="planto-rev-profile-name">{this.props.rewCard.name}</span>
                            <img src="/static/media/stars.73da27c4c708745028ad8a21af958599.svg"></img>
                        </div>
                       </div>
                       <div className="planto-review-text">
                       {this.props.rewCard.text}
                       </div>
                    </div>
                  
         
        )
            
    }
}

export default Review;