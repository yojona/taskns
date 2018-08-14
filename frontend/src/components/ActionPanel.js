import React, { Component } from 'react'
import Button from './Button'

import Store from '../Store/Store'

export default class ActionPanel extends Component {
  add () {
    Store.showAddModal()
  }

  load () {
    Store.fetchItems()
  }

  save () {
    Store.saveItems()
  }

  render () {
    return (
      <div>
        <Button icon='icon-plus' onClick={this.add} />
        <Button icon='icon-download' onClick={this.load} />
        <Button icon='icon-floppy' onClick={this.save} />
      </div>
    )
  }
}
