import React from "react";
import shopBagImg from "../../../assets/bag.svg"
import cardBackground from "../../../assets/cardborder.svg"

class TopSellCard extends React.Component{
     render(){
        return(
                    <div className="planto-body-topSell-card">
                        <img className="planto-body-topSell-card-background" src={cardBackground}/>
                        {console.log(this.props.card.img)}
                        <img className="planto-body-topSell-card-image planto-images-shadow" src={"./img/" + this.props.card.img}/>
                        <div className="planto-card-content-container">
                            <h3 className="planto-card-name">{this.props.card.name}</h3>
                            <p className="planto-card-desc">{this.props.card.desc}</p>
                            <div className="planto-card-manipulation">
                                 <div className="planto-price-container">Rs. {this.props.card.price}/-</div>
                                 <button className="planto-buy-button"><img src={shopBagImg}/></button>
                            </div>
                        </div>

                    </div>
                  
         
        )
            
    }
}

export default TopSellCard;