import React from "react";
import HeroTitile from "./herocomponents/heroTitle";
import HeroReviews from "./herocomponents/heroReviews";
import TrendyS from "./herocomponents/trendyS";
import TrendyB from "./herocomponents/trendyB";
import CalathelaPlant from "../../assets/plants/Calathea.png";

class Hero extends React.Component{
     render(){
        return(
                <div className="planto-body-hero">
                    <HeroTitile />
                    <HeroReviews />
                    <TrendyB />
                    <TrendyS plantImage={CalathelaPlant} plantName="Calathea plant"/>
                </div>
        )
           
    }
}

export default Hero;