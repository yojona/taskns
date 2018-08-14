
let api = 'http://localhost:1984/api'

// Tuve que hacer esto por un bug en la librería Mafuba con los arrays 😅
function parseArray (array) {
  return JSON.parse(JSON.stringify(array))
}

export async function fetchItems () {
  this.updateStatus('loading')
  try {
    let data = await fetch(`${api}/load`)
    data = await data.json()
    this.setState({items: data.items})
  } catch (e) {
    throw new Error(e)
  }
}

export function saveItems () {
  this.updateStatus('saving')
  try {
    fetch('http://localhost:1984/api/save/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ items: this.getData().items })})
  } catch (e) {
    throw new Error(e)
  }
}

export function checkItem (item, checked) {
  let items = parseArray(this.data.items)
  items[item].checked = checked
  this.setState({items})
}

export function addItem (name) {
  let items = parseArray(this.data.items)
  items.push({name: name, checked: false})
  this.setState({items})
  this.hideModal()
}

export function removeItem (index) {
  let items = parseArray(this.data.items)
  items.splice(index, 1)
  this.setState({items})
}

export function updateItem (name) {
  let index = this.data.currentItem
  let items = parseArray(this.data.items)
  items[index].name = name
  this.setState({items})
  this.hideModal()
}

export function updateStatus (newStatus) {
  const items = parseArray(this.data.items)
  let data = { items, status: newStatus }
  this.setState(data)

  setTimeout(() => {
    const items = parseArray(this.data.items)
    this.setState({items, status: null})
  }, 500)
}

export function hideModal () {
  let items = parseArray(this.data.items)
  this.setState({items, showingAddModal: false, showingUpdateModal: false})
}

export function showUpdateModal (index) {
  const items = parseArray(this.data.items)
  this.setState({items, currentItem: index, showingUpdateModal: true})
}
export function showAddModal () {
  const items = parseArray(this.data.items)
  this.setState({items, showingAddModal: true})
}
