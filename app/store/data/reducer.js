/* @flow */
import * as actionTypes from './action-types'

const initialState = {
  dataDir: '',
  products: [],
  faos: [],
  selectedProduct: {},
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

    case actionTypes.SELECT_PRODUCT:
      const indexOfSelectedProduct = state.products.findIndex(product => {
        return product.id === action.id
      })
      return Object.assign({}, state, {
        selectedProduct: state.products[indexOfSelectedProduct]
      })

    case actionTypes.UPDATE_SELECTED_PRODUCT:
      const updatedProduct = Object.assign({}, state.selectedProduct, {
        [action.field]: action.value
      })
      return Object.assign({}, state, {
        selectedProduct: updatedProduct
      })

    case actionTypes.PRODUCT_SAVE_FAILED:
      return Object.assign({}, state, {
        errorMessages: [...state.errorMessages, action.message]
      })

    case actionTypes.FAO_FETCH_ALL_SUCCEEDED:
      return Object.assign({}, state, {
        faos: action.faos
      })

    case actionTypes.FAO_FETCH_ALL_FAILED:
      return Object.assign({}, state, {
        errorMessages: [...state.errorMessages, action.message]
      })

    default:
      return state
  }
}

export default data
