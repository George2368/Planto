import React from "react";
import HTitle from "../hTitle";
import Review from "./review";
class ReviewsContainer extends React.Component{
    revCOUNT = 0;
     render(){
        return(
                    <div className="planto-body-topSell">
                        <HTitle h="Customer Review"/>
                        <div className="planto-body-rew-cards-cotainer">
                            { this.props.reviews.map(rew =>(
                                    this.revIteration(rew)
                                ))}
                        </div>
                    </div>
                  
         
        )
            
    }
    revIteration(rew){
        if (this.revCOUNT < 4 && this.revCOUNT != 0){
            this.revCOUNT++;
            return(  <Review key={rew.id} rewCard={rew}/>)
        }
        else{
            this.revCOUNT++
            if(this.revCOUNT>=4){
                this.revCOUNT=0;
            }
        }
                                
    }
}

export default ReviewsContainer;