import * as actions from './action-types'

export const changeDataDir = (dir) => ({type: actions.CHANGE_DATADIR, dir})

export const fetchAllProducts = () => {
  return {
    type: actions.PRODUCT_FETCH_ALL_REQUESTED
  }
}

export const fetchProduct = (id) => {
  return {
    type: actions.PRODUCT_FETCH_REQUESTED
  }
}
