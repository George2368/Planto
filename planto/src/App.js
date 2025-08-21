import React from 'react';
import './css/App.css';
import Header from './components/header.js';

class App extends React.Component{
  render(){
      return (
    <div className="App-planto">
      <Header />
      <main className="planto-body"></main>
      <footer className="planto-footer"></footer>
    </div>
  )}

}

export default App;
