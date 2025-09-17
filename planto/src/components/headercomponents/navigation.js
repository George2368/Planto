import React from 'react';
import Image from '../images';
import polygon from "../../assets/PolygonDown.svg"
class HeaderNav extends React.Component{
       constructor(props) {
             super(props);
             this.scrollFunc = this.scrollFunc.bind(this);
           }
    render(){
        const {scrollHome} = this.props;
        return(
            <div className="planto-header-navigaton">
                <button onClick={()=>this.scrollFunc(document.querySelector(".planto-body"))}>Home</button>
                <button onClick={()=>this.scrollFunc(document.querySelector('.planto-body-topSell'))}>Plants Type <Image classObject="plants-type-button" imagePath={polygon}/></button>
                <button onClick={()=>this.scrollFunc(document.querySelector(".planto-body-best-cotainer"))}>More</button>
                <button onClick={()=>this.scrollFunc(document.querySelector('.planto-footer'))}>Contact</button>
            </div>
        )   
    }   
    scrollFunc(scrollEl){
        if (scrollEl) {
             console.log(scrollEl)
        scrollEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        }

}

export default HeaderNav;