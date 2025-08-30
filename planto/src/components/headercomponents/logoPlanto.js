import React from 'react';
import Image from "../images"
import logo from "../../assets/planto.svg"

function Logotype(props) {
return(
    <div className="logo-container">
        <Image classObject='logo' imagePath={logo} />
        <span className='logo-name' translate="no">{props.logoname}</span>
    </div>
)
}

export default Logotype