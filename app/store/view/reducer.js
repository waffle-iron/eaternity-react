/* @flow */
import { TOOGLE_PRODUCT_VISIBILITY, UPDATE_SEARCH_INPUT } from './action-types'

const initialState = {
  productFilter: 'SHOW_SUBSET',
  searchInput: ''
}

const view = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case TOOGLE_PRODUCT_VISIBILITY:
      if (state.productVisibility === 'SHOW_SUBSET') {
        return Object.assign({}, state, {productFilter: 'SHOW_ALL'})
      }

      return Object.assign({}, {productFilter: 'SHOW_SUBSET'})
    case UPDATE_SEARCH_INPUT:
      return Object.assign({}, state, {searchInput: action.inputValue})
    default:
      return state
  }
}

export default view
