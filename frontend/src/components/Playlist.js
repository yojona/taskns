import React, { Component } from 'react'
import Track from './Track'
import Store from '../Store/Store'

export default class Playlist extends Component {
  componentWillMount () {
    Store.fetchItems()
  }

  render () {
    return (
      <ol style={styles.container}>
        {Store.data.items.map((track, i) => <Track key={i} title={track.name} index={i} checked={track.checked} />)}
        {!Store.data.items.length && <span style={styles.empty} role='img' aria-label='Crying face'> This playlist is empty 😢 </span> }
      </ol>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: 0,
    width: 800
  },
  empty: {
    alignSelf: 'center'
  }
}
