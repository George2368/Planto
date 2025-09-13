import React from "react";
import Image from "../../images";
import star from "../../../assets/Star 1.svg"
import Border from "../boder";
import starpol from "../../../assets/star05.svg";
class HeroReviews extends React.Component{
        constructor(props) {
    super(props);

  }
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
                <div className="planto-body-hero-reviews planto-body-glass-container">
                 <Border svgwidth="99%" svgheight="95%" elementRadius="45"/>
                    <div className="planto-reviews-profile">
                        <Image classObject="planto-reviews-profile-img planto-profile-shadow" imagePath={"./img/profilesRev/" + this.props.rewCard.profile}/>
                        <div className="planto-reviews-profile-info">
                            <span className="planto-reviews-profile-info-name">{this.props.rewCard.name}</span>
                            <div className="planto-reviews-profile-info-stars">{stars}</div>
                        </div>
                    </div>
                    <div className="planto-review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</div>
                </div>
        )
            
    }

}

export default HeroReviews;