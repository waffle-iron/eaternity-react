import * as actions from './action-types'

export const changeDataDir = (dir) => ({type: actions.CHANGE_DATADIR, dir})
export const fetchProducts = () => ({type: actions.PRODUCT_FETCH_REQUESTED})
