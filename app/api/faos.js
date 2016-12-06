import jsonStore from 'electron-json-storage'
import pify from 'pify'

const storage = pify(jsonStore)

const faoApi = {
  fetchAllFAOs: () => storage.get('faos')
}

export default faoApi
