import React from "react";
import shopBagImg from "../../../assets/shopbag.svg"
import Border from "../boder";

class TrendyBforms extends React.Component{
    render(){
        return(
                <div className="planto-body-hero-trendyB-container">
                    <Border svgwidth="99.2%" svgheight="95.6%" elementRadius="151"/>
                  <img className="planto-plant-img" src={this.props.plantImage}></img>
                   <div className="planto-body-hero-trendyB-info">
                    <h3>{this.props.plantName}</h3>
                    <p>{this.props.plantInfo}</p>
                    <div className="planto-price-container">Rs. {this.props.plantPrice}/-</div>
                    <div className="planto-body-hero-trendyB-buttons-container">
                        <button className="explore-button">Explore</button>
                        <button className="planto-buy-button"><img src={shopBagImg}/></button>
                    </div>
                   </div>
                </div>
        )
           
    }
}

export default TrendyBforms