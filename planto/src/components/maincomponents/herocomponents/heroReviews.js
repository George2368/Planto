import React from "react";
import Image from "../../images";
import Alena_Patel from "../../../assets/reviews/unsplash_3TLl_97HNJo.png"
import stars from "../../../assets/reviews/stars.svg"
import Border from "../boder";
class HeroReviews extends React.Component{
     render(){
        return(
                <div className="planto-body-hero-reviews planto-body-glass-container">
                 <Border svgwidth="99%" svgheight="95%" elementRadius="45"/>
                    <div className="planto-reviews-profile">
                        <Image classObject="planto-reviews-profile-img" imagePath={Alena_Patel}/>
                        <div className="planto-reviews-profile-info">
                            <span className="planto-reviews-profile-info-name">Alena Patel</span>
                            <div className="planto-reviews-profile-info-stars"><Image imagePath={stars}/></div>
                        </div>
                    </div>
                    <div className="planto-review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</div>
                </div>
        )
            
    }
}

export default HeroReviews;