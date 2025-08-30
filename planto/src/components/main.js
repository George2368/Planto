import React from "react";
import Hero from "./maincomponents/hero";
import '../css/main.css';

class Main extends React.Component{
    render(){
        return(
            <main className="planto-body">
                <Hero />
            </main>
        )
           
    }
}

export default Main;