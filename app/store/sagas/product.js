import { takeLatest } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { getSelectedProduct } from '../selectors/product'
import edbApi from '../../api/edb'
import * as actionTypes from '../data/action-types'

// worker saga: fires on PRODUCT_FETCH_ALL_REQUESTED
function * fetchAllProducts () {
  try {
    const products = yield call(edbApi.fetchAllProducts)
    yield put({type: actionTypes.PRODUCT_FETCH_ALL_SUCCEEDED, products})
  } catch (err) {
    yield put({type: actionTypes.PRODUCT_FETCH_ALL_FAILED, message: err.message})
  }
}

/* https://stackoverflow.com/questions/37772877/how-to-get-something-from-the-state
-store-inside-a-redux-saga-function
*/
function * saveProduct () {
  try {
    const selectedProduct = yield select(getSelectedProduct)
    yield call(edbApi.saveProduct, [selectedProduct])
    yield put({type: actionTypes.PRODUCT_SAVE_SUCCEEDED})
  } catch (err) {
    yield put({type: actionTypes.PRODUCT_SAVE_FAILED, message: err.message})
  }
}

// sagas
export function * fetchProductsSaga () {
  yield takeLatest(actionTypes.PRODUCT_FETCH_ALL_REQUESTED, fetchAllProducts)
}

export function * saveProductSaga () {
  yield takeLatest(actionTypes.PRODUCT_SAVE_REQUESTED, saveProduct)
}
