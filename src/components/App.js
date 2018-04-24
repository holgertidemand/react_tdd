import React, {Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = { gifts: [] }; 
  }
  render(){
    return (
      <div>
        <h3>Gift Giver</h3>
      </div>  
    );
  }
}

export default App;