import React from 'react';
import Image from '../images';
import search from "../../assets/search-interface-symbol.svg"
import cart from "../../assets/bag.svg"
import menu from "../../assets/burger.svg"
class Manipulation extends React.Component{
    render(){
        return(
            <div className="planto-header-manipulationbuttons">
                <button><Image classObject="search-button" imagePath={search}/></button>
                <button><Image classObject="cart-button" imagePath={cart}/></button>
                <button><Image classObject="menu-button" imagePath={menu}/></button>
            </div>
        )
    }

}

export default Manipulation;