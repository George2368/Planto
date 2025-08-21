import React from 'react';
import Image from '../images';
import polygon from "../../assets/PolygonDown.svg"
class HeaderNav extends React.Component{
    render(){
        return(
            <div className="planto-header-navigaton">
                <button>Home</button>
                <button>Plants Type <Image classObject="plants-type-button" imagePath={polygon}/></button>
                <button>More</button>
                <button>Contact</button>
            </div>
        )
    }   

}

export default HeaderNav;