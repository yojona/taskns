import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Store from './Store/Store'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should load items data', () => {
  return Store.fetchData()
    .then(data => data.json())
    .then(data => {
      expect(data).toBeDefined()
      expect(data.items[0].name).toEqual('Fight For The Right To Party')
    })
})
