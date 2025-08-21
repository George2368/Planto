import React from 'react';
import Logotype from "./headercomponents/logoPlanto";
import HeaderNav from "./headercomponents/navigation";
import Manipulation from "./headercomponents/manipulation";
import '../css/Header.css'

class Header extends React.Component{
    render(){
        return(
            <header className="planto-header">
                <Logotype logoname="Planto." />
                <HeaderNav />
                <Manipulation />
            </header>
        )
    }

}

export default Header;