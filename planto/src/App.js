import React from 'react';
import './css/App.css';
import Header from './components/header.js';
import Main from './components/main.js';
class App extends React.Component{
  render(){
      return (
    <div className="App-planto">
      <Header classType=""/>
      <Main classType=""/>
      <footer className="planto-footer"></footer>
    </div>
  )}

}

export default App;
