/* @flow */
import { CHANGE_DATADIR, PRODUCT_FETCH_SUCCEEDED, PRODUCT_FETCH_FAILED } from './action-types'

const initialState = {
  dataDir: '',
  products: [],
  errorMessages: []
}

const data = (state: Object = initialState, action: Object) => {
  switch (action.type) {

    case CHANGE_DATADIR:
      return Object.assign({}, state, {dataDir: action.dir})

    case PRODUCT_FETCH_SUCCEEDED:
      return Object.assign({}, state, {products: action.products})

    case PRODUCT_FETCH_FAILED:
      return Object.assign({}, state, {
        errorMessages: [...state.errorMessages, action.message]
      })

    default:
      return state
  }
}

export default data
