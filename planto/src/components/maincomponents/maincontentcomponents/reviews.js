import React from "react";
import HTitle from "../hTitle";
import Review from "./review";
class ReviewsContainer extends React.Component{
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
    this.step = this.props.reviews.length;
  }
     render(){
         
        return(
                    <div className="planto-body-topSell">
                        <HTitle h="Customer Review"/>
                        <div className="planto-body-rew-cards-cotainer">
                            { this.props.reviews.map(rew =>(
                                    this.revIteration(rew, this.state.windowSize)
                                ))}
                        </div>
                    </div>
                  
         
        )
            
    }
    
    revIteration(rew, windowsize){
        this.sizecheck(windowsize);
        if (this.revCOUNT < this.step  && this.revCOUNT != 0){
            this.revCOUNT++;
            return(<Review key={rew.id} rewCard={rew}/>)
        }
        else{
            this.revCOUNT++
            if(this.revCOUNT>=this.step){
                this.revCOUNT=0;
            }
        }
                                
    }
    sizecheck(windowsize){
         if(windowsize <= 780){
            this.step = 2;
        }
        if(windowsize <= 1000 && windowsize > 780){
            this.step = 3;
        }
        if(windowsize <= 1250 && windowsize > 1000){
            this.step = 3;
        }
        if(windowsize > 1250){
            this.step = 4;
        }   
    }
}

export default ReviewsContainer;