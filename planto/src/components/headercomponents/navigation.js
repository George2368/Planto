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
                {console.log(this.props.scrollHome)}
                <button onClick={this.scrollFunc(scrollHome)}>Home</button>
                <button onClick={this.scrollFunc(document.querySelector('.planto-body-hero-trendyB_h2'))}>Plants Type <Image classObject="plants-type-button" imagePath={polygon}/></button>
                <button onClick={this.scrollFunc(scrollHome)}>More</button>
                <button onClick={this.scrollFunc(scrollHome)}>Contact</button>
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