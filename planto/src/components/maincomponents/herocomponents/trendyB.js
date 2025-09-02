import React from "react";
import TrendyBforms from "./trendyBform";
import PlatOne from "../../../assets/plants/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png"
import PlantTwo from "../../../assets/plants/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png"
import HTitle from "../hTitle";

class TrendyB extends React.Component{
     render(){
        return(
                <div className="planto-body-hero-trendyB">
                  <HTitle h="Our Trendy plants"/>
                   <TrendyBforms plantName="For Small Decs Ai Plat" plantInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" plantPrice={599} plantImage={PlatOne}/>
                   <TrendyBforms plantName="For Fresh Decs Ai Plat" plantInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" plantPrice={579} plantImage={PlantTwo}/>
                </div>
        )
           
    }
   }
export default TrendyB