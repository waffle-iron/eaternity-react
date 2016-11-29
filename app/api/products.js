import jsonStore from 'electron-json-storage'
import pify from 'pify'

const storage = pify(jsonStore)

const productApi = {
  getAllProducts: async () => await storage.get('products')
}

export default productApi
