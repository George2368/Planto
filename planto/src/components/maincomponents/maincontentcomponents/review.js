import React from "react";
import ReviewBackground from "../../../assets/Rectangle 7.svg";
import star from "../../../assets/Star 1.svg"
import starpol from "../../../assets/star05.svg";
import Image from "../.././images"
class Review extends React.Component{
     render(){
             let stars = [];
        for (let i= 0; i < this.props.rewCard.stars; i++) {
            if(i + 1 >= this.props.rewCard.stars && this.props.rewCard.stars * 10 % 2!=0){ 
                console.log(2)
                stars.push(<Image key={"star" + i + this.props.rewCard.id} imagePath={starpol}/>);
            }
            else{
                stars.push(<Image imagePath={star}/>);
            }
        }
        return(
                    <div className="planto-body-review">
                       <img className="planto-rew-background" src={ReviewBackground}/>
                       <div className="planto-rev-profile-info-container">
                        <img className="planto-profile-shadow" src={"./img/profilesRev/" + this.props.rewCard.profile}/>
                        <div className="planto-rev-profile-info">
                            <span className="planto-rev-profile-name">{this.props.rewCard.name}</span>
                             <div className="planto-reviews-profile-info-stars">{stars}</div>
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