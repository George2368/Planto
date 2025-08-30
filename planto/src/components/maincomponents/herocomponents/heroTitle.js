import React from 'react';
import Image from "../../images";
import playIcon from "../../../assets/playimg.svg"

class HeroTitile extends React.Component{
       constructor(props) {
      super(props);
      this.heroH1 = React.createRef();

    }

     render(){
        return(
            
                <div className="planto-body-hero-title">
                    <section>
                        <h1 ref={this.heroH1}>Breath Natureal </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </section>
                    <div className='planto-body-hero-buttons-container'>
                    <button className="explore-button">Explore</button>
                    <button className='paly-button'> <Image classObject='playIcon' imagePath={playIcon}/> <span>Live Demo...</span></button>
                    </div>
                </div>
        )
           
    }
    componentDidMount(){
         this.textSize(this.heroH1.current, 0.1322869955156)
         window.addEventListener('resize', ()=>{
            this.textSize(this.heroH1.current, 0.1322869955156)
         });
    }

    textSize(object, size){
        console.log('resize')
       let objecrParent = object.parentNode.offsetWidth;
       object.style.fontSize = `${objecrParent * size}px`;
    }
}

export default HeroTitile;