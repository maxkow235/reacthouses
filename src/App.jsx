import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import HouseCard from "./components/HouseCard";
import TemplatePicker from "./components/TemplatePicker";





class App extends Component {
  constructor(){
    super();
  this.state = {
    houses: [],
    templates: [],
    template_id: 2,
    selectedTemplate:[]
  };
}

  componentWillMount() {
    fetch("https://demo4452328.mockable.io/templates")
      .then(res => res.json())
      .then(data => {
        this.setState({ templates: data},() => {
          this.setState({ selectedTemplate:this.state.templates.find(o => o.id === this.state.template_id).template}) 
        });
        
      })
      .catch(err => {
        return err;
      });
    fetch("https://demo4452328.mockable.io/properties")
      .then(res => res.json())
      .then(data => {
        this.setState({ houses: data.data },() => {
          console.log(this.state.houses)
        })
        
      })
      .catch(err => {
        return err;
      });
  }

  onTemplateChange(newId) {
      this.setState({
        template_id:newId
      },() => {
        this.setState({selectedTemplate:this.state.templates.find(o => o.id === this.state.template_id).template})
      })
      
  }

  render() {
    const houseCards = this.state.houses.map(house => (
      <HouseCard house={house} template={this.state.selectedTemplate} key={house.id} />
    ));
    return (
     
        <div className="App">
          <h1 className="text-center mt-5">Test React App</h1>
          <Container fluid={true}>
            <Row>
              <Col md="2" className="d-flex flex-column justify-center">
              
                <TemplatePicker changeTemp={this.onTemplateChange.bind(this)} template_id={this.state.template_id} />
               
              </Col>
              <Col md="10">
                <Row>{houseCards}</Row>
              </Col>
            </Row>
          </Container>
        </div>
     
    );
  }
}

export default App;
