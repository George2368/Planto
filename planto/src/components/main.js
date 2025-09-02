import React from "react";
import Hero from "./maincomponents/hero";
import MainContent from "./maincomponents/maincontent";
import '../css/main.css';

class Main extends React.Component{
    render(){
        return(
            <main className="planto-body">
                <Hero itemsCards={this.props.itemsCards} reviews={this.props.reviews}/>
                <MainContent itemsCards={this.props.itemsCards} reviews={this.props.reviews}/>
            </main>
        )
           
    }
}

export default Main;