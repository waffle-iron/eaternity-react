import jsonStore from 'electron-json-storage'
import pify from 'pify'

const storage = pify(jsonStore)

const nutrientApi = {
  fetchAllNutrients: () => storage.get('nutrients')
}

export default nutrientApi
