/* @flow */
import * as actionTypes from './action-types'

const initialState = {
  dataDir: '',
  products: [],
  errorMessages: []
}

const data = (state: Object = initialState, action: Object) => {
  switch (action.type) {

    case actionTypes.CHANGE_DATADIR:
      return Object.assign({}, state, {dataDir: action.dir})

    case actionTypes.PRODUCT_FETCH_ALL_SUCCEEDED:
      return Object.assign({}, state, {
        products: action.products
      })

    case actionTypes.PRODUCT_FETCH_ALL_FAILED:
      return Object.assign({}, state, {
        errorMessages: [...state.errorMessages, action.message]
      })

    default:
      return state
  }
}

export default data
