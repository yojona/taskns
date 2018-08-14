import React, { Component } from 'react'
import ActionItem from './ActionItem'
import Store from '../Store/Store'

export default class Track extends Component {
  componentDidUpdate () {
    this.strikethrough(this.props.checked)
  }

  componentDidMount () {
    this.strikethrough(this.props.checked)
  }

  strikethrough (checked) {
    this.refs.label.style.textDecoration = checked ? 'line-through' : 'none'
  }

  check (e) {
    Store.checkItem(this.props.index, e.target.checked)
    this.strikethrough(e.target.checked)
  }

  bgRow (index) {
    return index % 2 === 0 ? '#eee' : '#fff'
  }

  render () {
    return (
      <li style={Object.assign({}, styles.container, { backgroundColor: this.bgRow(this.props.index) })}>
        <div>
          <span style={styles.index}>{this.props.index + 1}</span>
          <input type='checkbox' id={`track${this.props.index}`} checked={this.props.checked} onChange={this.check.bind(this)} />
          <label ref='label' htmlFor={`track${this.props.index}`} style={{userSelect: 'none'}}>{this.props.title}</label>
        </div>
        <ActionItem index={this.props.index} />
      </li>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    borderRadius: 8,
    border: '2px solid #bbb'
  },
  index: {
    margin: 16
  }
}
