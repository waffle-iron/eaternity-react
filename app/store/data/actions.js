import * as actions from './action-types'

export const changeDataDir = (dir) => ({type: actions.CHANGE_DATADIR, dir})

// products
export const fetchAllProducts = () => {
  return {
    type: actions.PRODUCT_FETCH_ALL_REQUESTED
  }
}

export const selectProduct = (id) => ({type: actions.SELECT_PRODUCT, id})

export const updateSelectedProduct = (field, value) => {
  return {
    type: actions.UPDATE_SELECTED_PRODUCT,
    field,
    value
  }
}

export const saveProduct = () => ({type: actions.PRODUCT_SAVE_REQUESTED})

// FAO
export const fetchAllFAOs = () => ({type: actions.FAO_FETCH_ALL_REQUESTED})
