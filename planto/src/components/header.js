import React from 'react';
import Logotype from "./headercomponents/logoPlanto";
import HeaderNav from "./headercomponents/navigation";
import Manipulation from "./headercomponents/manipulation";
import '../css/Header.css'
import Border from './maincomponents/boder';

class Header extends React.Component{
           constructor(props) {
          super(props);
            this.state = {
            headerBackground: null
        };
          this.setHeaderRef = (element) => {
            this.setState({ headerBackground: element });
        };
        }
    render(){
        return(
            <header ref={this.setHeaderRef} className="planto-header planto-header-noScroll">
                <Border svgwidth="99%" svgheight="94.5%" elementRadius="20" ws={2}/>
                <Logotype logoname="Planto." />
                <HeaderNav scrollHome={this.state.headerBackground}/>
                <Manipulation onClickFunc={this.props.onClickModalFunc}/>
            </header>
        )
    }
     componentDidMount(){
        
         window.addEventListener('scroll', ()=>{
            this.headercover(this.state.headerBackground)
         });
    }


    headercover(headerEl){
    const scrollThreshold = 50; // Высота скролла в пикселях, при достижении которой изменится фон
    if (window.scrollY > scrollThreshold) {
         headerEl.classList.remove('planto-header-noScroll');
        headerEl.classList.add('planto-scrolled-header-background');
    } 
    else {
        headerEl.classList.remove('planto-scrolled-header-background');
        headerEl.classList.add('planto-header-noScroll');
    }

    }

}

export default Header;