import * as actions from './action-types'

export const toggleProductVisibility = () => ({
  type: actions.TOOGLE_PRODUCT_VISIBILITY
})

export const updateSearchInput = (inputValue) => ({
  type: actions.UPDATE_SEARCH_INPUT,
  inputValue
})
