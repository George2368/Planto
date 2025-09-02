import React from 'react';
import './css/App.css';
import Header from './components/header.js';
import Main from './components/main.js';
class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      items:[
        {
          id: 1,
          name: "Calathea plant",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          price: 359,
          img: "Calathea.png"
        },

        {
          id: 2,
          name: "Ficus plant",
          desc: "Plant emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 459,
          img: "ficus.png"
        },
          {
          id: 3,
          name: "Cactus plant",
          desc: "Cactus emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 499,
          img: "cactus.png"
        },
                {
          id: 4,
          name: "List plant",
          desc: "List ipsum dolor sit amet, consectetur adipiscing elit",
          price: 379,
          img: "List.png"
        },

        {
          id: 5,
          name: "Lists plant",
          desc: "Lists emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 859,
          img: "Lists.png"
        },
          {
          id: 6,
          name: "Cacoeto plant",
          desc: "Cacoeto emet ipsum ipsum dolor sit amet, consectetur adipiscing elit",
          price: 299,
          img: "cacoeto.png"
        }
      ],
      reviews:[
        {
          id: "r1",
          name: "Alena Patel",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 4.5,
          profile: "alena.png"
        },
        {
          id: "r2",
          name: "Maxn Raval",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 4,
          profile: "maxn.png"
        },
        {
          id: "r3",
          name: "Venely K",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 5,
          profile: "venely.png"
        },
          {
          id: "r4",
          name: "Lii thakur",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
          stars: 5,
          profile: "lii.png"
        }

      ]
    }
  }

  render(){
      return (
    <div className="App-planto">
      <Header classType=""/>
      <Main classType="" itemsCards={this.state.items} reviews={this.state.reviews}/>
      <footer className="planto-footer"></footer>
    </div>
  )}

}

export default App;
