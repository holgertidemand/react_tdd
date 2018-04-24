import React, {Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {

  constructor(){
    super();
    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state; 
    const ids = this.state.gifts.map(gift => gift.id);
    const maxId = gifts.length > 0 ? Math.max(...ids) : 0;

    this.setState({ 
      gifts: [ ...gifts, { id: maxId+1 } ]
    })
  }

  renderGifts = () => {
    this.state.gifts.map(gift => {
      return (
        <div key={ gift.id }></div>
      );
    });
  }

  render(){
    return (
      <div>
        <h3>Gift Giver</h3>
        <div className="gift-list">
          { this.renderGifts }
        </div>
        <Button className="btn-add" onClick={ this.addGift }>Add Gift</Button>
      </div>  
    );
  }
}

export default App;