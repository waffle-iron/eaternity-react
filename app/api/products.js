import jsonStore from 'electron-json-storage'
import pify from 'pify'

const storage = pify(jsonStore)

const productApi = {
  fetchAllProducts: () => storage.get('products'),
  saveProduct: (product) => storage.set('products', product)
}

export default productApi
