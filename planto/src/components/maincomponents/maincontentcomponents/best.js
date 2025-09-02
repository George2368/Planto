import React from "react";
import HTitle from "../hTitle";
import Border from "../boder";
import arrow from "../../../assets/right-arrow 1.svg"
class Best extends React.Component{
     render(){
        return(
                    <div className="planto-body-topSell">
                        <HTitle h="Our Best o2"/>
                        <div className="planto-body-best-cotainer">
                            <Border svgwidth="99%" svgheight="94.5%" elementRadius="92"/>
                            <img className="planto-body-best-img" src={"./img/" + this.props.itemsCards[0].img}></img>
                            <div className="planto-body-best-content-container">
                                <h3 className="planto-body-best-content-title">We Have Small And Best O2 Plants Collection’s</h3>
                                <p className="planto-body-best-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <p className="planto-body-best-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="planto-body-best-manipulation">
                                    <button className="explore-button">Explore</button>
                                    <div className="planto-body-best-manipulation-rl">
                                        <button className="planto-body-best-manipulation-rl-buttons planto-body-best-manipulation-l"><img src={arrow}/></button>
                                        <div className="planto-body-best-manipulation-count">01</div>
                                        <button className="planto-body-best-manipulation-rl-buttons planto-body-best-manipulation-r"><img src={arrow}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
         
        )
            
    }
    
}

export default Best;