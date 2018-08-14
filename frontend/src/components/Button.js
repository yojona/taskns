import React, { Component } from 'react'

export default class Button extends Component {
  click () {
    if (this.props.onClick) this.props.onClick()
  }

  hover () {
    this.refs.button.style.backgroundColor = '#ddd'
  }

  leave () {
    this.refs.button.style.backgroundColor = '#ccc'
  }

  render () {
    return (
      <div
        onClick={() => this.click()}
        onMouseEnter={this.hover.bind(this)}
        onMouseLeave={this.leave.bind(this)}
        style={Object.assign({}, styles.button, this.props.style || {})}
        ref='button'>
        {this.props.icon && <i className={`demo-icon ${this.props.icon}`} />}
        {this.props.label && <span> {this.props.label}</span>}
      </div>
    )
  }
}

const styles = {
  button: {
    display: 'inline',
    backgroundColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    margin: 8,
    cursor: 'pointer',
    border: '2px solid #bbb'
  }
}
