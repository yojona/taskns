import React, { Component } from 'react'
import Button from './Button'

import Store from '../Store/Store'

export default class ActionItem extends Component {
  edit () {
    Store.showUpdateModal(this.props.index)
  }

  delete () {
    Store.removeItem(this.props.index)
  }

  render () {
    return (
      <div style={styles.container}>
        <Button icon='icon-pencil' onClick={this.edit.bind(this)} />
        <Button icon='icon-trash-empty' onClick={this.delete.bind(this)} />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
