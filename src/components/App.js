import React, {Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './gift';
import { newId } from '../helpers/index';


class App extends Component {

  constructor(){
    super();
    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state; 

    return this.setState({ 
      gifts: [ ...gifts, { id: newId(gifts) } ]
    });
  }

removeGift = (id) => {
  const gifts = this.state.gifts.filter(gift => gift.id !== id);
  return this.setState({ gifts });
}

renderGift = (gift) => {
    return (
      <div key={ gift.id }>
        <Gift 
          obj={ gift }
          removeGift={ this.removeGift }
        />
      </div>
    );
}


  render(){
    return (
      <div>
        <h3>Gift Giver</h3>
        <div className="gift-list">
          { this.state.gifts.map(this.renderGift) }
        </div>
        <Button className="btn-add" onClick={ this.addGift }>Add Gift</Button>
      </div>  
    );
  }
}

export default App;