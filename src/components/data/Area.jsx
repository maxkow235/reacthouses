import React, { Component } from 'react'

export default class Area extends Component {
  render() {
    return (
      <div className="area mt-2 mb-2">
        {this.props.area ? `Площадь: ${this.props.area} кв. м.` : ''}
       
      </div>
    )
  }
}
