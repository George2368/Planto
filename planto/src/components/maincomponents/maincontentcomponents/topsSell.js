import React from "react";
import HTitle from "../hTitle";
import TopSellCard from "./topsellCards";

class TopSell extends React.Component{
     render(){
        return(
                    <div className="planto-body-topSell">
                        <HTitle h="Our Top Selling"/>
                        <div className="planto-body-topSell-cards-cotainer">
                            {
                                this.props.itemsCards.map(item =>(
                                     <TopSellCard key={item.id} card={item}/>
                                ))
                            }
                        </div>
                    </div>
                  
         
        )
            
    }
}

export default TopSell;