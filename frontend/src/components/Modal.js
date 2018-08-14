import React, { Component } from 'react'
import Button from './Button'
import Store from '../Store/Store'
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

export default class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  hide () {
    this.setState({inputValue: ''})
    Store.hideModal()
  }

  componentWillReceiveProps () {
    if (!this.props.clear) {
      this.setState({inputValue: Store.data.items[Store.data.currentItem] ? Store.data.items[Store.data.currentItem].name : ''})
    }
  }

  action () {
    this.setState({inputValue: ''})
    if (this.props.action && this.state.inputValue.length > 0) this.props.action(this.state.inputValue)
  }

  handleChange (e) {
    this.setState({inputValue: e.target.value})
  }

  render () {
    return (
      <Rodal visible={this.props.visible} customStyles={styles.modal} closeOnEsc showCloseButton={false} onClose={this.hide.bind(this)}>
        <div>{this.props.title}</div>
        <input
          type='text'
          style={styles.input}
          value={this.state.inputValue}
          onChange={this.handleChange.bind(this)}
        />
        <Button label='Cancelar' style={styles.button} onClick={this.hide.bind(this)} />
        <Button label='Aceptar' style={styles.button} onClick={this.action.bind(this)} />
      </Rodal>
    )
  }
}

const styles = {
  modal: {
    display: 'table',
    overflow: 'auto',
    height: '1%',
    color: '#333',
    backgroundColor: '#fff'
  },
  input: {
    color: '#333',
    fontSize: 12,
    outline: 'none',
    backgroundColor: '#eee',
    border: '1px solid #bbb',
    borderRadius: 3,
    padding: 8,
    margin: 4,
    width: 'calc(100% - 24px)'
  },
  button: {
    fontSize: 12,
    padding: 4,
    borderRadius: 3,
    margin: 4,
    float: 'right'
  }
}
