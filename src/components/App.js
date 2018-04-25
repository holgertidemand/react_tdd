import React, {Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './gift';

class App extends Component {

  constructor(){
    super();
    this.state = { gifts: [] };
    this.addGift = this.addGift.bind(this);
    this.removeGift = this.removeGift.bind(this);
  }

  addGift() {
    const { gifts } = this.state; 
    const ids = gifts.map(gift => gift.id);
    const maxId = gifts.length > 0 ? Math.max(...ids) : 0;

    this.setState({ 
      gifts: [ ...gifts, { id: maxId+1 } ]
    });
  }

removeGift(id){
  const gifts = this.state.gifts.filter(gift => gift.id !== id);
  this.setState({ gifts });
}


  render(){
    return (
      <div>
        <h3>Gift Giver</h3>
        <div className="gift-list">
          {  this.state.gifts.map(gift => {
                return (
                  <Gift 
                    key={ gift.id }
                    gift={ gift }
                    removeGift={ this.removeGift }
                  />
                );
              }) }
          
        </div>
        <Button className="btn-add" onClick={ this.addGift }>Add Gift</Button>
      </div>  
    );
  }
}

export default App;