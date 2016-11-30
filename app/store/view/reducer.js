/* @flow */
import { TOOGLE_PRODUCT_VISIBILITY } from './action-types'

const initialState = {
  productFilter: 'SHOW_SUBSET'
}

const view = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case TOOGLE_PRODUCT_VISIBILITY:
      if (state.productVisibility === 'SHOW_SUBSET') {
        return Object.assign({}, {productFilter: 'SHOW_ALL'})
      }

      return Object.assign({}, {productFilter: 'SHOW_SUBSET'})
    default:
      return state
  }
}

export default view
