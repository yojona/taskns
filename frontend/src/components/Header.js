import React from 'react'
import logo from '../ns-logo.png'
import ActionPanel from './ActionPanel'

export default () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt='logo' />
      <h1>Playlist</h1>
      <ActionPanel />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    width: 800
  }
}
