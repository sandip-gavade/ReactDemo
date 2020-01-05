import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './Component/learning-example/FirstComponent.jsx'
import SecondComponent from './Component/learning-example/SecondComponent.jsx'



class App extends Component{
  render(){
    return (
      <div className="App">
        <div><h1>App Component</h1></div>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </div>
    );
  }
}



export default App;
