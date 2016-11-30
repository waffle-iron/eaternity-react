import jsonStore from 'electron-json-storage'
import pify from 'pify'

const storage = pify(jsonStore)

const productApi = {
  fetchProducts: async () => await storage.get('products')
}

export default productApi
