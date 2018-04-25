import React, { Component } from 'react'; 
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class Gift extends Component {
  constructor(){
    super();
    this.state = { person: '', present: '' };
  }

  renderInput = (field) => {
    const className = `input-${field.toLowerCase()}`
      return(
      <FormGroup key={field}>
        <ControlLabel>{ field }</ControlLabel>
        <FormControl 
          className={ className }
          onChange={ event => this.onInputChange(event, field) } 
        />
      </FormGroup>
      );
   }

   onInputChange = (event, fieldName) => {
     const field = fieldName.toLowerCase()
     this.setState({[ field ]: event.target.value })
   }


  render() {
    const fieldList = ['Person', 'Present'];
    return (
      <div>
        <Form>
          { fieldList.map(this.renderInput) }
        </Form>
        <Button
        className="btn-remove"
        onClick={() => this.props.removeGift(this.props.obj.id) }
        > 
        Remove Gift 
        </Button>
      </div>
    );
  };
}

export default Gift;