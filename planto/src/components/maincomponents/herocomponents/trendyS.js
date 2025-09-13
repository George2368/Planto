import React from "react";
import Image from "../../images";
import Arrow from "../../../assets/right-arrow 1.svg";
import AltBorder from "../altborder";
import ActiveDot from "../dot";
import borderImgAlt from "../../../assets/Rectangle 2.svg";
import borderImgAltSecond from "../../../assets/Rectangle 2alt.svg";

class TrendyS extends React.Component{
       constructor(props) {
    super(props);
    this.state = {borderImg: borderImgAlt};
    this.switchBorderImg = this.switchBorderImg.bind(this);
  }
  componentDidMount(){
    this.switchBorderImg()
    window.addEventListener("resize", this.switchBorderImg)
  }
  switchBorderImg(){
    if(window.innerWidth < 850){
            this.setState({borderImg: borderImgAltSecond})
    }
    else {
        this.setState({borderImg: borderImgAlt})
    }
  }
     render(){
        return(
                <div className="planto-body-hero-trendyS">
                   <AltBorder border={this.state.borderImg}/>
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
                        <ActiveDot/>
                    </div>
                </div>
        )
           
    }
}

export default TrendyS;