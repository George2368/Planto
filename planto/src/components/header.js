import React from 'react';
import Logotype from "./headercomponents/logoPlanto";
import HeaderNav from "./headercomponents/navigation";
import Manipulation from "./headercomponents/manipulation";
import '../css/Header.css'

class Header extends React.Component{
           constructor(props) {
          super(props);
          this.headerBackground = React.createRef();
    
        }
    render(){
        return(
            <header ref={this.headerBackground} className="planto-header">
                <Logotype logoname="Planto." />
                <HeaderNav />
                <Manipulation />
            </header>
        )
    }
     componentDidMount(){
         window.addEventListener('scroll', ()=>{
            this.headercover(this.headerBackground.current)
         });
    }


    headercover(headerEl){
    const scrollThreshold = 50; // Высота скролла в пикселях, при достижении которой изменится фон
    if (window.scrollY > scrollThreshold) {
        headerEl.classList.add('planto-scrolled-header-background');
    } 
    else {
        headerEl.classList.remove('planto-scrolled-header-background');
    }

    }

}

export default Header;