import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class TemplatePicker extends Component {
  constructor (props) {
    super(props);

    this.state = { 
      rSelected: this.props.template_id
      
     };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
   
  }

  componentWillMount() {
    fetch('http://demo4452328.mockable.io/templates')
      .then(res => res.json())
      .then(data =>{ 
        this.setState({templates:data}) 
      })
      .then(() => { console.log(this.state.templates)})
    
  }

  onRadioBtnClick(rSelected) {
    this.props.changeTemp(rSelected);
    this.setState({ rSelected });
  }

  render() {
    return (
      <div className="picker sticky-top">
        <h5>Template Id</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>1</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>2</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>3</Button>
        </ButtonGroup>
        

        
       
       
      </div>
    );
  }
}

export default TemplatePicker;