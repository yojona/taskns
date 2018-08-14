import Mafuba from 'mafuba'
import * as Methods from './Methods'

export default new Mafuba({
  data: {
    items: [],
    statusLabel: '',
    showingUpdateModal: false,
    showingAddModal: false,
    currentItem: null
  },
  methods: {
    fetchItems: Methods.fetchItems,
    checkItem: Methods.checkItem,
    removeItem: Methods.removeItem,
    saveItems: Methods.saveItems,
    addItem: Methods.addItem,
    updateItem: Methods.updateItem,
    updateStatus: Methods.updateStatus,
    hideModal: Methods.hideModal,
    showUpdateModal: Methods.showUpdateModal,
    showAddModal: Methods.showAddModal
  }
})
