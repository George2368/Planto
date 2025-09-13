import React from "react";
import HeroTitile from "./herocomponents/heroTitle";
import HeroReviews from "./herocomponents/heroReviews";
import TrendyS from "./herocomponents/trendyS";
import TrendyB from "./herocomponents/trendyB";
import CalathelaPlant from "../../assets/plants/Calathea.png";

class Hero extends React.Component{
        constructor(props) {
    super(props);
    this.state = {windowSize: window.innerWidth };
    this.handleResize = this.handleResize.bind(this);
     this.revIteration = this.revIteration.bind(this);
  }
 
    revCOUNT = 0;
    step = this.props.reviews.length;
    componentDidMount() {
    window.addEventListener('resize', this.handleResize); // Добавляем слушатель события
  }
    handleResize() {
    this.setState({ windowSize: window.innerWidth }); // Обновляем состояние при изменении ширины
    this.revCOUNT = 0;
    this.step = 1;
  }
     render(){
        return(
                <div className="planto-body-hero">
                    <HeroTitile />
                    <div className="planto-hero-review-cover">
                         { this.props.reviews.map(rew =>(
                                    this.revIteration(rew, this.state.windowSize)
                                ))}
                    </div>
                    <TrendyB />
                    <TrendyS plantImage={CalathelaPlant} plantName="Calathea plant"/>
                </div>
        )
           
    }
        revIteration(rew, windowsize){
        this.sizecheck(windowsize);
        if (this.revCOUNT < this.step){
            this.revCOUNT++;
            return(<HeroReviews key={rew.id} rewCard={rew}/>)
        }
        if (this.revCOUNT == this.props.reviews.length){
            this.revCOUNT = 0;
        }
                                
    }
    sizecheck(windowsize){
        if(windowsize <= 780 ){
            this.step = 1;
        }
        if(windowsize <= 849 && windowsize > 780){
            this.step = 2;
        }
        if(windowsize > 849){
            this.step = 1;
        }   
    }
}

export default Hero;