import jsonStore from 'electron-json-storage'
import pify from 'pify'

const storage = pify(jsonStore)

const edbApi = {
  fetchAllProducts: () => {
    return storage.get('products')
  },

  saveProduct: product => {
    return storage.set('products', product)
  },

  fetchAllFAOs: () => {
    return storage.get('faos')
  },

  fetchAllNutrients: () => {
    return storage.get('nutrients')
  }
}

export default edbApi
