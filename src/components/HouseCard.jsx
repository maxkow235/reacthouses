import React, { Component } from "react";
import { Address, Area, Image, Price } from "./data/index";
import { Col, Card } from "reactstrap";

export default class HouseCard extends Component {
  state = {
    template: [
      {
        component: "IMAGE",
        field: "images"
      },
      {
        component: "ADDRESS",
        field: "full_address"
      },
      {
        component: "PRICE",
        field: "price"
      },
      {
        component: "AREA",
        field: "area"
      }
    ]
  };

  getProp(field) {
    switch (field) {
      case "images":
        return this.props.house.images[0];
      case "full_address":
        return this.props.house.full_address;
      case "price":
        return this.props.house.price;
      case "area":
        return this.props.house.area;
      default:
        return "";
    }
  }

  getTempFromJson(obj) {
    let children = obj.children
      ? obj.children.map(obj => {
          return this.getTempFromJson(obj);
        })
      : "";
    switch (obj.component) {
      case "IMAGE":
        return (
          <Image key="0" image={this.getProp(obj.field)} children={children} />
        );
      case "ADDRESS":
        return (
          <Address
            key="1"
            address={this.getProp(obj.field)}
            children={children}
          />
        );
      case "PRICE":
        return (
          <Price key="2" price={this.getProp(obj.field)} children={children} />
        );
      case "AREA":
        return (
          <Area key="3" area={this.getProp(obj.field)} children={children} />
        );
      default:
        return "";
    }
  }

  getTemplate(temp) {
    const renderedTemp = temp.map(obj => {
      return this.getTempFromJson(obj)
    });
    return renderedTemp;
  }

  render() {
    return (
      <Col md="4">
          <Card className="house_card bg-light">
          {this.getTemplate(this.props.template)}
          </Card> 
      </Col>
    );
  }
}
