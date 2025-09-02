import React from "react";
import TopSell from "./maincontentcomponents/topsSell";
import HTitle from "./hTitle";
import ReviewsContainer from "./maincontentcomponents/reviews";
import Best from "./maincontentcomponents/best";
class MainContent extends React.Component{
     render(){
        return(
                <div className="planto-body-main-content-container">
                  <TopSell itemsCards={this.props.itemsCards} />
                  <ReviewsContainer reviews={this.props.reviews} />
                  <Best itemsCards={this.props.itemsCards} />
                </div>
        )
            
    }
}

export default MainContent;