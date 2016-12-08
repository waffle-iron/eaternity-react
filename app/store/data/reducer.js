/* @flow */
import * as actionTypes from './action-types'

const initialState = {
  dataDir: '',
  products: [],
  faos: [],
  nutrients: [],
  editedProduct: {},
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
        editedProduct: state.products[indexOfSelectedProduct]
      })

    case actionTypes.SET_EDITED_PRODUCT_TO_NEW:
      const maxId = state.products.reduce((acc, product) => {
        return (acc >= product.id) ? acc : product.id
      }, 0)
      const id = maxId + 1
      const name = 'newproduct'
      return Object.assign({}, state, {
        editedProduct: {
          name,
          id,
          filename: `${id}-${name}-prod.json`
        }
      })

    case actionTypes.UPDATE_SELECTED_PRODUCT:
      let updatedProduct = {}
      if (action.field === 'name') {
        const splitFilename = state.editedProduct.filename.split('-')
        const filename = [
          splitFilename[0],
          action.value,
          splitFilename[2]
        ].join('-')
        updatedProduct = Object.assign({}, state.editedProduct, {
          name: action.value,
          filename
        })
      } else {
        updatedProduct = Object.assign({}, state.editedProduct, {
          [action.field]: action.value
        })
      }
      return Object.assign({}, state, {
        editedProduct: updatedProduct
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

    case actionTypes.NUTRIENT_FETCH_ALL_SUCCEEDED:
      return Object.assign({}, state, {
        nutrients: action.nutrients
      })

    case actionTypes.NUTRIENT_FETCH_ALL_FAILED:
      return Object.assign({}, state, {
        errorMessages: [...state.errorMessages, action.message]
      })

    default:
      return state
  }
}

export default data
