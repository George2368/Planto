import React from "react";
import shopBagImg from "../../../assets/shopbag.svg"
import Border from "../boder";

class TrendyBforms extends React.Component{
    constructor(props) {
          super(props);
          this.PlantoImage = React.createRef();
          this.PlantoBackground = React.createRef()
    }
    render(){
        return(
                <div className="planto-body-hero-trendyB-container" ref={this.PlantoBackground}>
                    <Border svgwidth="99.2%" svgheight="95.6%" elementRadius="151"/>
                  <img ref={this.PlantoImage} className="planto-plant-img planto-images-shadow" src={this.props.plantImage}></img>
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

        componentDidMount(){
         this.elResize(this.PlantoImage.current, 0.4521309450277949)
         this.elResize(this.PlantoBackground.current, 0.3248919085855466)
         window.addEventListener('resize', ()=>{
            this.elResize(this.PlantoBackground.current, 0.3248919085855466)
            this.elResize(this.PlantoImage.current, 0.4521309450277949)
         });
    }

    elResize(image, size){
       let objecrParentImage = image.parentNode.offsetWidth;
       image.style.height = `${objecrParentImage * size}px`;
    }
}

export default TrendyBforms