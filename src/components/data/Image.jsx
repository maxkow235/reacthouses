import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <div className="img_wrapper">
        <div className="wrap_inner">
          <div className={`overlay ${(this.props.children ? 'darken':'')}` }></div>
        	<img src={this.props.image} alt=""/>
        </div>
        {this.props.children}
      </div>
    )
  }
}
