import React from "react";
import Border from "../boder";
import Image from "../../images";
import Arrow from "../../../assets/right-arrow 1.svg";
import AltBorder from "../altborder";
class TrendyS extends React.Component{
     render(){
        return(
                <div className="planto-body-hero-trendyS">
                   <AltBorder/>
                   <div className="planto-hero-trendyS-container">
                        <Image classObject="planto-trendyS-plant-img planto-images-shadow" imagePath={this.props.plantImage}/>
                        <div className="planto-hero-trendyS-container-cover">
                        <button className="planto-hero-trendyS-last planto-hero-trendyS-rl disactive"><img src={Arrow}/></button>
                            <div className="planto-hero-trendyS-container-info">    
                            <span className="planto-hero-trendyS-container-info-title">Trendy House Plant</span>
                            <h3 className="planto-hero-trendyS-container-info-name">{this.props.plantName}</h3>
                            <button className="explore-button">Buy Now</button>
                            </div>
                        <button className="planto-hero-trendyS-next planto-hero-trendyS-rl"><img src={Arrow}/></button>
                        </div>
                        <div className="planto-trendyS-now-indicator">
                            <div className="planto-trendyS-now-indicator-dot planto-trendyS-now-indicator-dot-active"></div>
                            <div className="planto-trendyS-now-indicator-dot"></div>
                            <div className="planto-trendyS-now-indicator-dot"></div>
                        </div>
                    </div>
                </div>
        )
           
    }
}

export default TrendyS;