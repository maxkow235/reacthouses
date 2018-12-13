import React, { Component } from 'react'

export default class Price extends Component {

  formatPrice(num) { 
        const str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');   
  }

  render() {
    return (
      <>
        <div className="price">${this.formatPrice(this.props.price)}</div>
        {this.props.children}
      </>
    )
  }
}
