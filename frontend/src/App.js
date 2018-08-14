import React, { Component } from 'react'
import Store from './Store/Store'
import Spinner from './components/Spinner'
import Header from './components/Header'
import Playlist from './components/Playlist'
import Layout from './components/Layout'
import Modal from './components/Modal'

class App extends Component {
  componentDidMount () {
    Store.link(this)
  }

  updateItem (name) {
    Store.updateItem(name)
  }

  addItem (name) {
    Store.addItem(name)
  }

  render () {
    return (
      <Layout>
        <Header />
        <Spinner label={Store.data.status} hidden={!Store.data.status} color={'#ff3a28'} />
        <Playlist />
        <Modal title='Add' visible={Store.data.showingAddModal} action={this.addItem.bind(this)} clear />
        <Modal title='Update' visible={Store.data.showingUpdateModal} action={this.updateItem.bind(this)} />
      </Layout>
    )
  }
}

export default App
