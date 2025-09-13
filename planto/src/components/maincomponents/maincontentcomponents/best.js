import React from "react";
import HTitle from "../hTitle";
import Border from "../boder";
import arrow from "../../../assets/right-arrow 1.svg"
import ActiveDot from "../dot";
class Best extends React.Component{
     render(){
        return(
                    <div className="planto-body-topSell planto-body-best-component">
                        <HTitle h="Our Best o2"/>
                        <div className="planto-body-best-cotainer">
                            <Border svgwidth="99%" svgheight="96%" elementRadius="92" ws={2} />
                            <img className="planto-body-best-img planto-images-shadow" src={"./img/" + this.props.itemsCards[0].img}></img>
                            <div className="planto-body-best-content-container">
                                <h3 className="planto-body-best-content-title">We Have Small And Best O2 Plants Collection’s</h3>
                                <p className="planto-body-best-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <p className="planto-body-best-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="planto-body-best-manipulation">
                                    <button className="explore-button">Explore</button>
                                    <div className="planto-body-best-manipulation-rl">
                                        <button className="planto-body-best-manipulation-rl-buttons planto-body-best-manipulation-l"><img src={arrow}/></button>
                                        <div className="planto-body-best-manipulation-count"><span>01</span>/<span>04</span></div>
                                        <button className="planto-body-best-manipulation-rl-buttons planto-body-best-manipulation-r planto-body-best-manipulation-active"><img src={arrow}/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ActiveDot/>
                    </div>
                  
         
        )
            
    }
    
}

export default Best;