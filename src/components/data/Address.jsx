import React, { Component } from 'react'

export default class Address extends Component {
  render() {
    return (
      <div className="address  mt-2 mb-2">
      {this.props.address ? `Адрес: ${this.props.address}` : ''}
        {this.props.children}
      </div>
    )
  }
}
